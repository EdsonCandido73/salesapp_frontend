import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Home/Sidebar';
import items from '../Home/menuitems';

import './styles.css';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

function Cad_clientes() {
    let history = useHistory();
    const [clients, setClientes] = useState([]);

    useEffect(() => {
        api.get('clients').then(response => {
            setClientes(response.data);
        })
    }, []);

function handleClickExpand(client) {
    history.push("Ficha_cad_cliente" , client );
}

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
                        Novo Cliente
                    </button>
                </div>

                <ul>
                    {clients.map(client => (
                        <li key={client.id}>
                            <strong>Cod. - Nome:</strong>
                            <p>{client.id} - {client.name}</p>
                    
                            <strong>Apelido:</strong>
                            <p>{client.nickname}</p>
                    
                            <strong>Cidade / Telefone:</strong>
                            <p>{client.city} / {client.phone1}</p>
                    
                            <button 
                                type="button"
                                onClick={() => history.push({
                                    pathname: `ficha_cad_cliente/${client.id}`,
                                    state: { detail: {client} }
                                })}>
                                Abrir
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Cad_clientes