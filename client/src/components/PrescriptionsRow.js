import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';

function PrescriptionsRow({prescription}) {
    return(
        <tr>
            <td>{prescription.date}</td>
            <td>{prescription.drug}</td>
            <td>{prescription.dosage}</td>
            <td>{prescription.doctorID}</td>
            <td>{prescription.petID}</td>

            <td><GrEdit /></td>
            <td><GrFormTrash /></td>
        </tr>
    );
};

export default PrescriptionsRow;