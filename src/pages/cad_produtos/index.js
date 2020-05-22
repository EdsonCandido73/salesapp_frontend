import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Home/Sidebar';
import items from '../Home/menuitems';

import './styles.css';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

function Cad_produtos() {
    let history = useHistory();
    const [products, setProdutos] = useState([]);

    useEffect(() => {
        api.get('products').then(response => {
            setProdutos(response.data);
        })
    }, []);

function handleClickExpand(produto) {
    history.push("Ficha_cad_produto" , produto );
}

  return (
        <div className="cad-cliente-container">      
            <Sidebar items={items} />
            <div className="cad-cliente-imput"> 
                <img className="logo" src={logoImg} alt="VendasApp 1.0" />
                <div className="cabecalho-cliente">
                    <h1>Cadastro de Produtos</h1>
                    <button type="button" className="button-procurar-cliente">
                        Procurar
                    </button>
                    <button type="button" className="button-novo-cliente">
                        Novo Produto
                    </button>
                </div>

                <ul>
                    {products.map(produto => (
                        <li key={produto.id}>
                            <strong>Cod. - Descrição:</strong>
                            <p>{produto.codbar} - {produto.description}</p>
                    
                            <strong>Marca:</strong>
                            <p>{produto.manufacturer}</p>
                    
                            <strong>Unidade / Preço venda:</strong>
                            <p>{produto.unit} / {produto.saleprice}</p>
                    
                            <button 
                                type="button"
                                onClick={() => history.push({
                                    pathname: `ficha_cad_produto/${produto.id}`,
                                    state: { detail: {produto} }
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

export default Cad_produtos