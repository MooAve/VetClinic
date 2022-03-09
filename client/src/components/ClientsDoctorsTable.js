import React from 'react';
import ClientsDoctorsRow from './ClientsDoctorsRow';            //Used to populate row data

function CDTable( {clients_doctors} ) {

    return (
        <table class="displayTable">
            <caption>Clients-Doctors</caption>
            <thead>
                <th>clientID</th>
                <th>doctorID</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {clients_doctors.map((clientDoctor, i) => <ClientsDoctorsRow clientDoctor={clientDoctor}
                        /*deleteClientDoctor={deleteClientDoctor} editClientDoctor={editClientDoctor}*/ key={i} />)}
            </tbody>
        </table>
    );

};

export default CDTable;