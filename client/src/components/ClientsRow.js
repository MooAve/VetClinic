import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';

function ClientsRow({client}) {
    return(
        <tr>
            <td>{client.clientFName}</td>
            <td>{client.clientLName}</td>
            <td>{client.clientAddress}</td>
            <td>{client.clientPhone}</td>
            <td>{client.clientEmail}</td>

            <td>GrEdit</td>
            <td>GrFormTrash</td>
        </tr>
    );
};

export default ClientsRow;