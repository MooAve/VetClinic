import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';

function PrescriptionsRow({prescription, deletePrescription}) {

    function confirmDelete() {
        let confirmDelete = window.confirm(`Are you sure you want to delete prescription of ${prescription.drug}?`);
        if (confirmDelete) {
            alert(`Entry ${prescription.drug} deleted successfully`)
            deletePrescription(prescription.prescriptionID)
        }
    }

    return(
        <tr>
            <td>{prescription.date}</td>
            <td>{prescription.drug}</td>
            <td>{prescription.dosage}</td>
            <td>{prescription.doctorID}</td>
            <td>{prescription.petID}</td>

            <td><GrEdit /></td>
            <td><GrFormTrash onClick={ () => confirmDelete()} /></td>
        </tr>
    );
};

export default PrescriptionsRow;