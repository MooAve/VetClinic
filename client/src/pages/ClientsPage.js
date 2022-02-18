import React, {useState} from 'react';
import '../App.css';
import ClientsTable from '../components/ClientsTable.js';

function ClientsPage() {

    const [showTable, openTable] = useState(false)
    return (
        <div className="App">
            <h1>Search or Create Clients</h1>
            <table id="CreateClient">
                <thead>
                    <th>Create New Client</th>
                </thead>
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
                <tfoot>*Required</tfoot>
            </table>
            <button onClick={() => alert("This is the Create Client Button!")}>Create</button>
            
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
            <button onClick={() => openTable(true)}>Search</button>
            <button onClick={() => openTable(true)}>View All</button>
            <div>
                {showTable && <ClientsTable />}
            </div>
        </div>
        );

};

export default ClientsPage;