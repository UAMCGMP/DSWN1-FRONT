import React, { useState, useEffect } from "react";
import axios from "axios";
import './DogCard.css'
import { nomesDeCachorros, perfisCachorros } from './pages/utils/cardData'


function DogCard() {
    const [url, setUrl] = useState();
    const [nome, setNome] = useState('');
    const [bio, setBio] = useState('');

    useEffect(() => {
        async function getImageUrl() {

            await axios.get('https://dog.ceo/api/breeds/image/random').then(
                response => {
                    setUrl(response.data.message)
                }).catch(err => {
                    setUrl('https://images.dog.ceo/breeds/malamute/n02110063_13228.jpg')
                })
        }

        function getName() {
            const randomIndex = Math.floor(Math.random() * nomesDeCachorros.length);
            setNome(nomesDeCachorros[randomIndex]);
        }

        function getBio() {
            const randomIndex = Math.floor(Math.random() * perfisCachorros.length);
            setBio(perfisCachorros[randomIndex]);
        }


        getImageUrl();
        getName();
        getBio();
    }, []);

    /*const navigate = useNavigate();

     function handleClick() {
        navigate("/applyToAdopt");
    } */

    return (
        <div class="card" /* onClick={handleClick} */>
            <img src={url} alt="uma imagem de um cachorro" />
            <div class="card__content">
                <p class="card__title">{nome}</p>
                <p class="card__description">{bio}</p>
                <p>Clique para adotar</p>
            </div>
        </div>
    );

}

export default DogCard;