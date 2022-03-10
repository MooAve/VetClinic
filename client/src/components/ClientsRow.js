import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function ClientsRow({client, deleteClient}) {

    function confirmDelete() {
        let confirmDelete = window.confirm(`Are you sure you want to delete ${client.fname} ${client.lname}?`);
        if (confirmDelete) {
            alert(`Entry ${client.fname} ${client.lname} deleted successfully`)
            deleteClient(client.clientID)
        }
    }

    return(
        <tr>
            <td>{client.fname}</td>
            <td>{client.lname}</td>
            <td>{client.address}</td>
            <td>{client.phone}</td>
            <td>{client.email}</td>

            <td><Link to="/Clients/Edit"><GrEdit /></Link></td>
            <td><GrFormTrash onClick={ () => confirmDelete()}/></td>
        </tr>
    );
};

export default ClientsRow;