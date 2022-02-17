import React from 'react';
import { useNavigate } from 'react-router-dom';
//import PrescriptionsTableRow from './PrescriptionsTableRow';            //Used to populate row data (to be added)
import { GrFormTrash, GrEdit } from 'react-icons/gr'; //Use for Delete/Edit Icons

function PrescriptionsTable() {

    const navigate = useNavigate();

    return (
        <table class="displayTable">
            <caption>Prescriptions</caption>
            <thead>
                <th>Date</th>
                <th>Drug</th>
                <th>Dosage</th>
                <th>Doctor</th>
                <th>Pet</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                <td>1/1/2021</td>
                <td>Gabapentin</td>
                <td>5</td>
                <td>Douglas Adams</td>
                <td>Buck</td>
                <td id = 'edit'>
                    <GrEdit onClick={() => navigate('/Prescriptions/Edit')}></GrEdit>
                </td>
                <td id = 'delete'>
                    <GrFormTrash onClick={() => alert("This is the Delete Prescription Button!")}></GrFormTrash>
                </td>
            </tbody>
        </table>
    );

};

export default PrescriptionsTable;