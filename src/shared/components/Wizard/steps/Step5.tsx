import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import Leve from '../../../../content/images/pages/agenda/desalinhamentoLeve.png';
import Moderado from '../../../../content/images/pages/agenda/desalinhamentoModerado.png';
import Severo from '../../../../content/images/pages/agenda/desalinhamentoSevero.png';
import FittedImage from 'react-fitted-image';

interface ISelectOption {
  label: string;
  selected: boolean;
  src: ImageData;
}

interface IStep5Props extends StateProps, DispatchProps {}

interface IStep5State {
  respostas: Array<ISelectOption>;
}

class Step5 extends React.Component<IStep5Props, IStep5State> {
  constructor(props) {
    super(props);
    this.state = {
      respostas: [
        { label: 'Leve ou nenhum', selected: false, src: Leve },
        { label: 'Moderado', selected: false, src: Moderado },
        { label: 'Severo', selected: false, src: Severo },
      ],
    };
  }

  handleSubmit = (event, errors, values) => {
    event.preventDefault();
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
            <div className="d-flex">
              <Row className="text-center w-75 m-auto">
                <Col xs={12}>
                  <h3 className="mb-5">Qual o nível de desalinhamento dos seus dentes?</h3>
                </Col>
                {respostas.map((resposta, index) => {
                  return (
                    <Col key={index} xs={12} sm={6} md={4} className="center-elements mb-3">
                      <Button type="submit" className="d-none"></Button>
                      <div
                        className={`optionImage wrapper ${resposta.selected && 'selectedImg'}`}
                        onClick={() => this.setResposta(index)}
                      >
                        <FittedImage src={resposta.src} fit="contain" />
                      </div>
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
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Step5);
