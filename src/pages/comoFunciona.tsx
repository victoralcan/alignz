import React from 'react';
import ChooseSmile from '../content/images/pages/como-funciona/choose-smile.jpg';
import { Col, Row } from 'reactstrap';
import Passo1 from '../content/images/pages/como-funciona/passo1.jpg';
import Passo2 from '../content/images/pages/como-funciona/passo2.jpg';
import Passo3 from '../content/images/pages/como-funciona/passo3.jpg';
import Beneficio1 from '../content/images/pages/como-funciona/beneficio1.jpg';
import Beneficio2 from '../content/images/pages/como-funciona/beneficio2.jpg';
import Beneficio3 from '../content/images/pages/como-funciona/beneficio3.jpg';
import Duvidas from '../shared/components/Duvidas';
import FittedImage from 'react-fitted-image';
import ReadySetSmile from '../shared/components/readySetSmile';

function ComoFunciona() {
  return (
    <>
      {/*Escolha Sorrir*/}
      <section className="infoContainer80">
        <div className="position-absolute" style={{ height: '80vh' }}>
          <FittedImage src={ChooseSmile} fit="cover" />
        </div>
        <div className="z-index-2 h-100">
          <div className="h-100 col-6 center-elements">
            <div className="m-auto w-50">
              <h1 className="font-weight-bold">Escolha sorrir.</h1>
              <ul>
                <li>
                  <span>
                    O sorriso é uma poderosa ferramenta na nossa vida. Esse pequeno espaço de orelha a orelha pode te
                    trazer muita confiança. Continue rolando e saiba como você pode mudar completamente a forma que você
                    se vê quando você escolhe sorrir :)
                  </span>
                  <div className="clear" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*Beneficios*/}
      <section className="infoContainerFlex d-flex flex-column w-60 mr-auto ml-auto">
        <Row>
          <Col md={6} className="h-100">
            <FittedImage fit="cover" src={Beneficio1} />
          </Col>
          <div className="col-6 center-elements">
            <div className="m-auto w-75">
              <ul>
                <li>
                  <span>
                    Sorrir libera dopamina, endorfinas e serotonina em seu cérebro. Essas substâncias atuam como um
                    analgésico natural e elevam o humor, que, consequentemente, melhora seu bem-estar de forma geral.
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
              <ul>
                <li>
                  <span>
                    O seu humor está diretamente relacionado às suas ações. Quanto mais você flexiona os músculos do
                    sorriso, mais substâncias químicas seu cérebro libera e mais feliz você fica.
                  </span>
                  <div className="clear" />
                </li>
              </ul>
            </div>
          </div>
          <Col md={6} className="h-100">
            <FittedImage fit="cover" src={Beneficio2} />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="h-100">
            <FittedImage fit="cover" src={Beneficio3} />
          </Col>
          <div className="col-6 center-elements">
            <div className="m-auto w-75">
              <ul>
                <li>
                  <span>
                    Sorrir por 30 segundos algumas vezes ao dia mantém você animado e com energia, ajuda a evitar o
                    esgotamento psicológico e garante que sua perspectiva permaneça positiva. O sorriso realmente é uma
                    pequena coisa capaz de mudar todo um universo.
                  </span>
                  <div className="clear" />
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </section>
      {/*Sorria em 3 passos*/}
      <section className="infoContainerFlex d-flex flex-column w-75 mr-auto ml-auto">
        <div>
          <h1>3 SIMPLES PASSOS PARA A MUDANÇA</h1>
        </div>
        <br />
        <Row>
          <div className="col-7 border-image">
            <FittedImage fit="cover" src={Passo1} />
          </div>
          <div className="col-5 center-elements">
            <div className="m-auto w-75">
              <h1 className="font-weight-bold">Primeiro, as imagens</h1>
              <ul>
                <li>
                  <span>
                    Para começar, você pode visitar nosso espaço AlignerZ físico para fazer o escaneamento dos seus
                    dentes e tirar algumas fotos para registro.
                  </span>
                  <div className="clear" />
                </li>
              </ul>
            </div>
          </div>
        </Row>
        <Row>
          <div className="col-5 center-elements">
            <div className="m-auto w-75">
              <h1 className="font-weight-bold">Daí, vem o seu planejamento</h1>
              <ul>
                <li>
                  <span>
                    Fazemos uma imagem 3D do seu sorriso, que nos mostrará o que está acontecendo. Então, um de nossos
                    dentistas monta, analisa e aprova seu plano de tratamento totalmente personalizado.
                  </span>
                  <div className="clear" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-7 border-image">
            <FittedImage fit="cover" src={Passo2} style={{ maxHeight: '555px' }} />
          </div>
        </Row>
        <Row>
          <div className="col-7 border-image">
            <FittedImage fit="cover" src={Passo3} />
          </div>
          <div className="col-5 center-elements">
            <div className="m-auto w-75">
              <h1 className="font-weight-bold">E então, você pode começar sua jornada!</h1>
              <ul>
                <li>
                  <span>
                    Compartilhamos uma prévia da transformação de sorriso e, com a sua aprovação, criamos seus
                    alinhadores personalizados. Pode ser que você complete sua jornada em menos de 6 meses, acredita?
                  </span>
                  <div className="clear" />
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </section>
      {/*Duvidas*/}
      <Duvidas title="Ainda tem dúvidas?" />
      {/*Ready Set Smile*/}
      <ReadySetSmile />
    </>
  );
}

export default ComoFunciona;
