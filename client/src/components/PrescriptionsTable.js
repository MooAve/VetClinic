import React from 'react';
import PrescriptionsRow from './PrescriptionsRow';            //Used to populate row data

function PrescriptionsTable( {prescriptions} ) {

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
                {prescriptions.map((prescription, i) => <PrescriptionsRow prescription={prescription}
                        /*deletePrescription={deletePrescription} editPrescription={editPrescription}*/ key={i} />)}   
            </tbody>
        </table>
    );

};

export default PrescriptionsTable;