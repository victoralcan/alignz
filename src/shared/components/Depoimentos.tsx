import React from 'react';
import { Button, Row } from 'reactstrap';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

class Depoimentos extends React.Component {
  render() {
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
      <section className="infoContainerSmall">
        <div className="w-100 h-100">
          <Row className="d-flex h-25">
            <h1 className="m-auto">Sorrisos tem muito a dizer</h1>
          </Row>
          <br />
          <Row className="h-50">
            <Slider {...settings} className="w-100 h-75">
              <div className="h-100 d-flex align-items-center flex-column">
                <p className="font-size-bigger">Foi um dos melhores investimentos que fiz, indico pra todos.</p>
                <h4 className="font-size-big">Nicole R.</h4>
              </div>
              <div className="h-100 d-flex align-items-center flex-column">
                <p className="font-size-bigger">
                  Adorei minha expericência com o aparelho. Não sinto mais medo de sorrir!
                </p>
                <h4 className="font-size-big">Laura A.</h4>
              </div>
            </Slider>
          </Row>
          <Row className="d-flex">
            <Button tag={Link} to="/depoimentos" className="general-button m-auto">
              Depoimentos
            </Button>
          </Row>
        </div>
      </section>
    );
  }
}

export default Depoimentos;
