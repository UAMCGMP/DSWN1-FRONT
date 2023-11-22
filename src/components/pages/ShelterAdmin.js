import React, { useState, useEffect } from "react";
import { decodeToken } from '../../auth'
import axios from "axios";
import './ShelterAdmin.css'
import app_url from '../../api'
import { getNomeCachorros, getBioCachorros, getAge, getSize } from './utils/cardData'

function ShelterAdmin() {


    if (decodeToken(localStorage.getItem('token')).role !== 'ADMIN') {
        alert("Você não tem permissão para acessar essa sessão")
        document.location.href = "/";
    }

    const [dados, setDados] = useState([]);
    const [showBlankRow, setShowBlankRow] = useState(false);

    useEffect(() => {
        async function getPets() {

            await axios.get(`${app_url}/pets`).then(
                response => {
                    setDados(response.data)
                }).catch(err => {
                    console.log(err)
                })
        }

        getPets();
    }, [])

    const handleEditar = (id, name, age, size, weight, bio, gender, vaccinated, castration, photourl) => {
        if (id) {
            axios.put(`${app_url}/pets`,
                {
                    "id": id,
                    "name": name,
                    "age": age,
                    "size": size,
                    "weight": weight,
                    "bio": bio,
                    "gender": gender,
                    "vaccinated": vaccinated,
                    "castration": castration,
                    "photourl": photourl
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                .then(
                    alert(`${id} editado com sucesso`)
                )
                .catch(function (error) {
                    if (error.response.status == 403) {
                        alert("Você não possui permissão para realizar esse tipo de cadastro, você precisa ser um adm")
                    }
                })
        }
        else {
            axios.post(`${app_url}/pets`,
                {
                    "name": name,
                    "age": age,
                    "size": size,
                    "weight": weight,
                    "bio": bio,
                    "gender": gender,
                    "vaccinated": vaccinated,
                    "castration": castration,
                    "photourl": photourl
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                .then(
                    alert(`Item editado com sucesso`)
                )
                .catch(function (error) {
                    if (error.response.status == 403) {
                        alert("Você não possui permissão para realizar esse tipo de cadastro, você precisa ser um adm!")
                    }
                })

        }
    };

    const handleExcluir = (id) => {
        axios.delete(`${app_url}/pets/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(
            alert(`${id} excluido com sucesso!`)
        )
            .catch(function (error) {
                if (error.response.status == 403) {
                    alert("Você não possui permissão para realizar esse tipo de cadastro, você precisa ser um adm!")
                }
            })
    };

    const handleInputChange = (id, field, value) => {
        const updatedData = dados.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    [field]: value,
                };
            }
            return item;
        });

        setDados(updatedData);
    };

    const handleAddRow = async () => {
        const nome = getNomeCachorros()
        const idade = getAge()
        const tamanho = getSize()
        const bio = getBioCachorros()
        const photo = await axios.get('https://dog.ceo/api/breeds/image/random');
        // Adicionar uma nova linha em branco ao estado de dados
        setDados([...dados, { id: '', name: nome, age: idade, size: tamanho, weight: idade, bio: bio, gender: Math.round(Math.random()) == 0 ? 'Macho' : 'Femea', vaccinated: Math.round(Math.random()) == 0 ? 'Y' : 'N', castration: Math.round(Math.random()) == 0 ? 'Y' : 'N', photourl: photo.data.message }]);
        // Exibir a nova linha em branco na tabela
        setShowBlankRow(true);
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
                                    onChange={(e) => handleInputChange(item.id, 'name', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={item.age}
                                    onChange={(e) => handleInputChange(item.id, 'age', e.target.value)}

                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={item.size}
                                    onChange={(e) => handleInputChange(item.id, 'size', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={item.weight}
                                    onChange={(e) => handleInputChange(item.id, 'weight', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={item.bio}
                                    onChange={(e) => handleInputChange(item.id, 'bio', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={item.gender}
                                    onChange={(e) => handleInputChange(item.id, 'gender', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={item.vaccinated}
                                    onChange={(e) => handleInputChange(item.id, 'vaccinated', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={item.castration}
                                    onChange={(e) => handleInputChange(item.id, 'castration', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={item.photourl}
                                    onChange={(e) => handleInputChange(item.id, 'photourl', e.target.value)}
                                />
                            </td>
                            <td>
                                <button onClick={() => handleExcluir(item.id)}>
                                    Excluir
                                </button>
                            </td>
                            <td>
                                <button className="botao-editar" onClick={() => handleEditar(item.id, item.name, item.age, item.size, item.weight, item.bio, item.gender, item.vaccinated, item.castration, item.photourl)}>
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <FloatingButton onClick={handleAddRow} />
        </div>


    );
}

const FloatingButton = ({ onClick }) => (
    <button className="floating-button" onClick={onClick}>
        +
    </button>
);

export default ShelterAdmin;