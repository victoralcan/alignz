import React from 'react';
import { Col, FormGroup, Label, Row } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
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
}

class Step2 extends React.Component<IStep2Props, IStep2State> {
  constructor(props) {
    super(props);
    this.state = {
      motivacao: { label: '', value: '' },
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

  render() {
    const motivacoes = [
      { value: '0', label: 'Melhorar a apresentação pessoal' },
      { value: '1', label: 'Tenho um evento importante (casamento, formatura, etc)' },
      { value: '2', label: 'Quero melhorar minha auto-estima' },
      { value: '3', label: 'Outro' },
    ];
    return (
      <>
        <div className="form-wizard-content">
          <AvForm onSubmit={this.handleSubmit} model={{}}>
            <Row form>
              <Col xs={12}>
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
