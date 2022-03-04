import React, {useState, useEffect} from 'react';
import '../App.css';
import Axios from 'axios';
import PrescriptionsTable from '../components/PrescriptionsTable';

function PrescriptionsPage() {

    const [showTable, openTable] = useState(false)

    const [date, setDate] = useState('')
    const [drug, setDrug] = useState('')
    const [dosage, setDosage] = useState('')
    const [petID, setPetID] = useState('')
    const [doctorID, setDoctorID] = useState('')
    const [petList, setPetList] = useState([])
    const [doctorList, setDoctorList] = useState([])

    const createPrescription = () => {
        Axios.post('http://localhost:3001/prescriptions/insert', {
            date: date,
            drug: drug,
            dosage: dosage,
            petID: petID,
            doctorID: doctorID
        }).then(()=> {
            alert('successful insert');
        });
    };

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
        <div className="App">
            <h1>Search or Create Prescriptions</h1>
            <table id="CreatePrescription">
                <thead>
                    <th>Create New Client</th>
                </thead>
                <tbody>
                    <tr>
                        <td>*Date:</td>
                        <td><input type="date" name="prescriptionDate" onChange= {((e)=> {
                            setDate(e.target.value)
                        })} /></td>
                        <td>*Drug Name:</td>
                        <td><input type="text" name="prescriptionDrug" onChange= {((e)=> {
                            setDrug(e.target.value)
                        })} /></td>
                    </tr>
                    <tr>
                        <td>*Dosage:</td>
                        <td><input type="text" name="prescriptionDosage" onChange= {((e)=> {
                            setDosage(e.target.value)
                        })} /></td>
                        <td>*Pet ID:</td>
                        <td><select name="prescriptionPetID" onChange= {((e)=> {
                            setPetID(e.target.value)
                        })}>
                                <option hidden disabled selected value></option>
                                {petList.map((val) => {
                                    return <option value={val.petID}>{val.petID}</option>
                                })}
                            </select> 
                        </td>
                    </tr>
                    <tr>
                        <td>*Doctor ID:</td>
                        <td><select name="prescriptionDoctorID" onChange= {((e)=> {
                            setDoctorID(e.target.value)
                        })}>
                                <option hidden disabled selected value></option>
                                {doctorList.map((val) => {
                                    return <option value={val.doctorID}>{val.doctorID}</option>
                                })}
                            </select>
                        </td>
                    </tr>
                </tbody>
                <tfoot>*Required</tfoot>
            </table>
            <button onClick={createPrescription}>Create</button>

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
                        <td>Pet Name:</td>
                        <td><input type="number" name="prescriptionPetID" /></td>
                    </tr>
                    <tr>
                        <td>Dr. First Name:</td>
                        <td><input type="text" name="prescriptionDrFName" /></td>
                        <td>Dr. Last Name:</td>
                        <td><input type="text" name="prescriptionDrLName" /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => openTable(true)}>Search</button>
            <button onClick={() => openTable(true)}>View All</button>
            <div>
                {showTable && <PrescriptionsTable />}
            </div>
        </div>
    );
}

export default PrescriptionsPage;