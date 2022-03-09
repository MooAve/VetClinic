import React, {useState, useEffect} from 'react';
import '../App.css';
import Axios from 'axios';
import ClientsTable from '../components/ClientsTable.js';

function ClientsPage() {

    const [showTable, openTable] = useState(false)
    const [clients, setClients] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/clients/get').then((response) => {
            setClients(response.data)
        });
    }, []);

    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const createClient = () => {
        Axios.post('http://localhost:3001/clients/insert', {
            fname: fname,
            lname: lname,
            address: address,
            phone: phone,
            email: email
        }).then(()=> {
            alert('successful insert');
        });
    };

    return (
        <div className="App">
            <h1>Search or Create Clients</h1>
            <table id="CreateClient">
                <thead>
                    <th>Create New Client</th>
                </thead>
                <tbody>
                    <tr>
                        <td>*First Name:</td>
                        <td><input type="text" name="clientFName" onChange= {((e)=> {
                            setFName(e.target.value)
                        })} /></td>
                        <td>*Last Name:</td>
                        <td><input type="text" name="clientLName" onChange= {((e)=> {
                            setLName(e.target.value)
                        })} /></td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td><input type="text" name="clientAddress" onChange= {((e)=> {
                            setAddress(e.target.value)
                        })} /></td>
                        <td>*Phone:</td>
                        <td><input type="text" name="clientPhone" onChange= {((e)=> {
                            setPhone(e.target.value)
                        })}/></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="text" name="clientEmail" onChange= {((e)=> {
                            setEmail(e.target.value)
                        })} /></td>
                    </tr>
                </tbody>
                <tfoot>*Required</tfoot>
            </table>
            <button onClick={createClient}>Create</button>

            <table id="SearchClients">
                <thead>
                    <th>Find Clients</th>
                </thead>
                <tbody>
                    <tr>
                        <td>First Name:</td>
                        <td><input type="text" name="clientFName" /></td>
                        <td>Last Name:</td>
                        <td><input type="text" name="clientLName" /></td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td><input type="text" name="clientAddress" /></td>
                        <td>Phone:</td>
                        <td><input type="text" name="clientPhone" /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="text" name="clientEmail" /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => openTable(true)}>Search</button>
            <button onClick={() => openTable(true)}>View All</button>
            <div>
                {showTable && <ClientsTable clients={clients} />}
            </div>
        </div>
        );

};

export default ClientsPage;