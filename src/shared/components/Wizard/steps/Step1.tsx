import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import FittedImage from 'react-fitted-image';
import Boca from '../../../../content/images/pages/preavaliacao/boca.png';

interface IStep1Props extends StateProps, DispatchProps {}

interface IStep1State {}

class Step2 extends React.Component<IStep1Props, IStep1State> {
  render() {
    return (
      <>
        <div className="form-wizard-content">
          <div className="center-elements">
            <div className="formImage">
              <FittedImage src={Boca} fit="contain" />
            </div>
          </div>
          <h1 className="pt-4 text-center">Avaliação online</h1>
          <h1 className="pb-4 text-black text-center">de 1 minuto</h1>
          <div className="d-flex">
            <h4 className="text-center w-75 m-auto pb-5">
              Responda algumas perguntas e veja se AlignerZ é o tratamento certo pra você.
            </h4>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (store: IRootState) => ({});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
