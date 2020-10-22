import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Input, Row } from 'reactstrap';
import FittedImage from 'react-fitted-image';
import Preco2 from 'content/images/pages/preco/preco2.png';
import Preco4 from 'content/images/pages/preco/preco4.jpg';
import Agenda1 from 'content/images/agenda1.png';
import Home2 from 'content/images/home2.png';
import { Link } from 'react-router-dom';
import Depoimentos from '../shared/components/depoimentos';
import Duvidas from '../shared/components/duvidas';
import '../styles/pages/home.css';

class Home extends React.Component {
  render() {
    const backgroundColor = '#C6D6E7';
    return (
      <>
        {/*agendar pre avaliação*/}
        <section className="infoContainer">
          <div className="position-absolute">
            <FittedImage src={Home2} fit="cover" />
          </div>
          <div className="z-index-2 h-100">
            <div id="agendar" className="h-100 col-6">
              <div className="m-auto">
                <h1 className="font-weight-bold" style={{ color: '#F48472' }}>
                  Seu sorriso é unico
                </h1>
                <ul>
                  <li>
                    <span>
                      faça sua pré-avaliação virtual e conheça <br /> nosso tratamento sem sair de casa
                    </span>
                  </li>
                </ul>
                <Button tag={Link} to="/agenda" className="general-button">
                  Agende já
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/*Solicitar preço*/}
        <section className="infoContainer">
          <Row className="h-100">
            <Col md={6} className="h-100">
              <FittedImage fit="cover" src={Preco4} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center" md={6} style={{ backgroundColor }}>
              <Card style={{ backgroundColor, margin: '0px 100px 0px 100px' }}>
                <CardHeader className="text-center border-0" style={{ backgroundColor }}>
                  <h1 className="font-weight-bold" style={{ color: '#fff' }}>
                    Moderno e acessível
                  </h1>
                  <br />
                  <h1 className="font-weight-bold" style={{ color: '#545454' }}>
                    Receba o preço do nosso aparelho invisível ;)
                  </h1>
                </CardHeader>
                <CardBody style={{ backgroundColor }}>
                  <Input placeholder="Insira seu email" className="mb-3" />
                  <div className="d-flex justify-content-center">
                    <Button className="general-button">Solicitar o Preço</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>
        {/*Sorrir é facil como começar*/}
        <section>SORRIR</section>
        {/*O que está incluso*/}
        <section className="infoContainer">
          <Row className="h-100">
            <Col md={6} className="h-100">
              <div id="left-side-box" className="h-100 justify-content-center">
                <h1 className="font-weight-bold">O que está incluso?</h1>
                <h2>nosso tratamento já vem com tudo para te fazer sorrir</h2>
                <ul className="d-flex flex-column">
                  <li className="mr-auto ml-auto">
                    <p>Exames da avaliação</p>
                  </li>
                  <li className="mr-auto ml-auto">
                    <p>Simulação do sorriso final</p>
                  </li>
                  <li className="mr-auto ml-auto">
                    <p>Par de placas de contenção</p>
                  </li>
                  <li className="mr-auto ml-auto">
                    <p>Limpeza antes de começar</p>
                  </li>
                  <li className="mr-auto ml-auto">
                    <p>Todas as etapas de alinhadores</p>
                  </li>
                  <li className="mr-auto ml-auto">
                    <p>Consultas de acompanhamento</p>
                  </li>
                  <li className="mr-auto ml-auto">
                    <p>Atendimento 7 dias por semana</p>
                  </li>
                </ul>
                <Button tag={Link} to="/agenda" className="general-button">
                  Agendar pré-avaliação
                </Button>
              </div>
            </Col>
            <Col className="d-flex h-100 align-items-center" md={6}>
              <div id="right-side-box" className="h-100" />
              <div className="w-100 position-absolute" id="preco2-photo">
                <FittedImage fit="cover" src={Preco2} />
              </div>
            </Col>
          </Row>
        </section>
        {/*Video*/}
        <section className="infoContainer d-flex justify-content-center align-items-center">Video</section>
        {/*Agende ja*/}
        <section className="infoContainerBig">
          <Row className="h-100">
            <Col className="d-flex align-items-center" md={6}>
              <div id="sorriso-alegre" className="w-100 h-75">
                <h1 className="font-weight-bold" style={{ color: '#F48472' }}>
                  Seu sorriso é unico
                </h1>
                <ul>
                  <li>
                    <span>
                      faça sua pré-avaliação virtual e conheça <br /> nosso tratamento sem sair de casa
                    </span>
                  </li>
                </ul>
                <Button tag={Link} to="/agenda" className="general-button">
                  Agende já
                </Button>
              </div>
            </Col>
            <Col md={6} className="h-100">
              <div className="h-100" id="preco3-photo">
                <FittedImage fit="cover" src={Agenda1} />
              </div>
            </Col>
          </Row>
        </section>
        {/*Depoimentos*/}
        <Depoimentos />
        {/*Dúvidas*/}
        <Duvidas />
      </>
    );
  }
}

export default Home;
