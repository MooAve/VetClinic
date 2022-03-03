import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';

function ClientsDoctorsRow({clientDoctor}) {
    return(
        <tr>
            <td>{clientDoctor.cdClientFName}</td>
            <td>{clientDoctor.cdClientLName}</td>
            <td>{clientDoctor.cdDoctorFName}</td>
            <td>{clientDoctor.cdDoctorLName}</td>

            <td>GrEdit</td>
            <td>GrFormTrash</td>
        </tr>
    );
};

export default ClientsDoctorsRow;