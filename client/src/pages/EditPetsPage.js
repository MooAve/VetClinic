import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

function EditPetsPage() {

    const navigate = useNavigate();
    const location = useLocation();

    const pet = location.state

    const [name, setName] = useState(pet.name)
    const [species, setSpecies] = useState(pet.species)
    const [breed, setBreed] = useState(pet.breed)
    const [birthYear, setBirthYear] = useState(pet.birthYear)
    const [birthMonth, setBirthMonth] = useState(pet.birthMonth)
    const [birthDay, setBirthDay] = useState(pet.birthDay)
    const [weight, setWeight] = useState(pet.weight)
    const [sex, setSex] = useState(pet.sex)
    const [clientID, setClientID] = useState(pet.clientID)
    const [client, setClient] = useState(pet.client)
    const [clientList, setClientList] = useState([])

    const updatePet = () => {
        console.log(pet.petID)
        Axios.put(`http://localhost:3001/pets/edit/${pet.petID}`, {
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
            alert("Successfully updated pet!")
            navigate('/Pets')
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
                        <td><input type="text" name="name" defaultValue={name} onChange={((e)=> {
                            setName(e.target.value)
                        })} /></td>
                        <td>*Species:</td>
                        <td><input type="text" name="species" required defaultValue={species} onChange={((e)=> {
                            setSpecies(e.target.value)
                        })} /></td>
                    </tr>
                    <tr>
                        <td>Breed:</td>
                        <td><input type="text" name="breed" defaultValue={breed} onChange={((e)=> {
                            setBreed(e.target.value)
                        })} /></td>
                        <td>*Birth Year:</td>
                        <td><input type="number" name="birthYear" required defaultValue={birthYear} onChange={((e)=> {
                            setBirthYear(e.target.value)
                        })} /></td>
                    </tr>
                    <tr>
                        <td>Birth month:</td>
                        <td><input type="number" name="birthMonth" defaultValue={birthMonth} onChange={((e)=> {
                            setBirthMonth(e.target.value)
                        })} /></td>
                        <td>Birth day:</td>
                        <td><input type="number" name="birthDay" defaultValue={birthDay} onChange={((e)=> {
                            setBirthDay(e.target.value)
                        })} /></td>
                    </tr>
                    <tr>
                        <td>Weight:</td>
                        <td><input type="number" name="weight" defaultValue={weight} onChange={((e)=> {
                            setWeight(e.target.value)
                        })} /></td>
                        <td>*Sex:</td>                     
                        <td>
                            <select id="sex" name="sex" required onChange= {((e)=> {
                                setSex(e.target.value)
                            })}>
                                <option hidden defaultValue={sex}>{sex}</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>*Client:</td>
                        <td><select id="clientID" name="clientID" required onChange= {((e)=> {
                            setClientID(e.target.value)
                        })}>
                                <option hidden defaultValue={clientID}>{client}</option>
                                {clientList.map((val) => {
                                    return <option value={val.clientID}>{val.fname.concat(" ", val.lname)}</option>
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