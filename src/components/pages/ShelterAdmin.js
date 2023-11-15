import React, { useState, useEffect } from "react";
import { decodeToken } from '../../auth'
import axios from "axios";
import './ShelterAdmin.css'

function ShelterAdmin() {


    if (decodeToken(localStorage.getItem('token')).role !== 'ADMIN') {
        alert("Você não tem permissão para acessar essa sessão")
        document.location.href = "/";
    }

    const [dados, setDados] = useState([]);

    useEffect(() => {
        async function getPets() {

            await axios.get('http://localhost:8080/pets').then(
                response => {
                    setDados(response.data)
                }).catch(err => {
                    console.log(err)
                })
        }

        getPets();
    }, [])

    const handleEditar = (id, campo, valor) => {
        // Atualiza o estado com os dados editados
        const novosDados = dados.map((item) =>
            item.id === id ? { ...item, [campo]: valor } : item
        );
        setDados(novosDados);
    };

    const handleExcluir = (id) => {
        // Filtra os dados para excluir o item com o ID fornecido
        const novosDados = dados.filter((item) => item.id !== id);
        setDados(novosDados);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Tamanho</th>
                        <th>Peso</th>
                        <th>Bio</th>
                        <th>Genero</th>
                        <th>Vacinado?</th>
                        <th>Castration</th>
                        <th>Photo URL</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                <input
                                    type="text"
                                    value={item.name}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={item.age}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={item.size}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={item.weight}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={item.bio}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={item.gender}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={item.vaccinated}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={item.castration}
                                />
                            </td>
                            <td>
                                <input
                                    type="photourl"
                                    value={item.valor}
                                />
                            </td>
                            <td>
                                <button onClick={() => handleExcluir(item.id)}>
                                    Excluir
                                </button>
                            </td>
                            <td>
                                <button className="botao-editar" onClick={() => handleEditar(item.id, 'valor')}>
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default ShelterAdmin;