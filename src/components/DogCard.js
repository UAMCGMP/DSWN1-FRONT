import React from "react";
import './DogCard.css'

function DogCard(...props) {
    return (
        <div className="card" /* onClick={handleClick} */>
            <img src={props[0].pet.photourl} alt="uma imagem de um cachorro" />
            <div className="card__content">
                <p className="card__title">{props[0].pet.name}</p>
                <p className="card__description">{props[0].pet.bio}</p>
                <p>Clique para adotar</p>
            </div>
        </div>
    );

}

export default DogCard;