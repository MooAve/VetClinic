import React from 'react';
import ClientsDoctorsRow from './ClientsDoctorsRow';            //Used to populate row data

function CDTable( {clients_doctors, deleteClientDoctor} ) {

    return (
        <table class="displayTable">
            <caption>Clients-Doctors</caption>
            <thead>
                <th>Client</th>
                <th>Doctor</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {clients_doctors.map((clientDoctor, i) => <ClientsDoctorsRow clientDoctor={clientDoctor}
                        deleteClientDoctor={deleteClientDoctor} key={i} />)}
            </tbody>
        </table>
    );

};

export default CDTable;