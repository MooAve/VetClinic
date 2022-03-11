import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';
import { Link } from 'react-router-dom';

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

            <td><Link to={"/Prescriptions/Edit"} state={prescription}><GrEdit /></Link></td>
            <td><GrFormTrash onClick={ () => confirmDelete()} /></td>
        </tr>
    );
};

export default PrescriptionsRow;