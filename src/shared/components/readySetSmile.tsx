import React from 'react';
import { Button } from 'reactstrap';
import ReadySetSmileImg from '../../content/images/readySetSmile.png';
import FittedImage from 'react-fitted-image';
import { Link } from 'react-router-dom';

interface IReadySetSmileProps {
  right?: boolean;
}

function ReadySetSmile(props: IReadySetSmileProps) {
  return (
    <section className="infoContainer">
      <div className="position-absolute" style={{ height: '85vh' }}>
        <FittedImage src={ReadySetSmileImg} fit="cover" />
      </div>
      <div className="z-index-2 h-100">
        <div className="h-100 col-6 center-elements">
          <div className="m-auto w-50">
            <h1 className="font-weight-bold">Preparar. Apontar. Sorria!</h1>
            <ul>
              <li>
                <span>
                  Faça nosso teste online e veja se você é um candidato(a) a utilizar os alinhadores transparentes
                </span>
                <div className="clear" />
              </li>
            </ul>
            <div className="d-flex">
              <Button tag={Link} to="/chatbot" className="general-button m-auto">
                Sou um candidato?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReadySetSmile;
