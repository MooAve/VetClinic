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
                        <td>*Client ID:</td>
                        <td><select name="cdClientID" /></td>
                    </tr>
                    <tr>
                        <td>*Doctor ID:</td>
                        <td><select name="cdDoctorID" /></td>
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