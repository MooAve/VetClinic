import React from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom'

function EditPrescriptionsPage() {

    const navigate = useNavigate();

    return (
        <div className='App'>
            <h1>Update a Prescription</h1>
            <table id="EditPrescription">
                <tbody>
                    <tr>
                        <td>*Date:</td>
                        <td><input type="date" name="prescriptionDate" /></td>
                        <td>*Drug Name:</td>
                        <td><input type="text" name="prescriptionDrug" /></td>
                    </tr>
                    <tr>
                        <td>*Dosage:</td>
                        <td><input type="text" name="prescriptionDosage" /></td>
                        <td>*Pet ID:</td>
                        <td><input type="number" name="prescriptionPetID" /></td>
                    </tr>
                    <tr>
                        <td>*Doctor:</td>
                        <td><input type="text" name="prescriptionDoctor" /></td>
                    </tr>
                </tbody>
                <tfoot>*Required</tfoot>
            </table>
            <button onClick={() => alert("This button saves prescription changes!")}>Save</button>
            <button onClick={() => navigate('/Prescriptions')}>Cancel</button>
        </div>
    );
}

export default EditPrescriptionsPage;