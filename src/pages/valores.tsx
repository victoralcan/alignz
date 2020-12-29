import React from 'react';
import FittedImage from 'react-fitted-image';
import Valores1 from 'content/images/pages/valores/valores1.png';
import Valores2 from 'content/images/pages/valores/valores2.png';
import Valores3 from '../content/images/pages/valores/valores3.png';
import ReadySetSmileRight2 from '../content/images/readySetSmileRight2.png';
import '../styles/pages/valores.css';
import Duvidas from '../shared/components/Duvidas';
import ReadySetSmile from '../shared/components/readySetSmile';
import { Button, Col, Input, Row } from 'reactstrap';
import { ColorPallet } from '../shared/model/enum/colors';
import { Link } from 'react-router-dom';

class Valores extends React.Component {
  render() {
    return (
      <>
        {/*Acessível para todos*/}
        <section className="infoContainer">
          <div className="position-absolute w-100">
            <FittedImage src={Valores1} style={{ height: '85vh' }} fit="cover" />
          </div>
          <div className="z-index-2 h-100">
            <div className="h-100 col-6 center-elements pt-5">
              <div className="m-auto w-50 pt-5">
                <h1 className="display-4 font-weight-bold">Acessível para todos</h1>
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
        {/*Quer saber se você é um candidato*/}
        <section className="infoContainer">
          <div className="position-absolute w-100">
            <FittedImage src={Valores2} style={{ height: '85vh' }} fit="cover" />
          </div>
          <div className="z-index-2 h-100">
            <Row className="h-100">
              <Col md={6} className="h-100"></Col>
              <Col md={6} className="h-100 center-elements">
                <div className="m-auto w-75">
                  <h1 className="display-4 font-weight-bold text-black">Quer saber se você é um candidato?</h1>
                  <Row>
                    <Col md={12}>
                      <ul>
                        <li>
                          <Row>
                            <Col md={6}>
                              <Input
                                placeholder="Preencha seu email"
                                style={{ backgroundColor: ColorPallet.pastel }}
                                className="mb-3"
                              />
                            </Col>
                            <Col>
                              <Button className="general-button"></Button>
                            </Col>
                          </Row>
                        </li>
                      </ul>
                    </Col>
                    <Col md={12} className="d-flex align-items-center">
                      <div className="m-auto">
                        <h2>OU</h2>
                      </div>
                    </Col>
                    <Col md={12}>
                      <ul>
                        <li>
                          <div className="d-flex">
                            <Button tag={Link} to="/agenda" className="w-50 mr-auto ml-auto btn-light">
                              <h4>Faça nosso teste online</h4>
                            </Button>
                          </div>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        {/*Trabalhamos direto da fábrica*/}
        <section className="infoContainer">
          <div className="position-absolute w-100">
            <FittedImage src={Valores3} style={{ height: '85vh' }} fit="cover" />
          </div>
          <div className="z-index-2 h-100">
            <div className="h-100 col-5 d-flex">
              <div className="m-auto w-100 pl-5">
                <ul>
                  <li>
                    <h2>Trabalhamos direto da fábrica com os pacientes, evitando custos desnecessários.</h2>
                    <div className="clear" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*Como isso funciona*/}
        {/*Ready Set Smile*/}
        <ReadySetSmile src={ReadySetSmileRight2} right={false} />
        {/*Dúvidas*/}
        <Duvidas title="Ainda tem dúvidas?" />
      </>
    );
  }
}

export default Valores;
