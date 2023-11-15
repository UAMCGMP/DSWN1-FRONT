import React, {useState} from 'react';
import './Login.css'
import axios from "axios";
import { Redirect } from 'react-router-dom'

function Login() {
    const [redirect, setRedirect] = useState(false);

    async function checkCredentials(){
        const inputEmail = document.querySelector(".input-email").value
        const inputPassword = document.querySelector(".input-password").value

        if (!inputEmail || !inputPassword){
            alert("Favor preencher os campos")
            return
        }

        try {
            await doLogin(inputEmail, inputPassword);
        } catch (error) {
            console.log(error);
        }
        

    }

    async function doLogin(login, senha){
        axios.post('https://dswn1-pawsome-app.onrender.com/auth/login', {
            "login": login,
            "password": senha
          })
          .then(function (response) {
            let token = response.data.token
            localStorage.setItem('token', token);
            setRedirect(true);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className='container'>
            {redirect && <Redirect to="/adopt" />}
        
            <h3 className='titulo-login'>Por favor entre com seu usuario e senha!</h3>


            <input type='email'
                className='input-email'
                placeholder='email@email.com.br' />

            <input type='password'
                className='input-password'
                placeholder='*********' />

            <a className='link'>Esquece sua senha? Clique aqui</a>

            <a onClick={checkCredentials} className="botao-login">Login</a>

        </div>
    );
}

export default Login;