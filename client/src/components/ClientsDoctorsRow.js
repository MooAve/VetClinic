import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';

function ClientsDoctorsRow({clientDoctor}) {
    return(
        <tr>
            <td>{clientDoctor.clientID}</td>
            <td>{clientDoctor.doctorID}</td>

            <td><GrEdit /></td>
            <td><GrFormTrash /></td>
        </tr>
    );
};

export default ClientsDoctorsRow;