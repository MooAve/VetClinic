import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import '../App.css';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

function EditDoctorsPage() {

    const navigate = useNavigate();
    const location = useLocation();

    const doctor = location.state;

    const [fname, setFName] = useState(doctor.fname)
    const [lname, setLName] = useState(doctor.lname)
    const [phone, setPhone] = useState(doctor.phone)
    const [email, setEmail] = useState(doctor.email)

    const updateDoctor = () => {
        Axios.put(`http://localhost:3001/doctors/edit/${doctor.doctorID}`, {
            fname: fname,
            lname: lname,
            phone: phone,
            email: email
        }).then(()=> {
            alert("Successfully updated doctor!");
            navigate("/Doctors");
        });
    };

    return (
        <div className='App'>
            <h1>Update a Doctor</h1>
            <table id="EditDoctor">
            <tbody>
                    <tr>
                        <td>*First Name:</td>
                        <td><input type="text" name="doctorFName" defaultValue={fname} onChange= {((e)=> {
                            setFName(e.target.value)
                        })} /></td>
                        <td>*Last Name:</td>
                        <td><input type="text" name="doctorLName" defaultValue={lname} onChange= {((e)=> {
                            setLName(e.target.value)
                        })} /></td>
                    </tr>
                    <tr>
                        <td>*Phone:</td>
                        <td><input type="text" name="doctorPhone" defaultValue={phone} onChange= {((e)=> {
                            setPhone(e.target.value)
                        })} /></td>
                        <td>*Email:</td>
                        <td><input type="text" name="doctorEmail" defaultValue={email} onChange= {((e)=> {
                            setEmail(e.target.value)
                        })} /></td>
                    </tr>
                </tbody>
                <tfoot>*Required</tfoot>
            </table>
            <button onClick={() => updateDoctor()}>Save</button>
            <button onClick={() => navigate('/Doctors')}>Cancel</button>
        </div>
    );
}

export default EditDoctorsPage;