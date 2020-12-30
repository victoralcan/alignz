import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import { setMotivacao } from 'pages/preavaliacao/preavaliacao.reducer';

interface ISelectOption {
  label: string;
  selected: boolean;
}

interface IStep2Props extends StateProps, DispatchProps {}

interface IStep2State {
  motivacoes: Array<ISelectOption>;
}

class Step2 extends React.Component<IStep2Props, IStep2State> {
  constructor(props) {
    super(props);
    this.state = {
      motivacoes: [
        { label: 'Melhorar a apresentação pessoal', selected: false },
        { label: 'Tenho um evento importante', selected: false },
        { label: 'Quero melhorar minha auto-estima', selected: false },
        { label: 'Outro', selected: false },
      ],
    };
  }

  handleSubmit = (event, errors) => {
    const { motivacoes } = this.state;
    event.persist();
    if (errors.length > 0) return;
    const selected = motivacoes.find(motivacao => motivacao.selected === true);
    this.props.setMotivacao(selected.label);
    document.getElementById('nextStepButton').click()
  };

  setMotivacao = (index) => {
    const motivacoes = [...this.state.motivacoes];
    motivacoes.forEach((motivacao) => (motivacao.selected = false));
    motivacoes[index].selected = true;
    this.setState({
      motivacoes,
    });
  };

  render() {
    const { motivacoes } = this.state;
    return (
      <>
        <div className="form-wizard-content">
          <AvForm onSubmit={this.handleSubmit} model={{}}>
            <div className="bgText d-flex">
              <Row form className="text-center m-auto-w-75">
                <Col xs={12}>
                  <h1 className="titleStep text-black mb-5">Qual sua principal motivação para melhorar seu sorriso?</h1>
                </Col>
                {motivacoes.map((motivacao, index) => {
                  return (
                    <Col key={index} xs={12}>
                      <Button
                        type="submit"
                        className={`w-100 m-2 optionButton ${motivacao.selected && 'selected'}`}
                        onClick={() => this.setMotivacao(index)}
                      >
                        <h4>{motivacao.label}</h4>
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
  setMotivacao
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
