import React from 'react';
import '../App.css';

function DoctorsPage() {
    return (
        <div className="App">
            <h1>Search or Create Doctors</h1>
            <table id="SearchDoctors">
                <thead>
                    <th>Find Doctors</th>
                </thead>
                <tbody>
                    <tr>
                        <td>First Name:</td>
                        <td><input type="text" name="doctorFName" /></td>
                        <td>Last Name:</td>
                        <td><input type="text" name="doctorLName" /></td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td><input type="text" name="doctorPhone" /></td>
                        <td>Email:</td>
                        <td><input type="text" name="doctorEmail" /></td>
                    </tr>
                </tbody>
            </table>
            <button>Search</button>
            <button>View All</button>

            <table id="CreateDoctor">
                <thead>
                    <th>Create New Client</th>
                </thead>
                <tbody>
                    <tr>
                        <td>First Name:</td>
                        <td><input type="text" name="doctorFName" /></td>
                        <td>Last Name:</td>
                        <td><input type="text" name="doctorLName" /></td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td><input type="text" name="doctorPhone" /></td>
                        <td>Email:</td>
                        <td><input type="text" name="doctorEmail" /></td>
                    </tr>
                </tbody>
            </table>
            <button>Create</button>
        </div>
    );
}

export default DoctorsPage;