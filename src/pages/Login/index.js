import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiShieldOff } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';
import vendasImg from '../../assets/vendas.png';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/authenticate', { email, password } );

            //localStorage.setItem('userEmail', email);
            //localStorage.setItem('userId', response.data.id);
            //localStorage.setItem('userName', response.data.name);

            history.push('/home');
        } catch (err) {
            alert('Falha no Login, tente novamente.')
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="VendasApp 1.0" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input 
                        type="email"
                        placeholder="Seu e-mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                        type="password" 
                        placeholder="Sua senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                    />

                    <button className="button" type="submit">Entrar</button>

                    <Link to="/newpassword" >
                        <FiShieldOff size={16} color="#e02041" />
                         Esqueci a senha
                    </Link>
                </form>
            </section>

            <img src={vendasImg} alt="Vendas" />
        </div>
    );
}