import React from "react";

function Register() {
    return (
        <div className='container'>

            <h3 className='titulo-login'>Para registrar-se, insira os dados nos campos abaixo:</h3>


            <input type='email'
                className='input-email'
                placeholder='Email' />

            <input type='password'
                className='input-password'
                placeholder='Senha' />

            <input type='password'
                className='input-password'
                placeholder='Repita a senha' />

            <a href="/" className="botao-login">Registrar</a>

        </div>

    );
}

export default Register;