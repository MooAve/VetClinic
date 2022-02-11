import React from 'react';
import { useNavigate } from 'react-router-dom';
//import ClientsTableRow from './ClientsTableRow';            //Used to populate row data (to be added)
import { GrFormTrash, GrEdit } from 'react-icons/gr'; //Use for Delete/Edit Icons

function ClientsTable() {

    const navigate = useNavigate();

    return (
        <table class="displayTable">
            <caption>Clients</caption>
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Pet</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                <td>Nick</td>
                <td>Johnsmith</td>
                <td>32831 Tuskan St. Portland, Oregon</td>
                <td>123-446-5321</td>
                <td>sjohnsmith32@gmail.com</td>
                <td>Buck</td>
                <td id = 'edit'>
                    <GrEdit onClick={() => navigate('/Clients/Edit')}></GrEdit>
                </td>
                <td id = 'delete'>
                    <GrFormTrash onClick={() => alert("This is the Delete Client Button!")}></GrFormTrash>
                </td>
            </tbody>
        </table>
    );

};

export default ClientsTable;