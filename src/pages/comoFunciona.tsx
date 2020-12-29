import React, { useEffect } from 'react';
import ChooseSmile from '../content/images/pages/como-funciona/choose-smile.png';
import { Col, Row } from 'reactstrap';
import Passo1 from '../content/images/pages/como-funciona/passo1.png';
import Passo2 from '../content/images/pages/como-funciona/passo2.png';
import Passo3 from '../content/images/pages/como-funciona/passo3.png';
import Beneficio1 from '../content/images/pages/como-funciona/beneficio1.png';
import Beneficio2 from '../content/images/pages/como-funciona/beneficio2.png';
import Beneficio3 from '../content/images/pages/como-funciona/beneficio3.png';
import SorrisoGarantido from '../content/images/pages/como-funciona/sorrisoGarantido.png';
import Duvidas from '../shared/components/Duvidas';
import FittedImage from 'react-fitted-image';
import ReadySetSmile from '../shared/components/readySetSmile';
import ReadySetSmileImgLeft from '../content/images/readySetSmileLeft.png';
import '../styles/pages/comoFunciona.scss';

function ComoFunciona() {
  const content = document.getElementById('root');
  const contentWidth = content ? content.clientWidth : 1024;
  const mobile = contentWidth <= 992;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      {/*Escolha Sorrir*/}
      <section className="infoContainer80">
        <div id="chooseSmileImg">
          <FittedImage src={ChooseSmile} fit="cover"/>
        </div>
        <div id="chooseSmileText">
          <Col xs={12} md={6} className="centerTextImg">
            <div className="m-auto-w-50">
              <h1 className="display-4 font-weight-bold">Escolha sorrir.</h1>
              <ul>
                <li>
                  <p>
                    O sorriso é uma poderosa ferramenta na nossa vida. Esse pequeno espaço de orelha a orelha pode te
                    trazer muita confiança. Continue rolando e saiba como você pode mudar completamente a forma que você
                    se vê quando você escolhe sorrir :)
                  </p>
                  <div className="clear" />
                </li>
              </ul>
            </div>
          </Col>
        </div>
      </section>
      {/*Beneficios*/}
      <section className="infoContainerFlex w-60-flex">
        <Row>
          <Col md={6} className="h-100">
            <FittedImage fit="cover" src={Beneficio1} />
          </Col>
          <Col md={6} className="center-elements">
            <div className="m-auto-w-75">
              <ul>
                <li>
                  <h2 className="titleMobile">Hormônios da felicidade</h2>
                  <br />
                </li>
                <li>
                  <p>
                    Sorrir libera dopamina, endorfinas e serotonina em seu cérebro. Essas substâncias atuam como um
                    analgésico natural e elevam o humor, que, consequentemente, melhora seu bem-estar de forma geral.
                  </p>
                  <div className="clear" />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          {mobile ? (
            <>
              <Col md={6} className="h-100">
                <FittedImage fit="cover" src={Beneficio2} />
              </Col>
              <Col md={6} className="center-elements">
                <div className="m-auto-w-75">
                  <ul>
                    <li>
                      <h2 className="titleMobile">Exercício do bom humor</h2>
                      <br />
                    </li>
                    <li>
                      <p>
                        O seu humor está diretamente relacionado às suas ações. Quanto mais você flexiona os músculos do
                        sorriso, mais substâncias químicas seu cérebro libera e mais feliz você fica.
                      </p>
                      <div className="clear" />
                    </li>
                  </ul>
                </div>
              </Col>
            </>
          ) : (
            <>
              <Col md={6} className="center-elements">
                <div className="m-auto-w-75">
                  <ul>
                    <li>
                      <h2 className="titleMobile">Exercício do bom humor</h2>
                      <br />
                    </li>
                    <li>
                      <p>
                        O seu humor está diretamente relacionado às suas ações. Quanto mais você flexiona os músculos do
                        sorriso, mais substâncias químicas seu cérebro libera e mais feliz você fica.
                      </p>
                      <div className="clear" />
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={6} className="h-100">
                <FittedImage fit="cover" src={Beneficio2} />
              </Col>
            </>
          )}
        </Row>
        <Row>
          <Col md={6} className="h-100">
            <FittedImage fit="cover" src={Beneficio3} />
          </Col>
          <Col md={6} className="center-elements">
            <div className="m-auto-w-75">
              <ul>
                <li>
                  <h2 className="titleMobile">Otimismo nas alturas</h2>
                  <br />
                </li>
                <li>
                  <p>
                    Sorrir por 30 segundos algumas vezes ao dia mantém você animado e com energia, ajuda a evitar o
                    esgotamento psicológico e garante que sua perspectiva permaneça positiva. O sorriso realmente é uma
                    pequena coisa capaz de mudar todo um universo.
                  </p>
                  <div className="clear" />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </section>
      {/*Sorria em 3 passos*/}
      <section className="infoContainerFlex w-75-flex">
        <div>
          <h1 className="font-weight-bold title pr-5 pl-5">3 SIMPLES PASSOS PARA A MUDANÇA</h1>
        </div>
        <br/>
        <Row className="pb-5 mb-5 pr-5 pl-5">
          <Col md={7} className="border-image">
            <FittedImage fit="cover" src={Passo1}/>
          </Col>
          <Col md={5} className="center-elements">
            <div className="m-auto w-75">
              <h1 className="font-weight-bold text-black">Primeiro, as imagens</h1>
              <ul>
                <li>
                  <p>
                    Para começar, você pode visitar nosso espaço AlignerZ físico para fazer o escaneamento dos seus
                    dentes e tirar algumas fotos para registro.
                  </p>
                  <div className="clear"/>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="pb-5 mb-5 pr-5 pl-5">
          {mobile ? (
            <>
              <Col md={7} className="border-image">
                <FittedImage fit="cover" src={Passo2}/>
              </Col>
              <Col md={5} className="center-elements">
                <div className="m-auto w-75">
                  <h1 className="font-weight-bold text-black">Daí, vem o seu planejamento</h1>
                  <ul>
                    <li>
                      <p>
                        Fazemos uma imagem 3D do seu sorriso, que nos mostrará o que está acontecendo. Então, um de
                        nossos dentistas monta, analisa e aprova seu plano de tratamento totalmente personalizado.
                      </p>
                      <div className="clear" />
                    </li>
                  </ul>
                </div>
              </Col>
            </>
          ) : (
            <>
              <Col md={5} className="center-elements">
                <div className="m-auto w-75">
                  <h1 className="font-weight-bold text-black">Daí, vem o seu planejamento</h1>
                  <ul>
                    <li>
                      <p>
                        Fazemos uma imagem 3D do seu sorriso, que nos mostrará o que está acontecendo. Então, um de
                        nossos dentistas monta, analisa e aprova seu plano de tratamento totalmente personalizado.
                      </p>
                      <div className="clear" />
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={7} className="border-image">
                <FittedImage fit="cover" src={Passo2}/>
              </Col>
            </>
          )}
        </Row>
        <Row className="pb-5 mb-5 pr-5 pl-5">
          <Col md={7} className="border-image">
            <FittedImage fit="cover" src={Passo3}/>
          </Col>
          <Col md={5} className="center-elements">
            <div className="m-auto w-75">
              <h1 className="font-weight-bold text-black">E então, você pode começar sua jornada!</h1>
              <ul>
                <li>
                  <p>
                    Compartilhamos uma prévia da transformação de sorriso e, com a sua aprovação, criamos seus
                    alinhadores personalizados. Pode ser que você complete sua jornada em menos de 6 meses, acredita?
                  </p>
                  <div className="clear" />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </section>
      {/*Sorriso Garantido*/}
      {mobile ? (
        <section style={{ height: '22vh', marginBottom: '10vh' }}>
          <FittedImage src={SorrisoGarantido} fit="cover" />
        </section>
      ) : (
        <section className="infoContainerFlex">
          <FittedImage src={SorrisoGarantido} fit="cover" />
        </section>
      )}
      {/*Duvidas*/}
      <Duvidas title="Ainda tem dúvidas?" />
      {/*Ready Set Smile*/}
      <ReadySetSmile src={ReadySetSmileImgLeft} right={false} />
    </>
  );
}

export default ComoFunciona;
