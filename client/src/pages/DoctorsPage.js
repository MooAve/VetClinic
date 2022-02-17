import React, {useState} from 'react';
import '../App.css';
import DoctorsTable from '../components/DoctorsTable.js';

function DoctorsPage() {

    const [showTable, openTable] = useState(false)
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
            <button onClick={() => openTable(true)}>Search</button>
            <button onClick={() => openTable(true)}>View All</button>
            <div>
                    {showTable && <DoctorsTable />}
            </div>
            <table id="CreateDoctor">
                <thead>
                    <th>Create New Doctor</th>
                </thead>
                <tbody>
                    <tr>
                        <td>*First Name:</td>
                        <td><input type="text" name="doctorFName" /></td>
                        <td>*Last Name:</td>
                        <td><input type="text" name="doctorLName" /></td>
                    </tr>
                    <tr>
                        <td>*Phone:</td>
                        <td><input type="text" name="doctorPhone" /></td>
                        <td>*Email:</td>
                        <td><input type="text" name="doctorEmail" /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => alert("This is the Create Doctor Button!")}>Create</button>
        </div>
    );
}

export default DoctorsPage;