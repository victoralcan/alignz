import React from 'react';
import FittedImage from 'react-fitted-image';
import Valores1 from 'content/images/pages/valores/valores1.png';
import Valores2 from 'content/images/pages/valores/valores2.png';
import Valores3 from '../content/images/pages/valores/valores3.png';
import Valores4 from '../content/images/pages/valores/valores4.png';
import ReadySetSmileRight2 from '../content/images/readySetSmileRight2.png';
import '../styles/pages/valores.css';
import Duvidas from '../shared/components/Duvidas';
import ReadySetSmile from '../shared/components/readySetSmile';
import { Button, Col, Input, Row } from 'reactstrap';
import { ColorPallet } from '../shared/model/enum/colors';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { sendOnlyEmail } from './preavaliacao/preavaliacao.reducer';
import { connect } from 'react-redux';

interface IValoresProps extends StateProps, DispatchProps {}

class Valores extends React.Component<IValoresProps> {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    const content = document.getElementById('root');
    const contentWidth = content ? content.clientWidth : 1024;
    const mobile = contentWidth <= 992;
    return (
      <>
        {/*Acessível para todos*/}
        <section className="infoContainer">
          <div className="bgImg">
            <FittedImage src={Valores1} fit="cover" />
          </div>
          <div className="bgText">
            <Col md={6} className="h-100 center-elements pt-5">
              <div className="contentDiv">
                <h1 className="display-4 font-weight-bold">Acessível para todos</h1>
                <ul>
                  <li>
                    <span>Acreditamos que você não precisa pagar uma fortuna pelo seu sorriso dos sonhos ;)</span>
                    <div className="clear" />
                  </li>
                </ul>
              </div>
            </Col>
          </div>
        </section>
        {/*Quer saber se você é um candidato*/}
        <section className="infoContainer">
          <div className="bgImg">
            <FittedImage src={Valores2} fit="cover" />
          </div>
          <div className="bgText">
            <Row className="h-100">
              <Col md={4} className="h-100"></Col>
              <Col md={8} className="h-100 center-elements">
                <h1 className="titleMobile title font-weight-bold text-black w-75">
                  Quer saber se você é um candidato?
                </h1>
                <div className="contentDiv">
                  <Row>
                    <Col md={12}>
                      <ul>
                        <li className="d-flex">
                          <div className="d-flex w-100 m-auto">
                            <Input
                              id="onlyEmail"
                              placeholder="Preencha seu email"
                              style={{ backgroundColor: ColorPallet.pastel }}
                            />
                            <Button
                              className="btn-dark"
                              onClick={() => {
                                // @ts-ignore
                                const email = document.getElementById('onlyEmail').value;
                                if (email) {
                                  this.props.sendOnlyEmail(email);
                                }
                              }}
                            >
                              <FontAwesomeIcon icon={faChevronRight} color="white" />
                            </Button>
                          </div>
                        </li>
                      </ul>
                    </Col>
                    <Col md={12} className="d-flex align-items-center p-3">
                      <div className="m-auto">
                        <h2>OU</h2>
                      </div>
                    </Col>
                    <Col md={12}>
                      <ul>
                        <li>
                          <div className="d-flex">
                            <Button tag={Link} to="/preavaliacao" className="mr-auto ml-auto btn-light w-100">
                              <h5>Faça nosso teste online</h5>
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
          <div className="bgImg">
            <FittedImage src={Valores3} fit="cover" />
          </div>
          <div className="bgText">
            <Col md={5} className="h-100 d-flex">
              <div className="contentDiv m-auto">
                <ul>
                  <li>
                    <h2 className="titleMobile">
                      Trabalhamos direto da fábrica com os pacientes, evitando custos desnecessários.
                    </h2>
                    <div className="clear" />
                  </li>
                </ul>
              </div>
            </Col>
          </div>
        </section>
        {/*Como isso funciona*/}
        <section className="infoContainerFlex">
          <div className="d-flex">
            <h1 className="title titleMobile text-black mr-auto ml-auto mb-5">Como isso funciona?</h1>
          </div>
          {mobile ? (
            <section className="infoContainerSmall">
              <FittedImage src={Valores4} fit="cover" />
            </section>
          ) : (
            <section className="infoContainerSmall">
              <FittedImage src={Valores4} fit="contain" />
            </section>
          )}
        </section>
        {/*Ready Set Smile*/}
        <ReadySetSmile src={ReadySetSmileRight2} right={false} />
        {/*Dúvidas*/}
        <Duvidas title="Ainda tem dúvidas?" />
      </>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  sendOnlyEmail,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Valores);
