import React, {useEffect, useState} from "react";
import DogCard from "../DogCard";
import { Link } from "react-router-dom";
import './Adopt.css'
import axios from "axios";


function Adopt() {
    const [pets, setPets] = useState([]);
    

    useEffect(() => {
        async function getPets() {

            await axios.get('http://localhost:8080/pets').then(
                response => {
                    setPets(response.data)
                }).catch(err => {
                    console.log(err)
                })
        }

        getPets();
    }, []);

   
    return (
        <div className="container-cards">
            {pets.map((pet) => (
                <Link to=
                {{
                    pathname: `/pet/${pet.id}`, 
                    state: { petData: pet }
                }} 
                key={pet.id}
                petData = {pet}>
                    <DogCard
                        pet={pet}
                    />
                </Link>
            ))}
        </div>

    );
}

export default Adopt;