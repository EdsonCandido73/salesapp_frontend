// https://dev.to/jsmanifest/create-a-modern-dynamic-sidebar-menu-in-react-using-recursion-36eo

import React from 'react';
import Sidebar from './Sidebar';
import items from './menuitems';

import './styles.css';

import logoImg from '../../assets/logo.png';
import vendasImg from '../../assets/vendas.png';


function Home() {
  return (
    <div className="home-container">      
      <Sidebar items={items} />
      <img className="logo" src={logoImg} alt="VendasApp 1.0" />
      <img className="image-background" src={vendasImg} alt="Vendas" />
    </div>
  )
}

export default Home