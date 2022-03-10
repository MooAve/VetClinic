import React, {useState, useEffect} from 'react';
import '../App.css';
import Axios from 'axios';
import DoctorsTable from '../components/DoctorsTable.js';

function DoctorsPage() {

    const [showTable, openTable] = useState(false)
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/doctors/get').then((response) => {
            setDoctors(response.data)
        });
    }, []);

    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const createDoctor = () => {
        Axios.post('http://localhost:3001/doctors/insert', {
            fname: fname,
            lname: lname,
            phone: phone,
            email: email
        }).then(()=> {
            alert('successful insert');
        });
    };

    const deleteDoctor = doctorID => {
        console.log(doctorID)
        Axios.delete(`http://localhost:3001/doctors/${doctorID}`, {
        }).then(()=> {
            alert("doctor deleted")
        });
    };

    return (
        <div className="App">
            <h1>Search or Create Doctors</h1>
            <table id="CreateDoctor">
                <thead>
                    <th>Create New Doctor</th>
                </thead>
                <tbody>
                    <tr>
                        <td>*First Name:</td>
                        <td><input type="text" name="doctorFName" onChange= {((e)=> {
                            setFName(e.target.value)
                        })} /></td>
                        <td>*Last Name:</td>
                        <td><input type="text" name="doctorLName" onChange= {((e)=> {
                            setLName(e.target.value)
                        })} /></td>
                    </tr>
                    <tr>
                        <td>*Phone:</td>
                        <td><input type="text" name="doctorPhone" onChange= {((e)=> {
                            setPhone(e.target.value)
                        })} /></td>
                        <td>*Email:</td>
                        <td><input type="text" name="doctorEmail" onChange= {((e)=> {
                            setEmail(e.target.value)
                        })} /></td>
                    </tr>
                </tbody>
                <tfoot>*Required</tfoot>
            </table>
            <button onClick={createDoctor}>Create</button>
            
            <table id="SearchDoctors">
                <thead>
                    <th>Find Doctors</th>
                </thead>
                <tbody>
                    <tr>
                        <td>First Name:</td>
                        <td><input type="text" name="doctorFName" /></td>
                        <td>Last Name:</td>
                        <td><input type="text" name="doctorLName" /></td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td><input type="text" name="doctorPhone" /></td>
                        <td>Email:</td>
                        <td><input type="text" name="doctorEmail" /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => openTable(true)}>Search</button>
            <button onClick={() => openTable(true)}>View All</button>
            <div>
                    {showTable && <DoctorsTable doctors={doctors} deleteDoctor={deleteDoctor} />}
            </div>
        </div>
    );
}

export default DoctorsPage;