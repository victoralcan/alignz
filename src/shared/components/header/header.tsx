import React from 'react';
import 'styles/header.scss';
import { Link } from 'react-router-dom';
import { Brand } from './header-components';
import { Button, Col, Navbar } from 'reactstrap';

function Header() {
  return (
    <Navbar expand="lg" className="header-container fixed-top shadow">
      <Brand />
      <Link className="header-option" to="/como-funciona" style={{ textDecoration: 'none' }}>
        <p>COMO FUNCIONA</p>
        <div className="clear" />
      </Link>
      <Link className="header-option" to="/valores" style={{ textDecoration: 'none' }}>
        <p>VALORES</p>
      </Link>
      <Link className="header-option" to="/agenda" style={{ textDecoration: 'none' }}>
        <p>AGENDAR PRÉ-AVALIAÇÃO</p>
      </Link>
      <Col>
        <Button tag={Link} to="/chatbot" className="general-button float-right">
          <h5 className="text-white">SOU UM CANDIDATO?</h5>
        </Button>
      </Col>
    </Navbar>
  );
}

export default Header;
