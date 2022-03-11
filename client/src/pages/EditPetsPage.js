import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import '../App.css';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

function EditPetsPage() {

    const navigate = useNavigate();
    const location = useLocation();

    const petID = location.state

    const [name, setName] = useState('')
    const [species, setSpecies] = useState('')
    const [breed, setBreed] = useState('')
    const [birthYear, setBirthYear] = useState('')
    const [birthMonth, setBirthMonth] = useState('')
    const [birthDay, setBirthDay] = useState('')
    const [weight, setWeight] = useState('')
    const [sex, setSex] = useState('')
    const [clientID, setClientID] = useState('')
    const [clientList, setClientList] = useState([])

    const updatePet = () => {
        console.log(petID)
        Axios.put(`http://localhost:3001/pets/update/${petID}`, {
            name: name,
            species: species,
            breed: breed,
            birthYear: birthYear,
            birthMonth: birthMonth,
            birthDay: birthDay,
            weight: weight,
            sex: sex,
            clientID: clientID
        }).then(()=> {
            console.log(clientID)
            alert('successful insert');
        });
    };

    useEffect(() => {
        Axios.get('http://localhost:3001/clients/get').then((response) => {
            setClientList(response.data)
        })
    }, []);
    
    return (
        <div className='App'>
            <h1>Update a Pet</h1>
            <table id="EditPets">
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" name="name" onChange={((e)=> {
                            setName(e.target.value)
                        })} /></td>
                        <td>*Species:</td>
                        <td><input type="text" name="species" onChange={((e)=> {
                            setSpecies(e.target.value)
                        })} /></td>
                    </tr>
                    <tr>
                        <td>Breed:</td>
                        <td><input type="text" name="breed" onChange={((e)=> {
                            setBreed(e.target.value)
                        })} /></td>
                        <td>*Birth Year:</td>
                        <td><input type="number" name="birthYear" onChange={((e)=> {
                            setBirthYear(e.target.value)
                        })} /></td>
                    </tr>
                    <tr>
                        <td>Birth month:</td>
                        <td><input type="number" name="birthMonth" onChange={((e)=> {
                            setBirthMonth(e.target.value)
                        })} /></td>
                        <td>Birth day:</td>
                        <td><input type="number" name="birthDay" onChange={((e)=> {
                            setBirthDay(e.target.value)
                        })} /></td>
                    </tr>
                    <tr>
                        <td>Weight:</td>
                        <td><input type="number" name="weight" onChange={((e)=> {
                            setWeight(e.target.value)
                        })} /></td>
                        <td>*Sex:</td>                     
                        <td>
                            <select id="sex" name="sex" onChange= {((e)=> {
                                setSex(e.target.value)
                            })}>
                                <option hidden disabled selected value></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>*Owner ID:</td>
                        <td><select id="clientID" name="clientID" onChange= {((e)=> {
                            setClientID(e.target.value)
                        })}>
                                <option hidden disabled selected value></option>
                                {clientList.map((val) => {
                                    return <option value={val.clientID}>{val.clientID}</option>
                                })}
                            </select>
                        </td>
                    </tr>
                </tbody>
                <tfoot>*Required</tfoot>
            </table>
            <button onClick={() => updatePet()}>Save</button>
            <button onClick={() => navigate('/Pets')}>Cancel</button>
        </div>
    );
}

export default EditPetsPage;