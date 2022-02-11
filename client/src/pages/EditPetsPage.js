import React from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom'

function EditClientsPage() {

    const navigate = useNavigate();

    return (
        <div className='App'>
            <h1>Update a Pet</h1>
            <table id="EditPets">
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
                        <td><input type="text" name="petSex" /></td>
                    </tr>
                    <tr>
                        <td>Owner Name:</td>
                        <td><input type="text" name="petOwner" /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => alert("This button saves pet changes!")}>Save</button>
            <button onClick={() => navigate('/Pets')}>Cancel</button>
        </div>
    );
}

export default EditClientsPage;