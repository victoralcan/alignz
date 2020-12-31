import React, { useState } from 'react';
import 'styles/header.scss';
import { Link } from 'react-router-dom';
import { Brand } from './header-components';
import { Button, Col, Collapse, Nav, Navbar, NavbarToggler } from 'reactstrap';
import { ColorPallet } from '../../model/enum/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { IRootState } from '../../reducers';

interface IHeaderProps extends StateProps, DispatchProps {}

function Header(props: IHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const content = document.getElementById('root');
  const contentWidth = content ? content.clientWidth : 1024;
  const mobile = contentWidth <= 992;
  return (
    <Navbar expand="lg" className={`header-container sticky-top shadow ${props.hide && 'd-none'}`}>
      <div onClick={mobile ? toggle : () => {}}>
        <Brand />
      </div>
      <NavbarToggler
        onClick={toggle}
        style={{ backgroundColor: ColorPallet.orange, color: ColorPallet.white, padding: '10px' }}
        className="text-white"
      >
        <FontAwesomeIcon icon={faGripLines} color="white" />
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <Link
            className="header-option"
            to="/como-funciona"
            onClick={mobile ? toggle : () => {}}
            style={{ textDecoration: 'none' }}
          >
            <h6>COMO FUNCIONA</h6>
          </Link>
          <Link
            className="header-option"
            to="/valores"
            onClick={mobile ? toggle : () => {}}
            style={{ textDecoration: 'none' }}
          >
            <h6>VALORES</h6>
          </Link>
          <Link
            className="header-option"
            to="/preavaliacao"
            onClick={mobile ? toggle : () => {}}
            style={{ textDecoration: 'none' }}
          >
            <h6>PRÉ-AVALIAÇÃO</h6>
          </Link>
        </Nav>
        <Col>
          <Button
            tag={Link}
            to="/preavaliacao"
            onClick={mobile ? toggle : () => {}}
            className={`general-button ${mobile ? '' : 'float-right'}`}
          >
            <h6 className="text-white m-0">SOU UM CANDIDATO?</h6>
          </Button>
        </Col>
      </Collapse>
    </Navbar>
  );
}

const mapStateToProps = (store: IRootState) => ({
  hide: store.header.hide,
});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
