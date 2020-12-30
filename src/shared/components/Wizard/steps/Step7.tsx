import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import { setFrase } from 'pages/preavaliacao/preavaliacao.reducer';

interface ISelectOption {
  label: string;
  selected: boolean;
}

interface IStep7Props extends StateProps, DispatchProps {}

interface IStep7State {
  respostas: Array<ISelectOption>;
}

class Step7 extends React.Component<IStep7Props, IStep7State> {
  constructor(props) {
    super(props);
    this.state = {
      respostas: [
        { label: 'Tenho implante', selected: false },
        { label: 'Perdi um dente', selected: false },
        { label: 'Uso prótese', selected: false },
        { label: 'Nenhum', selected: false },
      ],
    };
  }

  handleSubmit = (event, errors) => {
    const { respostas } = this.state;
    event.persist();
    if (errors.length > 0) return;
    const selected = respostas.find(resposta => resposta.selected === true);
    this.props.setFrase(selected.label);
    document.getElementById('nextStepButton').click()
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
              <Row form className="text-center m-auto-w-75">
                <Col xs={12}>
                  <h1 className="titleStep text-black mb-5">Alguma dessas frases se aplica a você?</h1>
                </Col>
                {respostas.map((resposta, index) => {
                  return (
                    <Col key={index} xs={12}>
                      <Button
                        type="submit"
                        className={`w-100 m-2 optionButton ${resposta.selected && 'selected'}`}
                        onClick={() => this.setResposta(index)}
                      >
                        <h4>{resposta.label}</h4>
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
const mapDispatchToProps = { setFrase };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Step7);
