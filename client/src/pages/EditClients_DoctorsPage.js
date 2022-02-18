import React from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom'

function EditClientsDoctorsPage() {

    const navigate = useNavigate();

    return (
        <div className='App'>
            <h1>Update a Client-Doctor Relationship</h1>
            <table id="EditClient_Doctor">
                <tbody>
                    <tr>
                        <td>*Client First Name:</td>
                        <td><input type="text" name="cdClientFName" /></td>
                        <td>*Client Last Name:</td>
                        <td><input type="text" name="cdClientLName" /></td>
                    </tr>
                    <tr>
                        <td>*Dr. First Name:</td>
                        <td><input type="text" name="cdDoctorFName" /></td>
                        <td>*Dr. Last Name:</td>
                        <td><input type="text" name="cdDoctorLName" /></td>
                    </tr>
                </tbody>
                <tfoot>*Required</tfoot>
            </table>
            <button onClick={() => alert("This button saves client-doctor changes!")}>Save</button>
            <button onClick={() => navigate('/Clients_Doctors')}>Cancel</button>
        </div>
    );
}

export default EditClientsDoctorsPage;