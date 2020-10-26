import React from 'react';
import 'styles/header.scss';
import { Link } from 'react-router-dom';
import { Brand } from './header-components';
import { Button, Navbar } from 'reactstrap';

function Header() {
  return (
    <Navbar expand="lg" className="header-container">
      <Brand />
      <Link className="header-option" to="/como-funciona" style={{ textDecoration: 'none' }}>
        Como funciona
      </Link>
      <Link className="header-option" to="/preco" style={{ textDecoration: 'none' }}>
        Saiba o Preço
      </Link>
      <Link className="header-option" to="/agenda" style={{ textDecoration: 'none' }}>
        Agendar pré-avaliação
      </Link>
      <Button tag={Link} to="/chatbot" className="general-button float-right w-50">
        Sou um candidato?
      </Button>
    </Navbar>
  );
}

export default Header;
