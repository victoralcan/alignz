import React from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import FittedImage from 'react-fitted-image';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

export interface ISlide {
  photo: TexImageSource | string;
  description: string;
  description2?: string;
  photoHeight?: string;
  photoWidth?: string;
}

interface ISwiperPhotoProps {
  slides: ISlide[];
  title: string;
  subtitle: string;
}

SwiperCore.use([Navigation, Pagination]);

class SwiperPhoto extends React.Component<ISwiperPhotoProps> {
  render() {
    const { slides, title, subtitle } = this.props;
    return (
      <section id="tratamento-section" className="infoContainerFlex">
        <div className="tratamento-content">
          <div className="tratamento-title info-container-header">
            <h1 className="display-4 title titleMobile">{title}</h1>
            <br />
            <h3>{subtitle}</h3>
          </div>
          <div className="cards-container">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                600: {
                  width: 600,
                  slidesPerView: 3,
                  spaceBetween: 120,
                },
                900: {
                  width: 800,
                  slidesPerView: 3,
                  spaceBetween: 70,
                },
                1200: {
                  width: 1000,
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1300: {
                  width: 1100,
                  slidesPerView: 3,
                  spaceBetween: 70,
                },
                1600: {
                  width: 1300,
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1800: {
                  width: 1500,
                  slidesPerView: 3,
                  spaceBetween: 120,
                },
              }}
            >
              {slides.map((slide, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="tratamento-card">
                      <FittedImage
                        fit="cover"
                        src={slide.photo}
                        style={
                          slide.photoHeight
                            ? {
                                height: slide.photoHeight,
                                width: slide.photoWidth,
                                borderRadius: '20px',
                              }
                            : { borderRadius: '20px' }
                        }
                      />
                      <h4>{slide.description}</h4>
                      {slide.description2 ? <p>{slide.description2}</p> : ''}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    );
  }
}

export default SwiperPhoto;
