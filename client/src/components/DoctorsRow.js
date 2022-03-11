import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function DoctorsRow({doctor, deleteDoctor}) {

    function confirmDelete() {
        let confirmDelete = window.confirm(`Are you sure you want to delete Dr. ${doctor.fname} ${doctor.lname}?`);
        if (confirmDelete) {
            alert(`Entry ${doctor.fname} ${doctor.lname} deleted successfully`)
            deleteDoctor(doctor.doctorID)
        }
    }

    return(
        <tr>
            <td>{doctor.fname}</td>
            <td>{doctor.lname}</td>
            <td>{doctor.phone}</td>
            <td>{doctor.email}</td>

            <td><Link to={"/Doctors/Edit"} state={doctor}><GrEdit /></Link></td>
            <td><GrFormTrash onClick={ () => confirmDelete()} /></td>
        </tr>
    );
};

export default DoctorsRow;