import React, {useState, useEffect} from 'react';
import '../App.css';
import Axios from 'axios';
import ClientsTable from '../components/ClientsTable.js';

function ClientsPage() {

    const [clients, setClients] = useState([])

    useEffect(() => {
        loadClients();
    }, []);

    //Get data from 'Create' field
    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    //Get data from 'Search' field
    const [sFname, searchFname] = useState('')
    const [sLname, searchLname] = useState('')
    const [sAddress, searchAddress] = useState('')
    const [sPhone, searchPhone] = useState('')
    const [sEmail, searchEmail] = useState('')

    //
    const loadClients = () => {
        Axios.get('http://localhost:3001/clients/get').then((response) => {
            setClients(response.data)
        });
    }

    const createClient = () => {
        Axios.post('http://localhost:3001/clients/insert', {
            fname: fname,
            lname: lname,
            address: address,
            phone: phone,
            email: email
        }).then(()=> {
            alert('successful insert');
            loadClients();
        });
    };

    const searchClients = () => {
        Axios.post('http://localhost:3001/clients/search', {
            fname: sFname,
            lname: sLname,
            address: sAddress,
            phone: sPhone,
            email: sEmail
        }).then((response)=> {
            setClients(response.data)
            alert('Search Complete')
        });
    };

    const deleteClient = clientID => {
        console.log(clientID)
        Axios.delete(`http://localhost:3001/clients/${clientID}`, {
        }).then(()=> {
            loadClients();
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
                        <td><input type="text" name="clientFName" onChange={((e)=> {
                            searchFname(e.target.value)
                        })} /></td>
                        <td>Last Name:</td>
                        <td><input type="text" name="clientLName" onChange={((e)=> {
                            searchLname(e.target.value)
                        })} /></td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td><input type="text" name="clientAddress" onChange={((e)=> {
                            searchAddress(e.target.value)
                        })} /></td>
                        <td>Phone:</td>
                        <td><input type="text" name="clientPhone" onChange={((e)=> {
                            searchPhone(e.target.value)
                        })} /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="text" name="clientEmail" onChange={((e)=> {
                            searchEmail(e.target.value)
                        })} /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => searchClients()}>Search</button>
            <button onClick={() => loadClients()}>View All</button>
            <div>
                {<ClientsTable clients={clients} deleteClient={deleteClient} />}
            </div>
        </div>
        );

};

export default ClientsPage;