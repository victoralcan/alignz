import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import FittedImage from 'react-fitted-image';
import Preco4 from 'content/images/pages/preco/preco4.jpg';
import Home2 from 'content/images/pages/home/home2.png';
import Swipe1 from '../content/images/pages/home/swipe1.gif';
import Swipe2 from '../content/images/pages/home/swipe2.gif';
import Swipe3 from '../content/images/pages/home/swipe3.gif';
import Aparelho from '../content/images/pages/home/aparelho.png';
import Alinhador from '../content/images/pages/home/alinhador.png';
import Depoimentos from '../shared/components/Depoimentos';
import SwiperPhoto, { ISlide } from '../shared/components/SwiperPhoto';

import '../styles/pages/home.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    const slidesComoFunciona: ISlide[] = [
      {
        photo: Swipe1,
        description: 'Faça a pré-avaliação virtual com nossas dentistas sem sair de casa',
      },
      {
        photo: Swipe2,
        description: 'Confirme o diagnostico com os exames presenciais - scan 3D, raio-X e fotos em apenas 30 minutos',
      },
      {
        photo: Swipe3,
        description:
          'Durante a jornada, use cada fase de alinhadores por 2 semanas e faça o acompanhamento a cada 2 meses',
      },
    ];
    return (
      <>
        {/*Choose smile*/}
        <section className="infoContainer">
          <div className="position-absolute">
            <FittedImage src={Home2} fit="cover" />
          </div>
          <div className="z-index-2 h-100">
            <div className="h-100 col-6 center-elements">
              <div className="m-auto w-50">
                <h1 className="font-weight-bold">Conheça o futuro.</h1>
                <ul>
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                      also the leap into electronic typesetting, remaining essentially uncha
                    </span>
                    <div className="clear" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="infoContainerFlex d-flex flex-column w-75 m-auto">
          <div className="m-auto">
            <h1 className="font-weight-bold text-center">Qual alinhador é o certo para você?</h1>
          </div>
          <br />
          <h6>
            Maybe you want your new smile in time for a special event 4-6 months from now. Or maybe timing isn’t as
            important as wearing your aligners only at night. Either way, we’ve got you covered.
          </h6>
          <br />
          <Row className="m-auto justify-content-center">
            <Col sm={6} md={6} lg={6}>
              <Row className="h-100">
                <Col sm={6} md={6} lg={6} className="d-flex justify-content-center align-items-center">
                  <ul>
                    <li>
                      <FittedImage src={Alinhador} style={{ width: '78px', height: '64px' }} />
                    </li>
                    <li>Alinhadores Alignerz</li>
                    <li>Horas:</li>
                    <li>22h por dia</li>
                    <li>Preço</li>
                    <li>1000$</li>
                  </ul>
                </Col>
                <div className="vl" />
                <Col sm={6} md={6} lg={6} className="d-flex justify-content-center align-items-center">
                  <ul>
                    <li>
                      <FittedImage src={Aparelho} style={{ width: '72px', height: '64px' }} />
                    </li>
                    <li>Aparelhos Convencionais</li>
                    <li>Horas:</li>
                    <li>24/7</li>
                    <li>365 dias por ano</li>
                    <li>Preço</li>
                    <li>6000$</li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <FittedImage src={Home2} fit="cover" />
            </Col>
          </Row>
        </section>
        {/*Sorrir é facil como começar*/}
        <SwiperPhoto slides={slidesComoFunciona} title="Sorrir é fácil" subtitle="Como começar" />
        {/*Depoimentos*/}
        <Depoimentos />
        {/*Produto*/}
        <section className="infoContainerFlex">
          <Row>
            <Col md={6} className="h-100 border-image">
              <FittedImage fit="cover" src={Preco4} />
            </Col>
            <div className="col-6 center-elements">
              <div className="m-auto w-75">
                <h1 className="font-weight-bold">Nosso Produto</h1>
                <ul>
                  <li>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has survived not only five centur
                    </span>
                    <div className="clear" />
                  </li>
                </ul>
                <div className="d-flex">
                  <Button tag={Link} to="/como-funciona" className="general-button m-auto">
                    Saiba mais
                  </Button>
                </div>
              </div>
            </div>
          </Row>
        </section>
      </>
    );
  }
}

export default Home;
