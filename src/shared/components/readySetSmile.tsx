import React from 'react';
import { Button } from 'reactstrap';
import ReadySetSmileImg from '../../content/images/readySetSmile.png';
import FittedImage from 'react-fitted-image';
import { Link } from 'react-router-dom';

function ReadySetSmile() {
  return (
    <section className="infoContainer">
      <div className="position-absolute">
        <FittedImage src={ReadySetSmileImg} fit="cover" />
      </div>
      <div className="z-index-2 h-100">
        <div className="h-100 col-6 center-elements">
          <div className="m-auto w-50">
            <h1 className="font-weight-bold">Escolha sorrir.</h1>
            <ul>
              <li>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially uncha
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
