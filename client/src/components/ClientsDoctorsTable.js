import React from 'react';
import { useNavigate } from 'react-router-dom';
//import ClientsDoctorsTableRow from './ClientsDoctorsTableRow';            //Used to populate row data (to be added)
import { GrFormTrash, GrEdit } from 'react-icons/gr'; //Use for Delete/Edit Icons

function CDTable() {

    const navigate = useNavigate();

    return (
        <table class="displayTable">
            <caption>Clients-Doctors</caption>
            <thead>
                <th>Client</th>
                <th>Doctor</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                <td>Nick Johnsmith</td>
                <td>Douglas Adams</td>
                <td id = 'edit'>
                    <GrEdit onClick={() => navigate("/Clients_Doctors/Edit")}></GrEdit>
                </td>
                <td id = 'delete'>
                    <GrFormTrash onClick={() => alert("This is the Delete Client-Doctor Button!")}></GrFormTrash>
                </td>
            </tbody>
        </table>
    );

};

export default CDTable;