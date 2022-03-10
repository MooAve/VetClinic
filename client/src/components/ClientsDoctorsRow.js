import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';

function ClientsDoctorsRow({clientDoctor, deleteClientDoctor}) {
    return(
        <tr>
            <td>{clientDoctor.clientID}</td>
            <td>{clientDoctor.doctorID}</td>

            <td><GrEdit /></td>
            <td><GrFormTrash onClick={ () => deleteClientDoctor(clientDoctor.clientID, clientDoctor.doctorID)} /></td>
        </tr>
    );
};

export default ClientsDoctorsRow;