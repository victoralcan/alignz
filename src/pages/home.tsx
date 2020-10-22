import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Input, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import FittedImage from 'react-fitted-image';

import Home3 from 'content/images/pages/home/home3.jpg';
import Preco4 from 'content/images/pages/preco/preco4.jpg';
import Agenda1 from 'content/images/agenda1.png';
import Home2 from 'content/images/pages/home/home2.png';
import Swipe1 from '../content/images/pages/home/swipe1.gif';
import Swipe2 from '../content/images/pages/home/swipe2.gif';
import Swipe3 from '../content/images/pages/home/swipe3.gif';
import Video1 from '../content/images/pages/home/video1.jpg';

import Depoimentos from '../shared/components/Depoimentos';
import Duvidas from '../shared/components/Duvidas';
import SwiperPhoto, { ISlide } from '../shared/components/SwiperPhoto';
import VideoModal from '../shared/components/VideoModal';
import { ColorPallet } from '../shared/model/enum/colors';

import '../styles/pages/home.css';

class Home extends React.Component {
  render() {
    const slides: ISlide[] = [
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
    const backgroundColor = ColorPallet.white;
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
                <h1 className="font-weight-bold">Seu sorriso é unico</h1>
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
            <Col md={6} className="h-100 border-image">
              <FittedImage fit="cover" src={Preco4} />
            </Col>
            <Col className="d-flex justify-content-center align-items-center border-image h-75 mt-auto mb-auto" md={6}>
              <Card style={{ backgroundColor, margin: '0px 100px 0px 100px' }}>
                <CardHeader style={{ backgroundColor }} className="text-center border-0">
                  <h1 className="font-weight-bold">Moderno e acessível</h1>
                  <br />
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
        {/*Sorrir é facil como começar*/}
        <SwiperPhoto slides={slides} title="Sorrir é fácil" subtitle="Como começar" />
        {/*O que está incluso*/}
        <section className="infoContainer">
          <Row className="h-100">
            <Col md={6} className="h-100 d-flex justify-content-center" style={{}}>
              <div className="h-100 justify-content-center align-items-center d-flex">
                <div>
                  <h1 className="font-weight-bold">aparelho invisível</h1>
                  <ul className="d-flex flex-column">
                    <li className="mr-auto ml-auto">
                      <p>alinhadores transparentes que</p>
                    </li>
                    <li className="mr-auto ml-auto">
                      <p>movimentam seus dentes por fases,</p>
                    </li>
                    <li className="mr-auto ml-auto">
                      <p>com resultados em cerca de 6 meses</p>
                    </li>
                  </ul>
                  <div className="d-flex">
                    <Button tag={Link} to="/aparelho-invisivel" className="general-button m-auto">
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="d-flex h-100 align-items-center" md={6}>
              <div className="w-100 h-100" id="preco2-photo">
                <FittedImage fit="cover" src={Home3} />
              </div>
            </Col>
          </Row>
        </section>
        {/*Video*/}
        <VideoModal videoId="0xyxtzD54rM" photo={Video1} />
        {/*Agende ja*/}
        <section className="infoContainerBig">
          <Row className="h-100">
            <Col className="d-flex align-items-center" md={6}>
              <div id="sorriso-alegre" className="w-100 h-75">
                <h1 className="font-weight-bold">Seu sorriso é unico</h1>
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
