import React from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom'

function EditDoctorsPage() {

    const navigate = useNavigate();

    return (
        <div className='App'>
            <h1>Update a Doctor</h1>
            <table id="EditDoctor">
                <tbody>
                    <tr>
                        <td>*First Name:</td>
                        <td><input type="text" name="doctorFName" /></td>
                        <td>*Last Name:</td>
                        <td><input type="text" name="doctorLName" /></td>
                    </tr>
                    <tr>
                        <td>*Phone:</td>
                        <td><input type="text" name="doctorPhone" /></td>
                        <td>*Email:</td>
                        <td><input type="text" name="doctorEmail" /></td>
                    </tr>
                </tbody>
                <tfoot>*Required</tfoot>
            </table>
            <button onClick={() => alert("This button saves doctor changes!")}>Save</button>
            <button onClick={() => navigate('/Doctors')}>Cancel</button>
        </div>
    );
}

export default EditDoctorsPage;