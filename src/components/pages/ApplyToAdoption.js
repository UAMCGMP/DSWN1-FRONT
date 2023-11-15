import React, { useState } from "react";
import "./ApplyToAdoption.css"
import axios from "axios";

function ApplyToAdoption(props) {
    const [showDialog, setShowDialog] = useState(false);
    const petData = props.location.state.petData;
   
    async function handleClick() {
        const nomeUsuario = document.querySelector("#name").value;
        const emaiUsuario = document.querySelector("#email").value;
        const telefoneUsuario = document.querySelector("#phone").value;

        try {
            await saveApplication(nomeUsuario, emaiUsuario, telefoneUsuario);
        } catch (error) {
            console.log(error);
        }

    }

    async function saveApplication(nomeUsuario, emaiUsuario, telefoneUsuario) {
        axios.post('http://localhost:8080/adoptionApplication', {
            "nomeUsuario": nomeUsuario,
            "emailUsuario": emaiUsuario,
            "telefoneUsuario": telefoneUsuario,
            "idPet": petData.id,
            "nomeDoPet": petData.name
        })
            .then(function () {
                setShowDialog(true);
            })
            .catch(function (error) {
                if(error.response.status == 403){
                    alert("Você não possui permissão para realizar esse tipo de cadastro, você precisa ser um usuario comum, não adm!")
                }
            });
    }

    const closeModal = () => {
        setShowDialog(false);
    };

    return (
        <div className="dog-profile-container">
            {showDialog && (
                <dialog open>
                    <h1>Parabéns!!!!!</h1>
                    <p>Você acaba de se aplicar para ser o novo tutor de {petData.name}.</p>
                    <p>Em breve você receberá um email de confirmação e os próximos passos</p>
                    <button onClick={closeModal}>Fechar</button>
                </dialog>
            )}

            <div className="dog-info-block">
                <p><strong>Nome:</strong>    {petData.name}</p>
                <p><strong>Idade:</strong>    {petData.age}</p>
                <p><strong>Raça: </strong>   {petData.breed}</p>
                <p><strong>Tamanho:</strong>    {petData.size}</p>
                <p><strong>Bio:</strong>    {petData.bio}</p>
                <p><strong>Genero:</strong>    {petData.gender}</p>
                <p><strong>Castrado(a):</strong>    {petData.castration}</p>
                <p><strong>Vacinado(a):</strong>    {petData.vaccinated}</p>
            </div>

            <img
                className="dog-profile-pic"
                src={petData.photourl}
                alt="Dog Profile"
            />

            <div className="registration-form">
                <h1>Cadastre-se para adotar</h1>
                <form>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="phone">Telefone:</label>
                    <input type="text" id="phone" name="phone" required />

                    <a onClick={handleClick}>Cadastrar</a>
                </form>
            </div>
        </div>
    );
}

export default ApplyToAdoption;