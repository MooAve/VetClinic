import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';

function DoctorsRow({doctor, deleteDoctor}) {
    return(
        <tr>
            <td>{doctor.fname}</td>
            <td>{doctor.lname}</td>
            <td>{doctor.phone}</td>
            <td>{doctor.email}</td>

            <td><GrEdit /></td>
            <td><GrFormTrash onClick={ () => deleteDoctor(doctor.doctorID)} /></td>
        </tr>
    );
};

export default DoctorsRow;