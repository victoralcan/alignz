import React from 'react';
import { Col, Label, Row, FormGroup } from 'reactstrap';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import Select from 'react-select';

interface ISelectOption {
  label: string;
  value: string;
}

interface IStep2Props extends StateProps, DispatchProps {}

interface IStep2State {
  motivacao: ISelectOption;
  usouAparelho: ISelectOption;
  desalinhamento: ISelectOption;
  espacamento: ISelectOption;
}

class Step2 extends React.Component<IStep2Props, IStep2State> {
  constructor(props) {
    super(props);
    this.state = {
      motivacao: { label: '', value: '' },
      usouAparelho: { label: '', value: '' },
      desalinhamento: { label: '', value: '' },
      espacamento: { label: '', value: '' },
    };
  }

  handleSubmit = (event, errors, values) => {
    event.preventDefault();
  };

  setMotivacao = (motivacao) => {
    if (motivacao) {
      this.setState({
        motivacao,
      });
    }
  };

  setUsouAparelho = (usouAparelho) => {
    if (usouAparelho) {
      this.setState({
        usouAparelho,
      });
    }
  };

  setDesalinhamento = (desalinhamento) => {
    if (desalinhamento) {
      this.setState({
        desalinhamento,
      });
    }
  };

  setEspacamento = (espacamento) => {
    if (espacamento) {
      this.setState({
        espacamento,
      });
    }
  };

  render() {
    const motivacoes = [
      { value: '0', label: 'Melhorar a apresentação pessoal' },
      { value: '1', label: 'Tenho um evento importante (casamento, formatura, etc)' },
      { value: '2', label: 'Quero melhorar minha auto-estima' },
      { value: '3', label: 'Outro' },
    ];
    const niveis = [
      { value: '0', label: 'Leve' },
      { value: '1', label: 'Moderado' },
      { value: '2', label: 'Extremo' },
      { value: '3', label: 'Nenhum' },
    ];
    return (
      <>
        <div className="form-wizard-content">
          <AvForm onSubmit={this.handleSubmit} model={{}}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="motivacao">Qual sua principal motivação para melhorar seu sorriso?</Label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    id="motivacao"
                    name="motivacao"
                    options={motivacoes.map((motivacao, i) => ({
                      ...motivacao,
                      key: i,
                    }))}
                    placeholder="Escolha uma opção"
                    onChange={this.setMotivacao}
                    value={this.state.motivacao}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="usouAparelho">Você já usou aparelho?</Label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    id="usouAparelho"
                    name="usouAparelho"
                    options={[
                      { value: true, label: 'Sim' },
                      { value: false, label: 'Não' },
                    ]}
                    placeholder="Escolha uma opção"
                    onChange={this.setUsouAparelho}
                    value={this.state.usouAparelho}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="desalinhamento">Qual o nível de desalinhamento dos seus dentes?</Label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    id="desalinhamento"
                    name="desalinhamento"
                    options={niveis.map((nivel, i) => ({
                      ...nivel,
                      key: i,
                    }))}
                    onChange={this.setDesalinhamento}
                    value={this.state.desalinhamento}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="espacamento">Como é o espaçamento dos seus dentes?</Label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    id="espacamento"
                    name="espacamento"
                    options={niveis.map((nivel, i) => ({
                      ...nivel,
                      key: i,
                    }))}
                    onChange={this.setEspacamento}
                    value={this.state.espacamento}
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

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
