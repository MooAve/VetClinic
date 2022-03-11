import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function PetsRow({pet, deletePet}) {

    function confirmDelete() {
        let confirmDelete = window.confirm(`Are you sure you want to delete ${pet.name}?`);
        if (confirmDelete) {
            alert(`Entry ${pet.name} deleted successfully`)
            deletePet(pet.petID)
        }
    }

    return(
        <tr>
            <td>{pet.name}</td>
            <td>{pet.species}</td>
            <td>{pet.breed}</td>
            <td>{pet.birthYear}</td>
            <td>{pet.birthMonth}</td>
            <td>{pet.birthDay}</td>
            <td>{pet.weight}</td>
            <td>{pet.sex}</td>
            <td>{pet.clientID}</td>

            <td><Link to={"/Pets/Edit"} state={pet.petID}><GrEdit /></Link></td>
            <td><GrFormTrash  onClick={ () => confirmDelete()}/></td>
        </tr>
    );
};

export default PetsRow;