import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';

function ClientsDoctorsRow({clientDoctor, deleteClientDoctor}) {

    function confirmDelete() {
        let confirmDelete = window.confirm(`Are you sure you want to delete a client-doctor relationship?`);
        if (confirmDelete) {
            alert(`Entry deleted successfully`)
            deleteClientDoctor(clientDoctor.clientID, clientDoctor.doctorID)
        }
    }

    return(
        <tr>
            <td>{clientDoctor.client}</td>
            <td>{clientDoctor.doctor}</td>

            <td><GrFormTrash onClick={ () => confirmDelete()} /></td>
        </tr>
    );
};

export default ClientsDoctorsRow;