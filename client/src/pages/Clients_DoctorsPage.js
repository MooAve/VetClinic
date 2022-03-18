import React, {useState, useEffect} from 'react';
import '../App.css';
import Axios from 'axios';
import CDTable from '../components/ClientsDoctorsTable';

function Clients_DoctorsPage() {

    const [clients_doctors, setClients_Doctors] = useState([])

    useEffect(() => {
        loadClients_Doctors();
    }, []);

    //Get data from 'Create' field
    const [clientID, setClientID] = useState('')
    const [doctorID, setDoctorID] = useState('')
    const [clientList, setClientList] = useState([])
    const [doctorList, setDoctorList] = useState([])

    //Get data from 'Search' field
    const [sClientID, searchClientID] = useState('')
    const [sDoctorID, searchDoctorID] = useState('')


    //
    const loadClients_Doctors = () => {
        Axios.get('http://localhost:3001/clients_doctors/get').then((response) => {
            setClients_Doctors(response.data)
        });
    }

    const createClients_Doctors = () => {
        Axios.post('http://localhost:3001/clients_doctors/insert', {
            clientID: clientID,
            doctorID: doctorID
        }).then(()=> {
            alert('successful insert');
            loadClients_Doctors();
        });
    };

    const searchClients_Doctors = () => {
        Axios.post('http://localhost:3001/clients_doctors/search', {
            clientID: sClientID,
            doctorID: sDoctorID
        }).then((response)=> {
            setClients_Doctors(response.data)
            alert('Search Complete')
        });
    };

    const deleteClientDoctor = (clientID, doctorID) => {
        console.log(clientID, doctorID)
        Axios.delete(`http://localhost:3001/clients_doctors/${clientID}/${doctorID}`, {
        }).then(()=> {
            alert("clients_doctors relationship deleted");
            loadClients_Doctors();
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
                    <th>Create New Clients_Doctors Relationship</th>
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
                        <td>Client ID:</td>
                        <td><input type="text" name="clientID" onChange={((e)=> {
                            searchClientID(e.target.value)
                        })} /></td>
                        <td>Doctor ID:</td>
                        <td><input type="text" name="doctorID" onChange={((e)=> {
                            searchDoctorID(e.target.value)
                        })} /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => searchClients_Doctors()}>Search</button>
            <button onClick={() => loadClients_Doctors()}>View All</button>
            <div>
                {<CDTable clients_doctors={clients_doctors} deleteClientDoctor={deleteClientDoctor} />}
            </div>
        </div>
    );
}

export default Clients_DoctorsPage;