import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import FittedImage from 'react-fitted-image';

import ClareamentoBanner from 'content/images/pages/clareamento/clareamento.jpg';
import Tratamento1 from 'content/images/pages/clareamento/clareamento1.jpg';
import Tratamento2 from 'content/images/pages/clareamento/clareamento2.jpg';
import Tratamento3 from 'content/images/pages/clareamento/clareamento3.jpg';
import ClareamentoPratico from 'content/images/pages/clareamento/clareamento-pratico.jpg';
import ComboClareamento from 'content/images/pages/clareamento/combo-clareamento.jpg';
import VideoClareamento from 'content/images/pages/clareamento/video-clareamento.jpg';

import 'styles/pages/clareamento.scss';
import SwiperPhoto, { ISlide } from '../shared/components/SwiperPhoto';

function Clareamento() {
  const slides: ISlide[] = [
    {
      photo: Tratamento1,
      description: 'você recebe o kit de clareamento na primeira consulta do aparelho invisível',
    },
    {
      photo: Tratamento2,
      description: 'comece o clareamento quando quiser, reservando 21 dias seguidos para uso do gel',
    },
    {
      photo: Tratamento3,
      description: 'aplique o gel clareador na placa de alinhamento e use no período noturno ;)',
    },
  ];
  return (
    <>
      <section id="banner-section" className="infoContainer">
        <Row className="h-100">
          <Col md={6} className="h-100">
            <FittedImage fit="cover" src={ClareamentoBanner} />
          </Col>
          <Col md={6} className="h-100 content-col">
            <div className="info">
              <h1>
                combo smile: <br />
                alinhamento + clareamento
              </h1>
              <h3>
                clareie seus dentes durante <br />o tratamento de aparelho invisível!
              </h3>
              <Button className="general-button">agendar pré-avaliação</Button>
            </div>
          </Col>
        </Row>
      </section>
      <SwiperPhoto
        slides={slides}
        title="clarear é fácil"
        subtitle="veja como funciona nosso clareamento dental com gel"
      />
      <section id="video-section" className="infoContainer">
        <FittedImage fit="cover" src={VideoClareamento} />
        <div>veja como começar nosso clareamento</div>
      </section>
      <section id="detalhes-section " className="infoContainer">
        <Row>
          <Col md={6}>
            <FittedImage fit="cover" src={ClareamentoPratico} />
          </Col>
          <Col md={6}>
            <h2>dentes branquinhos com praticidade</h2>
            <h3>nosso clareamento te dará vários motivos para sorrir:</h3>
            <ul>
              <li>- feito junto com o alinhamento</li>
              <li>- gel que não causa sensibilidade</li>
              <li>- resultados duradouros</li>
              <li>- você clareia enquanto dorme, sem atrapalhar a rotina</li>
              <li>- dá para acompanhar a evolução</li>
            </ul>
            <Button className="general-button">agendar pré-avaliação</Button>
          </Col>
        </Row>
      </section>
      <section id="combo-section" className="infoContainer">
        <Row>
          <Col md={6}>
            <h2>combo smile</h2>
            <h3>alinhamento + clareamento</h3>
            <p>
              faça os dois tratamentos de uma só vez. <br />
              aplique o gel clareador na plaquinha de alinhamento <br />e conquiste seu melhor sorriso.
            </p>
            <Button className="general-button">saiba mais</Button>
          </Col>
          <Col md={6}>
            <FittedImage fit="cover" src={ComboClareamento} />
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Clareamento;
