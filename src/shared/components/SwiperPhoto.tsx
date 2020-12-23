import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import FittedImage from 'react-fitted-image';

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

class SwiperPhoto extends React.Component<ISwiperPhotoProps> {
  render() {
    const { slides, title, subtitle } = this.props;
    return (
      <section id="tratamento-section" className="infoContainerFlex">
        <div className="tratamento-content">
          <div className="tratamento-title">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
          </div>
          <div className="cards-container">
            <Swiper spaceBetween={120} slidesPerView={3}>
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
                      {slide.description2 ? <h6 className="font-weight-light">{slide.description2}</h6> : ''}
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
