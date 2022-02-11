import React from 'react';
import { useNavigate } from 'react-router-dom';
//import DoctorsTableRow from './DoctorsTableRow';            //Used to populate row data (to be added)
import { GrFormTrash, GrEdit } from 'react-icons/gr'; //Use for Delete/Edit Icons

function DoctorsTable() {

    const navigate = useNavigate();

    return (
        <table class="displayTable">
            <caption>Doctors</caption>
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                <td>Douglas</td>
                <td>Adams</td>
                <td>999-222-333</td>
                <td>dadams@clinic.com</td>
                <td id = 'edit'>
                    <GrEdit onClick={() => navigate('/Doctors/Edit')}></GrEdit>
                </td>
                <td id = 'delete'>
                    <GrFormTrash onClick={() => alert("This is the Delete Doctor Button!")}></GrFormTrash>
                </td>
            </tbody>
        </table>
    );

};

export default DoctorsTable;