import React, {useState, useEffect} from 'react';
import '../App.css';
import Axios from 'axios'
import PetsTable from '../components/PetsTable';

function PetsPage() {

    const [showTable, openTable] = useState(false)

    const [name, setName] = useState('')
    const [species, setSpecies] = useState('')
    const [breed, setBreed] = useState('')
    const [birthYear, setBirthYear] = useState('')
    const [birthMonth, setBirthMonth] = useState('')
    const [birthDay, setBirthDay] = useState('')
    const [weight, setWeight] = useState('')
    const [sex, setSex] = useState('')
    const [clientID, setClientID] = useState('')


    const createPet = () => {
        console.log('hello!!!');
        Axios.post('http://localhost:3001/api/insert', {
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
        });
    };

    const clear = () => {
        alert('hello');
        console.log('hello');
    }

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
                        <td><input type="text" name="species" /></td>
                    </tr>
                    <tr>
                        <td>Breed:</td>
                        <td><input type="text" name="breed" /></td>
                        <td>*Birth Year:</td>
                        <td><input type="number" name="birthYear" /></td>
                    </tr>
                    <tr>
                        <td>Birth month:</td>
                        <td><input type="number" name="birthMonth" /></td>
                        <td>Birth day:</td>
                        <td><input type="number" name="birthDay" /></td>
                    </tr>
                    <tr>
                        <td>Weight:</td>
                        <td><input type="number" name="weight" /></td>
                        <td>*Sex:</td>                     
                        <td>
                            <select id="sex" name="sex">
                                <option hidden disabled selected value></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>*Owner ID:</td>
                        <td><select id="clientID" name="clientID" /></td>
                    </tr>
                </tbody>
                <tfoot>*Required</tfoot>
            </table>
            <button onClick={createPet}>Create</button>
            <button onClick={clear}>Clear</button>
            
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
                    {showTable && <PetsTable />}
            </div>
        </div>
    );
}

export default PetsPage;