import React from 'react';
import './Login.css'
import axios from "axios";

function Login() {
    function checkCredentials(){
        const inputEmail = document.querySelector(".input-email").value
        const inputPassword = document.querySelector(".input-password").value

        if (!inputEmail || !inputPassword){
            alert("Favor preencher os campos")
            return
        }

        doLogin(inputEmail, inputPassword);

    }

    function doLogin(login, senha){
        axios.post('http://localhost:8080/auth/login', {
            "login": login,
            "password": senha
          })
          .then(function (response) {
            token = response.data.token
            localStorage.setItem('token', token);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className='container'>
        
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