import React from "react";
import DogImage from '../../assets/imgs/dog-12055066-original.png'
import DogsImage from '../../assets/imgs/dogs-image.png'
import './LandingPage.css'

function LandingPage() {
    return (
        <div className="container">
            <h1 className="titulo">Ajude-nos a encontrar um lar para nossos amigos de quatro patas!</h1>
            <div className="image-container" >
                <a href="/adopt" className="botao">Adote</a>
                <img className="imagem-dogs" src={DogsImage} alt="Figura de um cachorro" />
            </div>
        </div>

    );
}

export default LandingPage;