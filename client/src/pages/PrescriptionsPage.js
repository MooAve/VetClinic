import React, {useState} from 'react';
import '../App.css';
import PrescriptionsTable from '../components/PrescriptionsTable';

function PrescriptionsPage() {

    const [showTable, openTable] = useState(false)
    return (
        <div className="App">
            <h1>Search or Create Prescriptions</h1>
            <table id="SearchPrescriptions">
                <thead>
                    <th>Find Prescriptions</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Date:</td>
                        <td><input type="date" name="prescriptionDate" /></td>
                        <td>Drug Name:</td>
                        <td><input type="text" name="prescriptionDrug" /></td>
                    </tr>
                    <tr>
                        <td>Dosage:</td>
                        <td><input type="text" name="prescriptionDosage" /></td>
                        <td>Pet ID:</td>
                        <td><input type="number" name="prescriptionPetID" /></td>
                    </tr>
                    <tr>
                        <td>Doctor:</td>
                        <td><input type="text" name="prescriptionDoctor" /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => openTable(true)}>Search</button>
            <button onClick={() => openTable(true)}>View All</button>
            <div>
                {showTable && <PrescriptionsTable />}
            </div>
            <table id="CreatePrescription">
                <thead>
                    <th>Create New Client</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Date:</td>
                        <td><input type="date" name="prescriptionDate" /></td>
                        <td>Drug Name:</td>
                        <td><input type="text" name="prescriptionDrug" /></td>
                    </tr>
                    <tr>
                        <td>Dosage:</td>
                        <td><input type="text" name="prescriptionDosage" /></td>
                        <td>Pet ID:</td>
                        <td><input type="number" name="prescriptionPetID" /></td>
                    </tr>
                    <tr>
                        <td>Doctor:</td>
                        <td><input type="text" name="prescriptionDoctor" /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => alert("This is the Create Prescription Button!")}>Create</button>
        </div>
    );
}

export default PrescriptionsPage;