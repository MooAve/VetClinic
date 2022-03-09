import React, {useState, useEffect} from 'react';
import '../App.css';
import Axios from 'axios';
import CDTable from '../components/ClientsDoctorsTable';

function Clients_DoctorsPage() {

    const [showTable, openTable] = useState(false)
    const [clients_doctors, setClients_Doctors] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/clients_doctors/get').then((response) => {
            setClients_Doctors(response.data)
        });
    }, []);

    const [clientID, setClientID] = useState('')
    const [doctorID, setDoctorID] = useState('')
    const [clientList, setClientList] = useState([])
    const [doctorList, setDoctorList] = useState([])

    const createClients_Doctors = () => {
        Axios.post('http://localhost:3001/clients_doctors/insert', {
            clientID: clientID,
            doctorID: doctorID
        }).then(()=> {
            alert('successful insert');
        });
    };

    useEffect(() => {
        Axios.get('http://localhost:3001/clients/get').then((response) => {
            setClientList(response.data);
        })
    }, [])

    useEffect(() => {
        Axios.get('http://localhost:3001/doctors/get').then((response) => {
            setDoctorList(response.data);
        })
    }, [])

    return (
        <div className="App">
            <h1>Search or Create Client_Doctor Relationships</h1>
            <table id="CreateClientDoctor">
                <thead>
                    <th>Create New Client_Doctor</th>
                </thead>
                <tbody>
                    <tr>
                        <td>*Client ID:</td>
                        <td><select name="cdClientID" onChange= {((e)=> {
                            setClientID(e.target.value)
                        })}>
                                <option hidden disabled selected value></option>
                                {clientList.map((val) => {
                                    return <option value={val.clientID}>{val.clientID}</option>
                                })}
                            </select> 
                        </td>
                    </tr>
                    <tr>
                        <td>*Doctor ID:</td>
                        <td><select name="cdDoctorID" onChange= {((e)=> {
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
            <button onClick={createClients_Doctors}>Create</button>
            
            <table id="SearchClients_Doctors">
                <thead>
                    <th>Find Clients_Doctors</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Client First Name:</td>
                        <td><input type="text" name="cdClientFName" /></td>
                        <td>Client Last Name:</td>
                        <td><input type="text" name="cdClientLName" /></td>
                    </tr>
                    <tr>
                        <td>Dr. First Name:</td>
                        <td><input type="text" name="cdDoctorFName" /></td>
                        <td>Dr. Last Name:</td>
                        <td><input type="text" name="cdDoctorLName" /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => openTable(true)}>Search</button>
            <button onClick={() => openTable(true)}>View All</button>
            <div>
                {showTable && <CDTable clients_doctors={clients_doctors} />}
            </div>
        </div>
    );
}

export default Clients_DoctorsPage;