import React, {useState, useEffect} from 'react';
import '../App.css';
import Axios from 'axios';
import PetsTable from '../components/PetsTable';

function PetsPage() {

    const [showTable, openTable] = useState(false)
    const [pets, setPets] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/pets/get').then((response) => {
            setPets(response.data)
        });
    }, []);

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


    const createPet = () => {
        Axios.post('http://localhost:3001/pets/insert', {
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

    const deletePet = petID => {
        console.log(petID)
        Axios.delete(`http://localhost:3001/pets/${petID}`, {
        }).then(()=> {
            alert("pet deleted")
        });
    };

    useEffect(() => {
        Axios.get('http://localhost:3001/clients/get').then((response) => {
            setClientList(response.data)
        })
    }, []);

    return (
        <div className="App">
            <h1>Search or Create Pets</h1>
            <table id="CreatePet">
                <thead>
                    <th>Create New Pet</th>
                </thead>
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
            <button onClick={createPet}>Create</button>
            
            <table id="SearchPets">
                <thead>
                    <th>Find Pets</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" name="petName" /></td>
                        <td>Species:</td>
                        <td><input type="text" name="petSpecies" /></td>
                    </tr>
                    <tr>
                        <td>Breed:</td>
                        <td><input type="text" name="petBreed" /></td>
                        <td>Birth Year:</td>
                        <td><input type="number" name="petBirthYear" /></td>
                    </tr>
                    <tr>
                        <td>Birth month:</td>
                        <td><input type="number" name="petBirthMonth" /></td>
                        <td>Birth day:</td>
                        <td><input type="number" name="petBirthDay" /></td>
                    </tr>
                    <tr>
                        <td>Weight:</td>
                        <td><input type="number" name="petWeight" /></td>
                        <td>Sex:</td>
                        <td>
                            <select id="petSex" name="petSex">
                                <option></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Owner First Name:</td>
                        <td><input type="text" name="petOwnerFName" /></td>
                        <td>Owner Last Name:</td>
                        <td><input type="text" name="petOwnerLName" /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => openTable(true)}>Search</button>
            <button onClick={() => openTable(true)}>View All</button>
            <div>
                    {showTable && <PetsTable pets={pets} deletePet={deletePet} />}
            </div>
        </div>
    );
}

export default PetsPage;