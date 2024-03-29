import React from 'react';
import '../../../styles/footer.scss';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { ColorPallet } from '../../model/enum/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { Brand } from '../header/header-components';
import { IRootState } from '../../reducers';
import { connect } from 'react-redux';

interface IFooterProps extends StateProps, DispatchProps {}

function Footer(props: IFooterProps) {
  return (
    <Row style={{ backgroundColor: ColorPallet.pinkLight }} className={`p-3 ${props.hide && 'd-none'}`}>
      <Col md={4} xs={12} className="d-flex align-items-center justify-content-center pb-4 pb-md-0 footer-content">
        <ul className="d-flex flex-column">
          <li className="m-auto">
            <Brand />
          </li>
          <li>
            <br />
            <br />
          </li>
          <li>
            <h6>Fique ligado nas nossas mídias</h6>
          </li>
          <li className="m-auto">
            <FontAwesomeIcon
              icon={faInstagram}
              onClick={() => window.open('https://instagram.com/aligner.z?igshid=1x6cgcw63bvym', '_blank')}
              size="2x"
            />
            &nbsp;&nbsp;
            <FontAwesomeIcon
              icon={faFacebook}
              onClick={() => window.open('https://www.facebook.com/AlignerZ-102803528333062', '_blank')}
              size="2x"
            />
            &nbsp;&nbsp;
            <FontAwesomeIcon
              icon={faWhatsapp}
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5561984436135', '_blank')}
              size="2x"
            />
          </li>
        </ul>
      </Col>
      <Col md={4} xs={12} className="d-flex align-items-center justify-content-center pb-4 pb-md-0  footer-content">
        <ul>
          <li>
            <h3>SOBRE</h3>
            <br />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/como-funciona">Como funciona</Link>
          </li>
          <li>
            <Link to="/valores">Valores</Link>
          </li>
          <li>
            <Link to="/preavaliacao">Pré-avaliação</Link>
          </li>
        </ul>
      </Col>
      <Col md={4} xs={12} className="d-flex align-items-center justify-content-center pb-4 pb-md-0  footer-content">
        <ul>
          <li>
            <h3>ATENDIMENTO</h3>
            <br />
          </li>
          <li>+55 (61) 98443-6135</li>
          <li>@alignerz</li>
          <li>Segunda a sexta</li>
          <li>8h30 às 18h</li>
        </ul>
      </Col>
    </Row>
  );
}

const mapStateToProps = (store: IRootState) => ({
  hide: store.footer.hide,
});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
