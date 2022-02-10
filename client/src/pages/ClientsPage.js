import React from 'react';
import '../App.css';

function ClientsPage() {
    return (
        <div className="App">
            <h1>Search or Create Clients</h1>
            <table id="SearchClients">
                <thead>
                    <th>Find Clients</th>
                </thead>
                <tbody>
                    <tr>
                        <td>First Name:</td>
                        <td><input type="text" name="clientFName" /></td>
                        <td>Last Name:</td>
                        <td><input type="text" name="clientLName" /></td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td><input type="text" name="clientAddress" /></td>
                        <td>Phone:</td>
                        <td><input type="text" name="clientPhone" /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="text" name="clientEmail" /></td>
                    </tr>
                </tbody>
            </table>
            <button>Search</button>
            <button>View All</button>

            <table id="CreateClient">
                <thead>
                    <th>Create New Client</th>
                </thead>
                <tbody>
                    <tr>
                        <td>First Name:</td>
                        <td><input type="text" name="clientFName" /></td>
                        <td>Last Name:</td>
                        <td><input type="text" name="clientLName" /></td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td><input type="text" name="clientAddress" /></td>
                        <td>Phone:</td>
                        <td><input type="text" name="clientPhone" /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="text" name="clientEmail" /></td>
                    </tr>
                </tbody>
            </table>
            <button>Create</button>
        </div>
    );
}

export default ClientsPage;