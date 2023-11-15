import React, {useState} from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom'

function Register() {
    const [redirect, setRedirect] = useState(false);

    async function checkCredentials(){
        const inputEmail = document.querySelector(".input-email").value
        const inputPassword = document.querySelector(".input-password").value

        if (!inputEmail || !inputPassword){
            alert("Favor preencher os campos")
            return
        }

        try {
            await doRegister(inputEmail, inputPassword);
        } catch (error) {
            console.log(error);
        }
        

    }

    async function doRegister(login, senha){
        axios.post('http://localhost:8080/auth/register/user', {
            "login": login,
            "password": senha
          })
          .then(function (response) {
            alert ("Cadastro concluido com sucesso, você será redirecionado para o login!")
            setRedirect(true);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className='container'>
             {redirect && <Redirect to="/login"/>}

            <h3 className='titulo-login'>Para registrar-se, insira os dados nos campos abaixo:</h3>


            <input type='email'
                className='input-email'
                placeholder='Email' />

            <input type='password'
                className='input-password'
                placeholder='Senha' />

            <a onClick={checkCredentials} className="botao-login">Registrar</a>

        </div>

    );
}

export default Register;