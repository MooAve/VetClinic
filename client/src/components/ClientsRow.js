import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';

function ClientsRow({client}) {
    return(
        <tr>
            <td>{client.fname}</td>
            <td>{client.lname}</td>
            <td>{client.address}</td>
            <td>{client.phone}</td>
            <td>{client.email}</td>

            <td><GrEdit /></td>
            <td><GrFormTrash /></td>
        </tr>
    );
};

export default ClientsRow;