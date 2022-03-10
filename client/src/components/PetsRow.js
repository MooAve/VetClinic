import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';

function PetsRow({pet, deletePet}) {
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

            <td><GrEdit/></td>
            <td><GrFormTrash  onClick={ () => deletePet(pet.petID)}/></td>
        </tr>
    );
};

export default PetsRow;