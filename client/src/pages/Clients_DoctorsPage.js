import React from 'react';
import '../App.css';

function Clients_DoctorsPage() {
    return (
        <div className="App">
            <h1>Search or Create Clients_Doctors</h1>
            <table id="SearchClients_Doctors">
                <thead>
                    <th>Find Clients_Doctors</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Client First Name:</td>
                        <td><input type="text" name="cdClientFName" /></td>
                        <td>Client Last Name:</td>
                        <td><input type="text" name="cdClientLName" /></td>
                    </tr>
                    <tr>
                        <td>Dr. First Name:</td>
                        <td><input type="text" name="cdDoctorFName" /></td>
                        <td>Dr. Last Name:</td>
                        <td><input type="text" name="cdDoctorLName" /></td>
                    </tr>
                </tbody>
            </table>
            <button>Search</button>
            <button>View All</button>

            <table id="CreateDoctor">
                <thead>
                    <th>Create New Client_Doctor</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Client First Name:</td>
                        <td><input type="text" name="cdClientFName" /></td>
                        <td>Client Last Name:</td>
                        <td><input type="text" name="cdClientLName" /></td>
                    </tr>
                    <tr>
                        <td>Dr. First Name:</td>
                        <td><input type="text" name="cdDoctorFName" /></td>
                        <td>Dr. Last Name:</td>
                        <td><input type="text" name="cdDoctorLName" /></td>
                    </tr>
                </tbody>
            </table>
            <button>Create</button>
        </div>
    );
}

export default Clients_DoctorsPage;