import React from 'react';
import Sidebar from '../Home/Sidebar';
import items from '../Home/menuitems';

import './styles.css';

import logoImg from '../../assets/logo.png';

function Cad_clientes() {
  return (
        <div className="cad-cliente-container">      
            <Sidebar items={items} />
            <div className="cad-cliente-imput"> 
                <img className="logo" src={logoImg} alt="VendasApp 1.0" />
                <h1>Cadastro de Clientes</h1>
            </div>
        </div>

    )
}

export default Cad_clientes