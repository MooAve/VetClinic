import React from 'react';
import { GrFormTrash, GrEdit } from 'react-icons/gr';

function PetsRow({pet}) {
    return(
        <tr>
            <td>{pet.petName}</td>
            <td>{pet.petSpecies}</td>
            <td>{pet.petBreed}</td>
            <td>{pet.petBirthYear}</td>
            <td>{pet.petBirthMonth}</td>
            <td>{pet.petBirthDay}</td>
            <td>{pet.petWeight}</td>
            <td>{pet.petSex}</td>
            <td>{pet.petOwner}</td>

            <td>GrEdit</td>
            <td>GrFormTrash</td>
        </tr>
    );
};

export default PetsRow;