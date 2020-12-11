import React from 'react';
import FittedImage from 'react-fitted-image';
import Preco1 from 'content/images/pages/preco/preco1.jpg';
import '../styles/pages/preco.css';
import Duvidas from '../shared/components/Duvidas';
import ReadySetSmile from '../shared/components/readySetSmile';

class Preco extends React.Component {
  render() {
    return (
      <>
        <section className="infoContainer">
          <div className="position-absolute w-100">
            <FittedImage src={Preco1} style={{ height: '85vh' }} fit="cover" />
          </div>
          <div className="z-index-2 h-100">
            <div className="h-100 col-6 center-elements pt-5">
              <div className="m-auto w-50 pt-5">
                <h1 className="font-weight-bold">Acessível para todos</h1>
                <ul>
                  <li>
                    <span>Acreditamos que você não precisa pagar uma fortuna pelo seu sorriso dos sonhos ;)</span>
                    <div className="clear" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <ReadySetSmile />
        <Duvidas />
      </>
    );
  }
}

export default Preco;
