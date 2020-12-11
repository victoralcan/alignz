import React from 'react';
import FittedImage from 'react-fitted-image';
import Preco1 from 'content/images/pages/preco/preco1.jpg';
import '../styles/pages/preco.css';
import Duvidas from '../shared/components/Duvidas';
import ReadySetSmile from '../shared/components/readySetSmile';
import { Button, Col, Input, Row } from 'reactstrap';
import { ColorPallet } from '../shared/model/enum/colors';

class Preco extends React.Component {
  render() {
    return (
      <>
        <section className="infoContainer">
          <div className="position-absolute w-100">
            <FittedImage src={Preco1} style={{ height: '85vh' }} fit="cover" />
          </div>
          <div className="z-index-2 h-100">
            <div className="h-100 col-6 center-elements pt-5">
              <div className="m-auto w-50 pt-5">
                <h1 className="font-weight-bold">Acessível para todos</h1>
                <ul>
                  <li>
                    <span>Acreditamos que você não precisa pagar uma fortuna pelo seu sorriso dos sonhos ;)</span>
                    <div className="clear" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="infoContainerFlex d-flex flex-column">
          <div className="m-auto">
            <h1 className="font-weight-bold text-center">Quer saber se você é um candidato?</h1>
          </div>
          <Row>
            <Col md={5}>
              <ul>
                <li>
                  <div className="d-flex">
                    <h2 className="mr-auto ml-auto pb-4">Preencha seu e-mail</h2>
                  </div>
                </li>
                <li>
                  <Input
                    placeholder="Insira seu email"
                    style={{ backgroundColor: ColorPallet.pastel }}
                    className="mb-3"
                  />
                </li>
                <li>
                  <div className="d-flex">
                    <Button className="general-button w-50 mr-auto ml-auto">Solicitar o Preço</Button>
                  </div>
                </li>
              </ul>
            </Col>
            <Col md={2} className="d-flex align-items-center">
              <div className="m-auto">
                <h2>OU</h2>
              </div>
            </Col>
            <Col md={5}>
              <ul>
                <li>
                  <div className="d-flex">
                    <h2 className="mr-auto ml-auto pb-4">faça nosso teste online</h2>
                  </div>
                </li>
                <li>
                  <br />
                </li>
                <li>
                  <br />
                </li>
                <li>
                  <div className="d-flex">
                    <Button className="general-button w-50 mr-auto ml-auto">Sou um candidato?</Button>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </section>
        <ReadySetSmile />
        <Duvidas />
      </>
    );
  }
}

export default Preco;
