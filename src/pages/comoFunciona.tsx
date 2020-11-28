import React from 'react';
import ChooseSmile from '../content/images/pages/como-funciona/choose-smile.png';
import { Col, Row } from 'reactstrap';
import Preco4 from '../content/images/pages/preco/preco4.jpg';
import Passo1 from '../content/images/pages/como-funciona/passo1.png';
import Duvidas from '../shared/components/Duvidas';
import FittedImage from 'react-fitted-image';
import ReadySetSmile from '../shared/components/readySetSmile';

function ComoFunciona() {
  return (
    <>
      {/*Escolha Sorrir*/}
      <section className="infoContainer mb-0">
        <div className="position-absolute">
          <FittedImage src={ChooseSmile} fit="cover" />
        </div>
        <div className="z-index-2 h-100">
          <div className="h-100 col-6 center-elements">
            <div className="m-auto w-50">
              <h1 className="font-weight-bold">Escolha sorrir.</h1>
              <ul>
                <li>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially uncha
                  </span>
                  <div className="clear" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*Beneficios*/}
      <section className="infoContainerFlex d-flex flex-column w-75 mr-auto ml-auto">
        <Row>
          <Col md={6} className="h-100">
            <FittedImage fit="cover" src={Preco4} />
          </Col>
          <div className="col-6 center-elements">
            <div className="m-auto w-75">
              <h1 className="font-weight-bold">Fácil de Limpar</h1>
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
              <h1 className="font-weight-bold">Fácil de colocar e retirar</h1>
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
          <Col md={6} className="h-100">
            <FittedImage fit="cover" src={Preco4} />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="h-100">
            <FittedImage fit="cover" src={Preco4} />
          </Col>
          <div className="col-6 center-elements">
            <div className="m-auto w-75">
              <h1 className="font-weight-bold">Coma o que quiser</h1>
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
      {/*Sorria em 3 passos*/}
      <section className="infoContainerFlex d-flex flex-column w-75 mr-auto ml-auto">
        <div className="w-50">
          <h6>Como funciona</h6>
          <h1>Sorria em três passos.</h1>
        </div>
        <br />
        <Row>
          <div className="col-7 border-image">
            <FittedImage fit="cover" src={Passo1} />
          </div>
          <div className="col-5 center-elements">
            <div className="m-auto w-75">
              <h1 className="font-weight-bold">Fácil de Limpar</h1>
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
          <div className="col-5 center-elements">
            <div className="m-auto w-75">
              <h1 className="font-weight-bold">Fácil de Limpar</h1>
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
          <div className="col-7 border-image">
            <FittedImage fit="cover" src={Passo1} />
          </div>
        </Row>
        <Row>
          <div className="col-7 border-image">
            <FittedImage fit="cover" src={Passo1} />
          </div>
          <div className="col-5 center-elements">
            <div className="m-auto w-75">
              <h1 className="font-weight-bold">Fácil de Limpar</h1>
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
      {/*Duvidas*/}
      <Duvidas />
      {/*Ready Set Smile*/}
      <ReadySetSmile />
    </>
  );
}

export default ComoFunciona;
