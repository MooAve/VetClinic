import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import '../App.css';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

function EditPrescriptionsPage() {

    const navigate = useNavigate();
    const location = useLocation();

    const prescription = location.state;

    const [date, setDate] = useState(prescription.date)
    const [drug, setDrug] = useState(prescription.drug)
    const [dosage, setDosage] = useState(prescription.dosage)
    const [petID, setPetID] = useState(prescription.petID)
    const [pet, setPet] = useState(prescription.pet)
    const [doctorID, setDoctorID] = useState(prescription.doctorID)
    const [doctor, setDoctor] = useState(prescription.doctor)
    const [petList, setPetList] = useState([])
    const [doctorList, setDoctorList] = useState([])

    console.log(prescription.petID)
    console.log(prescription.doctorID)

    const updatePrescription = () => {
        console.log(prescription.prescriptionID)
        Axios.put(`http://localhost:3001/prescriptions/edit/${prescription.prescriptionID}`, {
            date: date,
            drug: drug,
            dosage: dosage,
            petID: petID,
            doctorID: doctorID
        }).then(() => {
            alert("Successfully updated prescription!")
            navigate('/Prescriptions')
        })
    }

    useEffect(() => {
        Axios.get('http://localhost:3001/pets/get').then((response) => {
            setPetList(response.data)
        })
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:3001/doctors/get').then((response) => {
            setDoctorList(response.data)
        })
    }, [])

    return (
        <div className='App'>
            <h1>Update a Prescription</h1>
            <table id="EditPrescription">
                <tbody>
                    <tr>
                        <td>*Date:</td>
                        <td><input type="date" name="prescriptionDate" defaultValue={date} onChange= {((e)=> {
                            setDate(e.target.value)
                        })} /></td>
                        <td>*Drug Name:</td>
                        <td><input type="text" name="prescriptionDrug" defaultValue={drug} onChange= {((e)=> {
                            setDrug(e.target.value)
                        })} /></td>
                    </tr>
                    <tr>
                        <td>*Dosage:</td>
                        <td><input type="text" name="dosage" defaultValue={dosage} onChange= {((e)=> {
                            setDosage(e.target.value)
                        })} /></td>
                        <td>*Pet:</td>
                        <td><select id="petID" name="petID" required onChange= {((e)=> {
                            setPetID(e.target.value)
                        })}>
                                <option hidden defaultValue={petID}>{pet}</option>
                                {petList.map((val) => {
                                    return <option value={val.petID}>{val.name.concat(" (", val.petID, ")")}</option>
                                })}
                            </select> 
                        </td>
                    </tr>
                    <tr>
                        <td>*Doctor:</td>
                        <td><select id="doctorID" name="doctorID" required onChange= {((e)=> {
                            setDoctorID(e.target.value)
                        })}>
                                <option hidden defaultValue={doctorID}>{doctor}</option>
                                {doctorList.map((val) => {
                                    return <option value={val.doctorID}>{val.fname.concat(" ", val.lname)}</option>
                                })}
                            </select>
                        </td>
                    </tr>
                </tbody>
                <tfoot>*Required</tfoot>
            </table>
            <button onClick={() => updatePrescription()}>Save</button>
            <button onClick={() => navigate('/Prescriptions')}>Cancel</button>
        </div>
    );
}

export default EditPrescriptionsPage;