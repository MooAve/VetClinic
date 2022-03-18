import React, {useState, useEffect} from 'react';
import '../App.css';
import Axios from 'axios';
import DoctorsTable from '../components/DoctorsTable.js';

function DoctorsPage() {

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        loadDoctors();
    }, []);

    //Get data from 'Create' field
    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    //Get data from 'Search' field
    const [sFname, searchFname] = useState('')
    const [sLname, searchLname] = useState('')
    const [sPhone, searchPhone] = useState('')
    const [sEmail, searchEmail] = useState('')

    //
    const loadDoctors = () => {
        Axios.get('http://localhost:3001/doctors/get').then((response) => {
            setDoctors(response.data)
        });
    }

    const createDoctor = () => {
        Axios.post('http://localhost:3001/doctors/insert', {
            fname: fname,
            lname: lname,
            phone: phone,
            email: email
        }).then(()=> {
            alert('successful insert');
            loadDoctors();
        });
    };

    const searchDoctors = () => {
        Axios.post('http://localhost:3001/doctors/search', {
            fname: sFname,
            lname: sLname,
            phone: sPhone,
            email: sEmail
        }).then((response)=> {
            setDoctors(response.data)
            alert('Search Complete')
        });
    };


    const deleteDoctor = doctorID => {
        console.log(doctorID)
        Axios.delete(`http://localhost:3001/doctors/${doctorID}`, {
        }).then(()=> {
            loadDoctors();
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
                        <td><input type="text" name="doctorFName" onChange={((e)=> {
                            searchFname(e.target.value)
                        })} /></td>
                        <td>Last Name:</td>
                        <td><input type="text" name="doctorLName" onChange={((e)=> {
                            searchLname(e.target.value)
                        })} /></td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td><input type="text" name="doctorPhone" onChange={((e)=> {
                            searchPhone(e.target.value)
                        })} /></td>
                        <td>Email:</td>
                        <td><input type="text" name="doctorEmail" onChange={((e)=> {
                            searchEmail(e.target.value)
                        })} /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => searchDoctors()}>Search</button>
            <button onClick={() => loadDoctors()}>View All</button>
            <div>
                    {<DoctorsTable doctors={doctors} deleteDoctor={deleteDoctor} />}
            </div>
        </div>
    );
}

export default DoctorsPage;