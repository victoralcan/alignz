import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Input, Row } from 'reactstrap';
import FittedImage from 'react-fitted-image';
import Slider from 'react-slick';
import Preco1 from 'content/images/pages/preco/preco1.jpg';
import Preco2 from 'content/images/pages/preco/preco2.png';
import '../styles/pages/preco.css';

function Preco() {
  const backgroundColor = '#fee0cc';
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    initialSlide: 0,
    autoplay: true,
    adaptiveHeight: true,
  };
  return (
    <>
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
      <section className="infoContainer">
        <Row className="h-100">
          <Col md={6} className="h-100">
            <div id="left-side-box" className="h-100">
              <h1 className="font-weight-bold">O que está incluso?</h1>
              <h2>nosso tratamento já vem com tudo para te fazer sorrir</h2>
              <ul>
                <li>
                  <p>Exames da avaliação</p>
                </li>
                <li>
                  <p>Exames da avaliação</p>
                </li>
                <li>
                  <p>Exames da avaliação</p>
                </li>
                <li>
                  <p>Exames da avaliação</p>
                </li>
                <li>
                  <p>Exames da avaliação</p>
                </li>
                <li>
                  <p>Exames da avaliação</p>
                </li>
              </ul>
              <Button className="general-button">Agendar Avaliação</Button>
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
      <section className="infoContainerSmall">
        <div className="w-100 h-100">
          <Row className="d-flex h-25">
            <h1 className="m-auto">Sorrisos tem muito a dizer</h1>
          </Row>
          <br />
          <Row className="h-50">
            <Slider {...settings} className="w-100 h-75">
              <div className="h-100 d-flex align-items-center depoimento">
                <p>Foi um dos melhores investimentos que fiz, indico pra todos.</p>
                <h4>Nicole R.</h4>
              </div>
              <div className="h-100 d-flex align-items-center depoimento">
                <p>Adorei minha expericência com o aparelho. Não sinto mais medo de sorrir!</p>
                <h4>Laura A.</h4>
              </div>
            </Slider>
          </Row>
          <Row className="d-flex">
            <Button className="general-button m-auto">Depoimentos</Button>
          </Row>
        </div>
      </section>
    </>
  );
}

export default Preco;
