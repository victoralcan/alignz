import React, { useState } from 'react';
import 'styles/header.scss';
import { Link } from 'react-router-dom';
import { Brand } from './header-components';
import { Button, Col, Collapse, Nav, Navbar, NavbarToggler } from 'reactstrap';
import { ColorPallet } from '../../model/enum/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const content = document.getElementById('root');
  const contentWidth = content ? content.clientWidth : 1024;
  const mobile = contentWidth <= 992;
  return (
    <Navbar expand="lg" className="header-container sticky-top shadow">
      <Brand />
      <NavbarToggler
        onClick={toggle}
        style={{ backgroundColor: ColorPallet.orange, color: ColorPallet.white, padding: '10px' }}
        className="text-white"
      >
        <FontAwesomeIcon icon={faGripLines} color="white" />
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <Link className="header-option" to="/como-funciona" style={{ textDecoration: 'none' }}>
            <p>COMO FUNCIONA</p>
          </Link>
          <Link className="header-option" to="/valores" style={{ textDecoration: 'none' }}>
            <p>VALORES</p>
          </Link>
          <Link className="header-option" to="/agenda" style={{ textDecoration: 'none' }}>
            <p>AGENDAR PRÉ-AVALIAÇÃO</p>
          </Link>
        </Nav>
        <Col>
          <Button tag={Link} to="/chatbot" className={`general-button ${mobile ? '' : 'float-right'}`}>
            <h5 className="text-white">SOU UM CANDIDATO?</h5>
          </Button>
        </Col>
      </Collapse>
    </Navbar>
  );
}

export default Header;
