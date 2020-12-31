import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import Pouco from '../../../../content/images/pages/preavaliacao/espacamentoPouco.png';
import Moderado from '../../../../content/images/pages/preavaliacao/espacamentoModerado.png';
import Severo from '../../../../content/images/pages/preavaliacao/espacamentoSevero.png';
import FittedImage from 'react-fitted-image';
import { setEspacamento } from 'pages/preavaliacao/preavaliacao.reducer';

interface ISelectOption {
  label: string;
  selected: boolean;
  src: ImageData;
}

interface IStep4Props extends StateProps, DispatchProps {}

interface IStep4State {
  respostas: Array<ISelectOption>;
}

class Step4 extends React.Component<IStep4Props, IStep4State> {
  constructor(props) {
    super(props);
    this.state = {
      respostas: [
        { label: 'Pouco ou nenhum', selected: false, src: Pouco },
        { label: 'Moderado', selected: false, src: Moderado },
        { label: 'Severo', selected: false, src: Severo },
      ],
    };
  }

  handleSubmit = (event, errors) => {
    const { respostas } = this.state;
    event.persist();
    if (errors.length > 0) return;
    const selected = respostas.find((resposta) => resposta.selected === true);
    this.props.setEspacamento(selected.label);
    document.getElementById('nextStepButton').click();
  };

  setResposta = (index) => {
    const respostas = [...this.state.respostas];
    respostas.forEach((resposta) => (resposta.selected = false));
    respostas[index].selected = true;
    this.setState({
      respostas,
    });
  };

  render() {
    const { respostas } = this.state;
    return (
      <>
        <div className="form-wizard-content">
          <AvForm onSubmit={this.handleSubmit} model={{}}>
            <div className="bgText d-flex">
              <Row className="text-center m-auto-w-75">
                <Col xs={12}>
                  <h1 className="titleStep text-black mb-5">Como é o espaçamento dos seus dentes?</h1>
                </Col>
                {respostas.map((resposta, index) => {
                  return (
                    <Col key={index} xs={12} sm={6} md={4} className="center-elements mb-3">
                      <Button type="submit" className="btnImg">
                        <div
                          className={`optionImage ${resposta.selected && 'selectedImg'}`}
                          onClick={() => this.setResposta(index)}
                        >
                          <FittedImage src={resposta.src} fit="contain" />
                        </div>
                      </Button>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </AvForm>
        </div>
      </>
    );
  }
}

const mapStateToProps = (store: IRootState) => ({});
const mapDispatchToProps = {
  setEspacamento,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Step4);
