import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import moment from 'moment';

import Sidebar from '../Home/Sidebar';
import items from '../Home/menuitems';

import './styles.css';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';


function Ficha_cad_cliente( ) {
    const [client, setCliente] = useState([]);
    const location = useLocation();

    useEffect(() => {

        setCliente(location.state.detail.client);

    }, [client]);

  return (
        <div className="ficha-cad-cliente-container">    
            <Sidebar items={items} />
            <img className="logo" src={logoImg} alt="VendasApp 1.0" />
            <div className="ficha-cad-cliente-imput"> 
                <div className="ficha-cabecalho-cliente">
                    <h1>Ficha Cadastral Cliente</h1>
                </div>

                <div className="ficha-cad-cleinte-itens">
                    <strong>Cod - Nome:</strong>
                    <p>{client.id}  -  {client.name}</p>
                  
                    <strong>Apelido:</strong>
                    <p>{client.nickname}</p>

                    <strong>CPF:</strong>
                    <p>{client.cpf}</p>

                    <strong>Endereço:</strong>
                    <p>{client.address}</p>

                    <strong>Cidade / e-mail:</strong>
                    <p>{client.city} / {client.email}</p>
                                        
                    <strong>Telefones:</strong>
                    <p>{client.phone1} / {client.phone2}</p>
                    
                    <strong>Indicado por:</strong>
                    <p>{client.recommendation}</p>

                    <strong>Data de nascimento:</strong>
                    <p>{moment(client.birthday).format('DD/MM/YYYY')}</p> 
                    
                    <strong>Observações:</strong>
                    <p>{client.comments}</p>

                    <button type="button">
                        Alterar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Ficha_cad_cliente