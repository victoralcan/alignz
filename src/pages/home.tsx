import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import FittedImage from 'react-fitted-image';
import Preco4 from 'content/images/pages/preco/preco4.jpg';
import Home1 from 'content/images/pages/home/home1.jpg';
import Slide1 from '../content/images/pages/home/slide1.svg';
import Slide2 from '../content/images/pages/home/slide2.svg';
import Slide3 from '../content/images/pages/home/slide3.svg';
import Comparacao from '../content/images/pages/home/comparacao.jpg';
import AparelhoXalinhador from '../content/images/pages/home/aparelhoXalinhador.png';
import SwiperPhoto, { ISlide } from '../shared/components/SwiperPhoto';

import '../styles/pages/home.css';
import { Link } from 'react-router-dom';
import Duvidas from '../shared/components/Duvidas';
import ReadySetSmile from '../shared/components/readySetSmile';
import { ColorPallet } from '../shared/model/enum/colors';

class Home extends React.Component {
  render() {
    const slidesVantagens: ISlide[] = [
      {
        photo: Slide1,
        description: 'Conveniência',
        description2: 'Tratamento quase todo feito no conforto da sua casa.',
        photoHeight: '200px',
        photoWidth: '200px',
      },
      {
        photo: Slide2,
        description: 'Acessibilidade',
        description2: 'Muito mais acessível do que os aparelhos convencionais ou os alinhadores do mercado atual.',
        photoHeight: '200px',
        photoWidth: '200px',
      },
      {
        photo: Slide3,
        description: 'Confiança',
        description2: 'Casos feitos e planejados por dentistas reais, personalizados pra você.',
        photoHeight: '200px',
        photoWidth: '200px',
      },
    ];
    const cardHeaderColor = ColorPallet.orangeOpac;
    const cardBodyColor = ColorPallet.orangeOpac2;
    return (
      <>
        {/*Conheça o Futuro*/}
        <section className="infoContainer">
          <div className="position-absolute w-100">
            <FittedImage src={Home1} style={{ height: '85vh' }} fit="cover" />
          </div>
          <div className="z-index-2 h-100">
            <div className="h-100 col-6 center-elements">
              <div className="m-auto w-50">
                <h1 className="font-weight-bold">Conheça o futuro do alinhamento dental</h1>
                <ul>
                  <li>
                    <span>
                      Apresento-lhes os alinhadores transparentes! Alinhe os seus dentes com segurança, sem bráquetes e
                      até 3x mais rápido que os tratamentos convencionais essas plaquinhas mágicas
                    </span>
                    <div className="clear" />
                  </li>
                </ul>
                <div className="d-flex">
                  <Button tag={Link} to="/chatbot" className="general-button m-auto">
                    Sou um candidato?
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Comparação alinhador aparelho*/}
        <section className="infoContainerFlex d-flex flex-column w-75 mr-auto ml-auto">
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
            <Col sm={6} md={6} lg={6} className="d-flex flex-column pr-1">
              <div className="mr-auto ml-auto">
                <FittedImage src={AparelhoXalinhador} style={{ width: '350px', height: '136px' }} className="pr-3" />
              </div>
              <Row>
                <Col sm={6} md={6} lg={6} className="d-flex justify-content-center align-items-center">
                  <Card>
                    <CardHeader style={{ backgroundColor: cardHeaderColor }}>
                      <span className="font-weight-bold">Aparelhos convencionais</span>
                    </CardHeader>
                    <CardBody style={{ backgroundColor: cardBodyColor }}>
                      <ul style={{ listStyle: 'inherit' }} className="pl-2">
                        <li>24/7 dias</li>
                        <li>365 dias/ano</li>
                        <li>Perceptível até mesmo distante</li>
                        <li>Bráquetes incômodos, podem machucar</li>
                        <li>Leva um tempo para conclusão...</li>
                      </ul>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm={6} md={6} lg={6} className="d-flex justify-content-center align-items-center">
                  <Card>
                    <CardHeader style={{ backgroundColor: cardHeaderColor }}>
                      <span className="font-weight-bold">Alinhadores transparentes</span>
                    </CardHeader>
                    <CardBody style={{ backgroundColor: cardBodyColor }}>
                      <ul style={{ listStyle: 'inherit' }} className="pl-2">
                        <li>22h por dia</li>
                        <li>Transparente, quase imperceptível</li>
                        <li>Confortável, não machuca</li>
                        <li>3x mais rápido</li>
                        <br />
                        <br />
                      </ul>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <FittedImage src={Comparacao} fit="cover" />
            </Col>
          </Row>
        </section>
        {/*Sorrir é facil como começar*/}
        <SwiperPhoto
          slides={slidesVantagens}
          title="Porque escolher alignerZ?"
          subtitle="Aqui temos 3 boas razões. Mas a real pergunta é: porque não?"
        />
        {/*Mais motivos para usar AlignerZ*/}
        <section className="infoContainerFlex d-flex flex-column w-75 mr-auto ml-auto">
          <div className="m-auto w-75">
            <h1 className="text-center big">Mais razões para usar alignerZ ao invés de bráquetes</h1>
          </div>
          <br />
          <Row>
            <Col md={6} className="h-100 border-image">
              <FittedImage fit="cover" src={Preco4} />
            </Col>
            <div className="col-6 center-elements">
              <div className="m-auto w-75">
                <h1 className="font-weight-bold">Fácil de Limpar</h1>
                <ul>
                  <li>
                    <span>
                      É só colocar embaixo de água fria e higienizar com uma escova de dentes macia. Você nem precisa
                      usar pasta de dentes pra isso
                    </span>
                    <div className="clear" />
                  </li>
                </ul>
              </div>
            </div>
          </Row>
          <Row>
            <div className="col-6 center-elements">
              <div className="m-auto w-75">
                <h1 className="font-weight-bold">Removível, fácil de colocar e tirar</h1>
                <ul>
                  <li>
                    <span>Você pode removê-los facilmente para escovar os dentes, sem alterar sua higiene bucal</span>
                    <div className="clear" />
                  </li>
                </ul>
              </div>
            </div>
            <Col md={6} className="h-100 border-image">
              <FittedImage fit="cover" src={Preco4} />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="h-100 border-image">
              <FittedImage fit="cover" src={Preco4} />
            </Col>
            <div className="col-6 center-elements">
              <div className="m-auto w-75">
                <h1 className="font-weight-bold">Coma o que quiser</h1>
                <ul>
                  <li>
                    <span>
                      Por serem removíveis, você não precisa se privar de comer suas comidas favoritas por ter medo de
                      quebrar o seu aparelho
                    </span>
                    <div className="clear" />
                  </li>
                </ul>
              </div>
            </div>
          </Row>
        </section>
        {/*Duvidas*/}
        <Duvidas />
        {/*Ready Set Smile*/}
        <ReadySetSmile />
        {/*Produto*/}
        {/*<section className="infoContainerFlex">*/}
        {/*  <Row>*/}
        {/*    <Col md={6} className="h-100 border-image">*/}
        {/*      <FittedImage fit="cover" src={Preco4} />*/}
        {/*    </Col>*/}
        {/*    <div className="col-6 center-elements">*/}
        {/*      <div className="m-auto w-75">*/}
        {/*        <h1 className="font-weight-bold">Nosso Produto</h1>*/}
        {/*        <ul>*/}
        {/*          <li>*/}
        {/*            <span>*/}
        {/*              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been*/}
        {/*              the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of*/}
        {/*              type and scrambled it to make a type specimen book. It has survived not only five centur*/}
        {/*            </span>*/}
        {/*            <div className="clear" />*/}
        {/*          </li>*/}
        {/*        </ul>*/}
        {/*        <div className="d-flex">*/}
        {/*          <Button tag={Link} to="/como-funciona" className="general-button m-auto">*/}
        {/*            Saiba mais*/}
        {/*          </Button>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </Row>*/}
        {/*</section>*/}
      </>
    );
  }
}

export default Home;
