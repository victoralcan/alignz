import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Input, Row } from 'reactstrap';
import FittedImage from 'react-fitted-image';
import Preco1 from 'content/images/pages/preco/preco1.jpg';
import Preco2 from 'content/images/pages/preco/preco2.png';
import Preco3 from 'content/images/pages/preco/preco3.png';
import '../styles/pages/preco.css';
import { Link } from 'react-router-dom';
import Depoimentos from '../shared/components/Depoimentos';
import Duvidas from '../shared/components/Duvidas';
import { ColorPallet } from '../shared/model/enum/colors';

class Preco extends React.Component {
  render() {
    const backgroundColor = ColorPallet.white;
    return (
      <>
        <section className="infoContainer">
          <Row className="h-100">
            <Col md={6} className="h-100">
              <FittedImage fit="cover" src={Preco1} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center" md={6}>
              <Card style={{ backgroundColor, margin: '0px 100px 0px 100px' }}>
                <CardHeader className="text-center border-0" style={{ backgroundColor }}>
                  <h1 className="font-weight-bold">Receba o preço do nosso aparelho invisível ;)</h1>
                </CardHeader>
                <CardBody style={{ backgroundColor }}>
                  <Input
                    placeholder="Insira seu email"
                    style={{ backgroundColor: ColorPallet.whiteDirty }}
                    className="mb-3"
                  />
                  <div className="d-flex justify-content-center">
                    <Button className="general-button">Solicitar o Preço</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>
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
        <Depoimentos />
        <section className="infoContainer">
          <Row className="h-100">
            <Col md={6} className="h-100">
              <div className="h-100" id="preco3-photo">
                <FittedImage fit="cover" src={Preco3} />
              </div>
            </Col>
            <Col className="d-flex h-100 align-items-center" md={6}>
              <div id="combo-smile" className="w-100 position-absolute">
                <h1 className="font-weight-bold">Combo smile</h1>
                <h2 style={{ color: '#77C1CD' }}>Alinhamento + clareamento</h2>
                <ul>
                  <li>
                    <span>Faça os dois tratamentos de uma só vez.</span>
                  </li>
                  <li>
                    <span>Aplique o gel clareador na plaquinha de alinhamento</span>
                  </li>
                  <li>
                    <span>e conquiste seu melhor sorriso.</span>
                  </li>
                </ul>
                <Button tag={Link} to="/agenda" className="general-button">
                  Agendar pré-avaliação
                </Button>
              </div>
            </Col>
          </Row>
        </section>
        <Duvidas />
        <section className="infoContainerSmall d-flex">
          <Row className="m-auto justify-content-center">
            <ul>
              <li className="mt-4 mb-4 text-center">
                <h1>
                  sorriso leve, inclusive <br /> para o seu bolso
                </h1>
              </li>
              <li className="mt-4 mb-5">
                <h2>Receba agora o preço do aparelho invisível</h2>
              </li>
              <li className="mt-5 mb-4">
                <Input
                  placeholder="Insira seu email"
                  style={{ backgroundColor: ColorPallet.whiteDirty }}
                  className="mb-3"
                />
              </li>
              <li className="d-flex mt-4">
                <Button className="general-button m-auto">Solicitar o Preço</Button>
              </li>
            </ul>
          </Row>
        </section>
      </>
    );
  }
}

export default Preco;
