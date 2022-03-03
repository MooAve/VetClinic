import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';

function PrescriptionsRow({prescription}) {
    return(
        <tr>
            <td>{prescription.prescriptionDate}</td>
            <td>{prescription.prescriptionDrug}</td>
            <td>{prescription.prescriptionPetName}</td>
            <td>{prescription.prescriptionDrFName}</td>
            <td>{prescription.prescriptionDrLName}</td>

            <td>GrEdit</td>
            <td>GrFormTrash</td>
        </tr>
    );
};

export default PrescriptionsRow;