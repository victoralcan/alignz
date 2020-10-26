import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import FittedImage from 'react-fitted-image';
import Preco4 from 'content/images/pages/preco/preco4.jpg';
import Home2 from 'content/images/pages/home/home2.png';
import Swipe1 from '../content/images/pages/home/swipe1.gif';
import Swipe2 from '../content/images/pages/home/swipe2.gif';
import Swipe3 from '../content/images/pages/home/swipe3.gif';

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
                <h1 className="font-weight-bold">Escolha seu sorriso.</h1>
                <ul>
                  <li>
                    <span>
                      Seu sorriso é uma ferramenta poderosa quando se trata de mudar sua mente e corpo. Este pequeno
                      espaço de orelha a orelha oferece muito controle. Continue lendo para saber como você pode
                      controlar o que está sentindo escolhendo sorrir.
                    </span>
                    <div className="clear" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*Beneficios de sorrir*/}
        <section className="infoContainerFlex">
          <Row>
            <Col md={6} className="h-100 border-image">
              <FittedImage fit="cover" src={Preco4} />
            </Col>
            <div className="col-6 center-elements">
              <div className="m-auto w-75">
                <h1 className="font-weight-bold">Mais sorrisos = mais felicidade</h1>
                <ul>
                  <li>
                    <span>
                      Seu humor está diretamente relacionado às suas ações. Quanto mais você flexiona os músculos do
                      sorriso, mais substâncias químicas seu cérebro libera e mais feliz você fica.
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
                <h1 className="font-weight-bold">Mais sorrisos = mais felicidade</h1>
                <ul>
                  <li>
                    <span>
                      Seu humor está diretamente relacionado às suas ações. Quanto mais você flexiona os músculos do
                      sorriso, mais substâncias químicas seu cérebro libera e mais feliz você fica.
                    </span>
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
                <h1 className="font-weight-bold">Mais sorrisos = mais felicidade</h1>
                <ul>
                  <li>
                    <span>
                      Seu humor está diretamente relacionado às suas ações. Quanto mais você flexiona os músculos do
                      sorriso, mais substâncias químicas seu cérebro libera e mais feliz você fica.
                    </span>
                    <div className="clear" />
                  </li>
                </ul>
              </div>
            </div>
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
