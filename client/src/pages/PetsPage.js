import React, {useState, useEffect} from 'react';
import '../App.css';
import Axios from 'axios';
import PetsTable from '../components/PetsTable';

function PetsPage() {

    const [pets, setPets] = useState([])

    useEffect(() => {
        loadPets()
    }, []);

    //Get data from 'Create' field
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

    //Get data from 'Search' field
    const [sName, searchName] = useState('')
    const [sSpecies, searchSpecies] = useState('')
    const [sBreed, searchBreed] = useState('')
    const [sBirthYear, searchBirthYear] = useState('')
    const [sBirthMonth, searchBirthMonth] = useState('')
    const [sBirthDay, searchBirthDay] = useState('')
    const [sWeight, searchWeight] = useState('')
    const [sSex, searchSex] = useState('')
    const [sClientID, searchClientID] = useState('')

    //
    const loadPets = () => {
        Axios.get('http://localhost:3001/pets/get').then((response) => {
            setPets(response.data)
        })
    }

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
            alert('successful insert');
            loadPets()
        });
    };

    const searchPets = () => {
        Axios.post('http://localhost:3001/pets/search', {
            name: sName,
            species: sSpecies,
            breed: sBreed,
            birthYear: sBirthYear,
            birthMonth: sBirthMonth,
            birthDay: sBirthDay,
            weight: sWeight,
            sex: sSex,
            clientID: sClientID
        }).then((response)=> {
            setPets(response.data)
            alert('Search Complete')
        });
    };

    const deletePet = petID => {
        console.log(petID)
        Axios.delete(`http://localhost:3001/pets/${petID}`, {
        }).then(()=> {
            alert(`Pet deleted`);
            loadPets();
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
                        <td><input type="text" name="name" onChange={((e)=> {
                            searchName(e.target.value)
                        })} /></td>
                        <td>*Species:</td>
                        <td><input type="text" name="species" onChange={((e)=> {
                            searchSpecies(e.target.value)
                        })} /></td>
                    </tr>
                    <tr>
                        <td>Breed:</td>
                        <td><input type="text" name="breed" onChange={((e)=> {
                            searchBreed(e.target.value)
                        })} /></td>
                        <td>Birth Year:</td>
                        <td><input type="number" name="birthYear" onChange={((e)=> {
                            searchBirthYear(e.target.value)
                        })} /></td>
                    </tr>
                    <tr>
                        <td>Birth month:</td>
                        <td><input type="number" name="birthMonth" onChange={((e)=> {
                            searchBirthMonth(e.target.value)
                        })} /></td>
                        <td>Birth day:</td>
                        <td><input type="number" name="birthDay" onChange={((e)=> {
                            searchBirthDay(e.target.value)
                        })} /></td>
                    </tr>
                    <tr>
                        <td>Weight:</td>
                        <td><input type="number" name="weight" onChange={((e)=> {
                            searchWeight(e.target.value)
                        })} /></td>
                        <td>Sex:</td>                     
                        <td>
                            <select id="sex" name="sex" onChange= {((e)=> {
                                searchSex(e.target.value)
                            })}>
                                <option disabled selected value></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Owner ID:</td>
                        <td><select id="clientID" name="clientID" onChange= {((e)=> {
                            searchClientID(e.target.value)
                        })}>
                                <option hidden disabled selected value></option>
                                {clientList.map((val) => {
                                    return <option value={val.clientID}>{val.clientID}</option>
                                })}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => searchPets()}>Search</button>
            <button onClick={() => loadPets()}>View All</button>
            <div>
                    {<PetsTable pets={pets} deletePet={deletePet}/>}
            </div>
        </div>
    );
}

export default PetsPage;