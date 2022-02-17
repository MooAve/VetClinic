import React from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom'

function EditClientsPage() {

    const navigate = useNavigate();

    return (
        <div className='App'>
            <h1>Update a Client</h1>
            <table id="EditClient">
                <tbody>
                    <tr>
                        <td>*First Name:</td>
                        <td><input type="text" name="clientFName" /></td>
                        <td>*Last Name:</td>
                        <td><input type="text" name="clientLName" /></td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td><input type="text" name="clientAddress" /></td>
                        <td>*Phone:</td>
                        <td><input type="text" name="clientPhone" /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="text" name="clientEmail" /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => alert("This button saves client changes!")}>Save</button>
            <button onClick={() => navigate('/Clients')}>Cancel</button>
        </div>
    );
}

export default EditClientsPage;