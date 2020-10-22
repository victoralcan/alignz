import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Collapse, Input, Row } from 'reactstrap';
import FittedImage from 'react-fitted-image';
import Preco1 from 'content/images/pages/preco/preco1.jpg';
import Preco2 from 'content/images/pages/preco/preco2.png';
import '../styles/pages/preco.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Depoimentos from '../shared/components/depoimentos';

interface IHomeState {
  collapseControl: boolean[];
}

class Home extends React.Component<any, IHomeState> {
  constructor(props) {
    super(props);
    this.state = {
      collapseControl: [false, false, false, false],
    };
  }

  toggleDuvida = (index: number) => {
    const { collapseControl } = this.state;
    collapseControl.splice(index, 1, !collapseControl[index]);
    this.setState(() => {
      return {
        collapseControl,
      };
    });
  };

  render() {
    const { collapseControl } = this.state;
    const backgroundColor = '#fee0cc';
    return (
      <>
        {/*agendar pre avaliação*/}
        <section>AGENDAR</section>
        {/*Solicitar preço*/}
        <section className="infoContainer">
          <Row className="h-100">
            <Col md={6} className="h-100">
              <FittedImage fit="cover" src={Preco1} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center" md={6} style={{ backgroundColor }}>
              <Card style={{ backgroundColor, margin: '0px 100px 0px 100px' }}>
                <CardHeader className="text-center border-0" style={{ backgroundColor }}>
                  <h1 className="font-weight-bold">Receba o preço do nosso aparelho invisível ;)</h1>
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
        <section>Video</section>
        {/*Agende ja*/}
        <section>Agende ja</section>
        {/*Depoimentos*/}
        <Depoimentos />
        {/*Dúvidas*/}
        <section className="infoContainerFlex d-flex flex-column">
          <h1 className="text-dark pb-5 mr-auto ml-auto">Dúvidas Frequentes</h1>
          <div className="mr-auto ml-auto w-50">
            <h4 onClick={() => this.toggleDuvida(0)} className="togglerDuvida pb-3">
              <FontAwesomeIcon icon={collapseControl[0] ? 'plus' : 'minus'} />
              &nbsp;&nbsp;
              <span className="font-weight-bold togglerDuvida">como funciona</span> o tratamento de aparelho invisível
              AlignerZ?
            </h4>
            <Collapse isOpen={collapseControl[0]} className="w-75 mr-auto ml-auto">
              <p>
                após digitalizar a sua boca, nossos ortodontistas planejam a movimentação dos seus dentes e você recebe
                uma sequência de alinhadores transparentes feitos sob medida. use cada fase de alinhadores por 2 semanas
                e volte para uma consulta de acompanhamento a cada 2 meses, até chegar no sorriso que você ama.
              </p>
            </Collapse>
            <h4 onClick={() => this.toggleDuvida(1)} className="togglerDuvida pb-3">
              <FontAwesomeIcon icon={collapseControl[1] ? 'plus' : 'minus'} />
              &nbsp;&nbsp;como eu sei se o tratamento de aparelho invisível AlignerZ&nbsp;
              <span className="font-weight-bold togglerDuvida">funciona para mim?</span>
            </h4>
            <Collapse isOpen={collapseControl[1]} className="w-75 mr-auto ml-auto">
              <p>
                o aparelho invisível AlignerZ é focado em casos estéticos, de alinhamento e espaçamento dos dentes, que
                podem durar entre 3 e 9 meses. a melhor forma de saber se funciona para você é agendando uma avaliação
                presencial em uma das nossas lojas. até lá, pode responder ao nosso teste online aqui!
              </p>
            </Collapse>
            <h4 onClick={() => this.toggleDuvida(2)} className="togglerDuvida pb-3">
              <FontAwesomeIcon icon={collapseControl[2] ? 'plus' : 'minus'} />
              &nbsp;&nbsp; como eu sei se funciona mesmo?
            </h4>
            <Collapse isOpen={collapseControl[2]} className="w-75 mr-auto ml-auto">
              <p>
                A tecnologia por trás dos aparelhos invisíveis já existe há mais de 20 anos e é clinicamente comprovada.
                Além disso, por conta do planejamento digital, podemos prever cada etapa do tratamento, o que deixa o
                resultado mais assertivo.
              </p>
            </Collapse>
            <h4 onClick={() => this.toggleDuvida(3)} className="togglerDuvida pb-3">
              <FontAwesomeIcon icon={collapseControl[3] ? 'plus' : 'minus'} />
              &nbsp;&nbsp; o tratamento de aparelho invisível AlignerZ substitui o aparelho fixo?
            </h4>
            <Collapse isOpen={collapseControl[3]} className="w-75 mr-auto ml-auto">
              <p>
                Nosso aparelho invisível substitui o aparelho fixo para casos estéticos, que podem durar entre 3 e 9
                meses. É um tratamento mais rápido, pois os alinhadores aplicam uma força mais exata nos dentes,
                direcionando melhor a movimentação.
              </p>
            </Collapse>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
