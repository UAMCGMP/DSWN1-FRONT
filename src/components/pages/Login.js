import React from 'react';
import './Login.css'

function Login() {
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

            <a href="/" className="botao-login">Login</a>

        </div>
    );
}

export default Login;