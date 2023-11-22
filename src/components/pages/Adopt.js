import React, {useEffect, useState} from "react";
import DogCard from "../DogCard";
import { Link } from "react-router-dom";
import './Adopt.css'
import axios from "axios";
import app_url from '../../api'


function Adopt() {
    const [pets, setPets] = useState([]);
    

    useEffect(() => {
        async function getPets() {

            await axios.get(`${app_url}/pets`).then(
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