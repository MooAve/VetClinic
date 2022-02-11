import React from 'react';
import { useNavigate } from 'react-router-dom';
//import PetsTableRow from './PetsTableRow';          //Used to populate row data (to be added)
import { GrFormTrash, GrEdit } from 'react-icons/gr'; //Use for Delete/Edit Icons

function PetsTable() {

    const navigate = useNavigate();

    return (
        <table class="displayTable">
            <caption>Pets</caption>
            <thead>
                <th>Name</th>
                <th>Species</th>
                <th>Breed</th>
                <th>Birth Year</th>
                <th>Birth Month</th>
                <th>Birth Day</th>
                <th>Weight</th>
                <th>Sex</th>
                <th>Owner</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                <td>Buck</td>
                <td>Dog</td>
                <td>Lab</td>
                <td>2012</td>
                <td>04</td>
                <td>14</td>
                <td>85</td>
                <td>Male</td>
                <td>Nick Johnsmith</td>
                <td id = 'edit'>
                    <GrEdit onClick={() => navigate("/Pets/Edit")}></GrEdit>
                </td>
                <td id = 'delete'>
                    <GrFormTrash onClick={() => alert("This is the Delete Pet Button!")}></GrFormTrash>
                </td>
            </tbody>
        </table>
    );

};

export default PetsTable;