import React from 'react';
import DoctorsRow from './DoctorsRow';            //Used to populate row data 

function DoctorsTable( {doctors, deleteDoctor} ) {

    return (
        <table class="displayTable">
            <caption>Doctors</caption>
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {doctors.map((doctor, i) => <DoctorsRow doctor={doctor}
                        deleteDoctor={deleteDoctor} /*editDoctort={editDoctor}*/ key={i} />)}
            </tbody>
        </table>
    );

};

export default DoctorsTable;