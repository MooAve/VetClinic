import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import '../App.css';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

function EditClientsPage() {

    const navigate = useNavigate();
    const location = useLocation();

    const client = location.state;

    const [fname, setFName] = useState(client.fname)
    const [lname, setLName] = useState(client.lname)
    const [address, setAddress] = useState(client.address)
    const [phone, setPhone] = useState(client.phone)
    const [email, setEmail] = useState(client.email)

    const editClient = () => {
        if (fname === '' || lname === '' || phone === '') {
            alert("Please fill out all required fields")
        } else {
            Axios.put(`http://localhost:3001/clients/edit/${client.clientID}`, {
                fname: fname,
                lname: lname,
                address: address,
                phone: phone,
                email: email
            }).then(()=> {
                alert('Successfully updated client!');
                navigate('/Clients')
            });
        };
    };

    return (
        <div className='App'>
            <h1>Update a Client</h1>
            <table id="EditClient">
            <tbody>
                    <tr>
                        <td>*First Name:</td>
                        <td><input type="text" name="clientFName" defaultValue={fname} onChange= {((e)=> {
                            setFName(e.target.value)
                        })} /></td>
                        <td>*Last Name:</td>
                        <td><input type="text" name="clientLName" defaultValue={lname} onChange= {((e)=> {
                            setLName(e.target.value)
                        })} /></td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td><input type="text" name="clientAddress" defaultValue={address} onChange= {((e)=> {
                            setAddress(e.target.value)
                        })} /></td>
                        <td>*Phone:</td>
                        <td><input type="text" name="clientPhone" defaultValue={phone} onChange= {((e)=> {
                            setPhone(e.target.value)
                        })}/></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="text" name="clientEmail" defaultValue={email} onChange= {((e)=> {
                            setEmail(e.target.value)
                        })} /></td>
                    </tr>
                </tbody>
                <tfoot>*Required</tfoot>
            </table>
            <button onClick={() => editClient()}>Save</button>
            <button onClick={() => navigate('/Clients')}>Cancel</button>
        </div>
    );
}

export default EditClientsPage;