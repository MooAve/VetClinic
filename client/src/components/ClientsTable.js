import React from 'react';
import ClientsRow from './ClientsRow';            //Used to populate row data (to be added)

function ClientsTable( {clients} ) {

    return (
        <table class="displayTable">
            <caption>Clients</caption>
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Pet</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {clients.map((client, i) => <ClientsRow client={client} 
                        /*deleteClient={deleteClient} EditClient={EditClient}*/ key={i} />)}
            </tbody>
        </table>
    );

};

export default ClientsTable;