import React from 'react';
import 'styles/header.scss';
import { Link } from 'react-router-dom';
import { Brand } from './header-components';

function Header() {
    return (
        <div className="header-container">
            <Brand />
            <Link className="header-option" to="/aparelho-invisivel" style={{ textDecoration: 'none' }}>
                Aparelho Invisível
            </Link>
            <Link className="header-option" to="/clareamento" style={{ textDecoration: 'none' }}>
                Clareamento
            </Link>
            <Link className="header-option" to="/preco" style={{ textDecoration: 'none' }}>
                Saiba o Preço
            </Link>
            <Link className="header-option" to="/agenda" style={{ textDecoration: 'none' }}>
                Agendar pré-avaliação
            </Link>
        </div>
    );
}

export default Header;
