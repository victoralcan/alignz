import React from 'react';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import Select from 'react-select';

interface ISelectOption {
  label: string;
  value: string;
}

interface IStep3Props extends StateProps, DispatchProps {}

interface IStep3State {
  frase: ISelectOption;
  tempo: ISelectOption;
}

class Step3 extends React.Component<IStep3Props, IStep3State> {
  constructor(props) {
    super(props);
    this.state = {
      frase: { label: '', value: '' },
      tempo: { label: '', value: '' },
    };
  }

  handleSubmit = (event, errors, values) => {
    event.preventDefault();
  };

  setFrase = (frase) => {
    if (frase) {
      this.setState({
        frase,
      });
    }
  };

  setTempo = (tempo) => {
    if (tempo) {
      this.setState({
        tempo,
      });
    }
  };

  render() {
    const frases = [
      { value: '0', label: 'Tenho implante' },
      { value: '1', label: 'Perdi um dente' },
      { value: '2', label: 'Uso prótese' },
      { value: '3', label: 'Nenhuma das anteriores' },
    ];
    const tempos = [
      { value: '0', label: 'Imediatamente' },
      { value: '1', label: 'Em semanas' },
      { value: '2', label: 'Em alguns meses' },
      { value: '3', label: 'Sem pressa' },
    ];
    return (
      <>
        <div className="form-wizard-content">
          <AvForm onSubmit={this.handleSubmit} model={{}}>
            <Row form>
              <Col md={6}>
                <FormGroup tag="fieldset">
                  <Label>Como é sua mordida?</Label>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" /> Cruzada (dentes inferiores em cima dos superiores)
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" /> Profunda (dentes superiores cobrem quase todos os inferiores)
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" /> Aberta (dentes superiores e inferiores não se tocam)
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio1" /> Nenhuma
                    </Label>
                  </FormGroup>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="frases">Alguma dessas frases se aplica a você?</Label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    id="frases"
                    name="frases"
                    options={frases.map((motivacao, i) => ({
                      ...motivacao,
                      key: i,
                    }))}
                    onChange={this.setFrase}
                    value={this.state.frase}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="tempos">Em quanto tempo você deseja começar?</Label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    id="tempos"
                    name="tempos"
                    options={tempos.map((motivacao, i) => ({
                      ...motivacao,
                      key: i,
                    }))}
                    placeholder="Escolha uma opção"
                    onChange={this.setTempo}
                    value={this.state.tempo}
                  />
                </FormGroup>
              </Col>
            </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(Step3);
