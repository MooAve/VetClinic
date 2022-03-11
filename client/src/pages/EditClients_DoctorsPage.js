import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom'

function EditClientsDoctorsPage() {

    const navigate = useNavigate();
    const location = useLocation();

    const cldr = location.state

    const [clientID, setClientID] = useState(cldr.clientID)
    const [doctorID, setDoctorID] = useState(cldr.doctorID)
    const [clientList, setClientList] = useState([])
    const [doctorList, setDoctorList] = useState([])

    const updateCD = () => {
        Axios.put(`http://localhost:3001/clients_doctors/edit/${cldr.clientID}/${cldr.doctorID}`, {
            clientID :  clientID,
            doctorID :  doctorID
        }).then(() => {
            alert("Successfully updated client-doctor relationship!")
            navigate('/Clients_Doctors')
        });
    };

    useEffect(() => {
        Axios.get('http://localhost:3001/clients/get').then((response) => {
            setClientList(response.data)
        })
    }, []);

    useEffect(() => {
        Axios.get('http://localhost:3001/doctors/get').then((response) => {
            setDoctorList(response.data)
        })
    }, []);

    return (
        <div className='App'>
            <h1>Update a Client-Doctor Relationship</h1>
            <table id="EditClient_Doctor">
                <tbody>
                    <tr>
                        <td>*Client ID:</td>
                        <td><select name="clientID" defaultValue={clientID} onChange= {((e)=> {
                            setClientID(e.target.value)
                        })}>
                                <option hidden defaultValue={true}>{clientID}</option>
                                {clientList.map((val) => {
                                    return <option value={val.clientID}>{val.clientID}</option>
                                })}
                            </select> 
                        </td>
                    </tr>
                    <tr>
                        <td>*Doctor ID:</td>
                        <td><select name="doctorID" defaultValue={doctorID} onChange= {((e)=> {
                            setDoctorID(e.target.value)
                        })}>
                                <option hidden defaultValue={true}>{doctorID}</option>
                                {doctorList.map((val) => {
                                    return <option value={val.doctorID}>{val.doctorID}</option>
                                })}
                            </select>
                        </td>
                    </tr>
                    </tbody>
                <tfoot>*Required</tfoot>
            </table>
            <button onClick={() => updateCD()}>Save</button>
            <button onClick={() => navigate('/Clients_Doctors')}>Cancel</button>
        </div>
    );
}

export default EditClientsDoctorsPage;