import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import FittedImage from 'react-fitted-image';
import Motivo1 from 'content/images/pages/home/motivo1.png';
import Motivo2 from 'content/images/pages/home/motivo2.png';
import Motivo3 from 'content/images/pages/home/motivo3.png';
import Comparando from 'content/images/pages/home/imagemcomparando.png';
import Home1 from 'content/images/pages/home/home1.png';
import Slide1 from '../content/images/pages/home/slide1.jpg';
import Slide2 from '../content/images/pages/home/slide2.jpg';
import Slide3 from '../content/images/pages/home/slide3.jpg';
import Comparacao from '../content/images/pages/home/comparacao.jpg';
import SwiperPhoto, { ISlide } from '../shared/components/SwiperPhoto';
import ReadySetSmileImgRight from '../content/images/readySetSmileRight.png';

import '../styles/pages/home.scss';
import { Link } from 'react-router-dom';
import Duvidas from '../shared/components/Duvidas';
import ReadySetSmile from '../shared/components/readySetSmile';
import { reset as resetHeader } from '../shared/components/header/header.reducer';
import { reset as resetFooter } from '../shared/components/footer/footer.reducer';
import { connect } from 'react-redux';

interface IHomeProps extends StateProps, DispatchProps {}

class Home extends React.Component<IHomeProps> {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.props.resetHeader();
    this.props.resetFooter();
  }

  render() {
    const content = document.getElementById('root');
    const contentWidth = content ? content.clientWidth : 1024;
    const mobile = contentWidth <= 992;
    const slidesVantagens: ISlide[] = [
      {
        photo: Slide1,
        description: 'Conveniência',
        description2: 'Tratamento quase todo feito no conforto da sua casa.',
        photoHeight: '300px',
        photoWidth: '300px',
      },
      {
        photo: Slide2,
        description: 'Acessibilidade',
        description2: 'Muito mais acessível do que os aparelhos convencionais ou os alinhadores do mercado atual.',
        photoHeight: '300px',
        photoWidth: '300px',
      },
      {
        photo: Slide3,
        description: 'Confiança',
        description2: 'Casos feitos e planejados por dentistas reais, personalizados pra você.',
        photoHeight: '300px',
        photoWidth: '300px',
      },
    ];
    return (
      <>
        {/*Conheça o Futuro*/}
        <section className="infoContainer">
          <div className="bgImg">
            <FittedImage src={Home1} fit="cover" />
          </div>
          <div className="bgText">
            <Row>
              <Col xs={12} md={5} className="contentDiv pt-5">
                <div>
                  <h1 className="title titleMobile">Conheça o futuro do alinhamento dental</h1>
                  <h4>
                    Apresento-lhes os alinhadores transparentes! Alinhe os seus dentes com segurança, sem bráquetes e
                    até 3x mais rápido que os tratamentos convencionais com essas plaquinhas mágicas
                  </h4>
                  <div className="clear" />
                  <div>
                    <Button tag={Link} to="/preavaliacao" className="general-button">
                      Sou um candidato?
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        {/*Comparação alinhador aparelho*/}
        <section>
          <div className="infoContainerFlex d-flex flex-column mr-auto ml-auto comparacao">
            <div className="info-container-header">
              <h1 className="title titleMobile">Comparativo</h1>
              <br />
              <h4>
                Você sabe a diferença entre os aparelhos convencionais e os alinhadores? Veja o quadro e escolha o que
                melhor se encaixa pra você.
              </h4>
            </div>

            <Row className="m-auto justify-content-center">
              <Col sm={6} md={6} lg={6} className="d-flex flex-column">
                <FittedImage src={Comparando} fit="cover" />
              </Col>
              <Col sm={6} md={6} lg={6}>
                <div className="h-75 pt-5 mt-5">
                  <FittedImage src={Comparacao} fit="cover" />
                </div>
                <div className="d-flex pt-5">
                  <Button tag={Link} to="/preavaliacao" className="general-button m-auto">
                    Sou um candidato?
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        {/*Sorrir é facil como começar*/}
        <SwiperPhoto
          slides={slidesVantagens}
          title="Porque escolher alignerZ?"
          subtitle="Aqui temos 3 boas razões. Mas a real pergunta é: porque não?"
        />
        {/*Mais motivos para usar AlignerZ*/}
        <section className="infoContainerFlex d-flex flex-column mr-auto ml-auto">
          <div className="mais-razoes">
            <div className="w-75 m-auto">
              <h1 className="text-center display-4 title titleMobile">
                Mais razões para usar alignerZ ao invés de bráquetes
              </h1>
            </div>
            <br />
            <Row>
              <Col md={6}>
                <FittedImage fit="cover" src={Motivo1} />
              </Col>
              <div className="col-md-6 col-sm-12 d-flex">
                <div className="m-auto w-75 info-razao">
                  <h2 className="font-weight-bold">Fácil de Limpar</h2>
                  <div>
                    <p>
                      É só colocar embaixo de água fria e higienizar com uma escova de dentes macia. Você nem precisa
                      usar pasta de dentes pra isso.
                    </p>
                    <div className="clear" />
                  </div>
                </div>
              </div>
            </Row>
            <Row>
              {mobile ? (
                <>
                  <Col md={6}>
                    <FittedImage fit="cover" src={Motivo2} />
                  </Col>
                  <div className="col-md-6 col-sm-12 d-flex">
                    <div className="m-auto w-75 info-razao">
                      <h2 className="font-weight-bold">Removível, fácil de colocar e tirar</h2>
                      <div>
                        <p>Você pode removê-los facilmente para escovar os dentes, sem alterar sua higiene bucal</p>
                        <div className="clear" />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-6 d-flex">
                    <div className="m-auto w-75">
                      <h2 className="font-weight-bold">Removível, fácil de colocar e tirar</h2>
                      <ul>
                        <li>
                          <span>
                            Você pode removê-los facilmente para escovar os dentes, sem alterar sua higiene bucal
                          </span>
                          <div className="clear" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Col md={6}>
                    <FittedImage fit="cover" src={Motivo2} />
                  </Col>
                </>
              )}
            </Row>
            <Row>
              <Col md={6}>
                <FittedImage fit="cover" src={Motivo3} />
              </Col>
              <div className="col-md-6 col-sm-12 d-flex">
                <div className="m-auto w-75 info-razao">
                  <h2 className="font-weight-bold">Coma o que quiser</h2>
                  <div>
                    <p>
                      Por serem removíveis, você não precisa se privar de comer suas comidas favoritas por ter medo de
                      quebrar o seu aparelho.
                    </p>
                    <div className="clear" />
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </section>
        {/*Duvidas*/}
        <Duvidas />
        {/*Ready Set Smile*/}
        <ReadySetSmile src={ReadySetSmileImgRight} right={true} />
        {/*Produto*/}
        {/*<section className="infoContainerFlex">*/}
        {/*  <Row>*/}
        {/*    <Col md={6} className="h-100 border-image">*/}
        {/*      <FittedImage fit="cover" src={Preco4} />*/}
        {/*    </Col>*/}
        {/*    <div className="col-6 d-flex">*/}
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

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  resetHeader,
  resetFooter,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
