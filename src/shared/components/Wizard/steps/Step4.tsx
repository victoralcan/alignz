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

interface IStep4Props extends StateProps, DispatchProps {}

interface IStep4State {
  desalinhamento: ISelectOption;
}

class Step4 extends React.Component<IStep4Props, IStep4State> {
  constructor(props) {
    super(props);
    this.state = {
      desalinhamento: { label: '', value: '' },
    };
  }

  handleSubmit = (event, errors, values) => {
    event.preventDefault();
  };

  setDesalinhamento = (desalinhamento) => {
    if (desalinhamento) {
      this.setState({
        desalinhamento,
      });
    }
  };

  render() {
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

export default connect(mapStateToProps, mapDispatchToProps)(Step4);
