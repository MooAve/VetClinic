import React from 'react';
import ClientsDoctorsRow from './ClientsDoctorsRow';            //Used to populate row data

function CDTable( {clientDoctors} ) {

    return (
        <table class="displayTable">
            <caption>Clients-Doctors</caption>
            <thead>
                <th>Client</th>
                <th>Doctor</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {clientDoctors.map((clientDoctor, i) => <ClientsDoctorsRow clientDoctor={clientDoctor}
                        /*deleteClientDoctor={deleteClientDoctor} editClientDoctor={editClientDoctor}*/ key={i} />)}
            </tbody>
        </table>
    );

};

export default CDTable;