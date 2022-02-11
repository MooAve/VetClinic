import React, {useState} from 'react';
import '../App.css';
import CDTable from '../components/ClientsDoctorsTable';

function Clients_DoctorsPage() {

    const [showTable, openTable] = useState(false)
    return (
        <div className="App">
            <h1>Search or Create Client_Doctor Relationships</h1>
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
            <button onClick={() => openTable(true)}>Search</button>
            <button onClick={() => openTable(true)}>View All</button>
            <div>
                {showTable && <CDTable />}
            </div>
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
            <button onClick={() => alert("This is the Create Client-Doctor Button!")}>Create</button>
        </div>
    );
}

export default Clients_DoctorsPage;