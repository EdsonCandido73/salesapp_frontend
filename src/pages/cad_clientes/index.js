import React, { useEffect, useState } from 'react';
import Sidebar from '../Home/Sidebar';
import items from '../Home/menuitems';

import './styles.css';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

function Cad_clientes() {
    const [clients, setClientes] = useState([]);

    useEffect(() => {
        api.get('clients').then(response => {
            setClientes(response.data);
        })
    }, []);

  return (
        <div className="cad-cliente-container">      
            <Sidebar items={items} />
            <div className="cad-cliente-imput"> 
                <img className="logo" src={logoImg} alt="VendasApp 1.0" />
                <div className="cabecalho-cliente">
                    <h1>Cadastro de Clientes</h1>
                    <button type="button" className="button-procurar-cliente">
                        Procurar
                    </button>
                    <button type="button" className="button-novo-cliente">
                        Cadastrar Cliente
                    </button>
                </div>

                <ul>
                    {clients.map(client => (
                        <li key={client.id}>
                            <strong>Nome:</strong>
                            <p>{client.name}</p>
                    
                            <strong>Apelido:</strong>
                            <p>{client.nickname}</p>
                    
                            <strong>Cidade:</strong>
                            <p>{client.city}</p>
                    
                            <button type="button">
                                Expandir
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default Cad_clientes