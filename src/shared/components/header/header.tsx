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
            <h6>COMO FUNCIONA</h6>
          </Link>
          <Link className="header-option" to="/valores" style={{ textDecoration: 'none' }}>
            <h6>VALORES</h6>
          </Link>
          <Link className="header-option" to="/preavaliacao" style={{ textDecoration: 'none' }}>
            <h6>PRÉ-AVALIAÇÃO</h6>
          </Link>
        </Nav>
        <Col>
          <Button tag={Link} to="/preavaliacao" className={`general-button ${mobile ? '' : 'float-right'}`}>
            <h6 className="text-white m-0">SOU UM CANDIDATO?</h6>
          </Button>
        </Col>
      </Collapse>
    </Navbar>
  );
}

export default Header;
