import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import { setTempo } from 'pages/preavaliacao/preavaliacao.reducer';

interface ISelectOption {
  label: string;
  selected: boolean;
}

interface IStep8Props extends StateProps, DispatchProps {}

interface IStep8State {
  respostas: Array<ISelectOption>;
}

class Step8 extends React.Component<IStep8Props, IStep8State> {
  constructor(props) {
    super(props);
    this.state = {
      respostas: [
        { label: 'Imediatamente', selected: false },
        { label: 'Em algumas semanas', selected: false },
        { label: 'Em alguns meses', selected: false },
        { label: 'Sem pressa', selected: false },
      ],
    };
  }

  handleSubmit = (event, errors) => {
    const { respostas } = this.state;
    event.persist();
    if (errors.length > 0) return;
    const selected = respostas.find(resposta => resposta.selected === true);
    this.props.setTempo(selected.label);
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
            <div className="d-flex">
              <Row form className="text-center w-65 m-auto">
                <Col xs={12}>
                  <h3 className="mb-5">Em quanto tempo você deseja começar sua jornada?</h3>
                </Col>
                {respostas.map((resposta, index) => {
                  return (
                    <Col key={index} xs={12}>
                      <Button
                        type="submit"
                        className={`w-100 m-2 optionButton ${resposta.selected && 'selected'}`}
                        onClick={() => this.setResposta(index)}
                      >
                        <h5>{resposta.label}</h5>
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
  setTempo
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Step8);
