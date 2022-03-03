import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';

function DoctorsRow({doctor}) {
    return(
        <tr>
            <td>{doctor.doctorFName}</td>
            <td>{doctor.doctorLName}</td>
            <td>{doctor.doctorPhone}</td>
            <td>{doctor.doctorEmail}</td>

            <td>GrEdit</td>
            <td>GrFormTrash</td>
        </tr>
    );
};

export default DoctorsRow;