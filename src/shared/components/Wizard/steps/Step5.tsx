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

interface IStep5Props extends StateProps, DispatchProps {}

interface IStep5State {
  espacamento: ISelectOption;
}

class Step5 extends React.Component<IStep5Props, IStep5State> {
  constructor(props) {
    super(props);
    this.state = {
      espacamento: { label: '', value: '' },
    };
  }

  handleSubmit = (event, errors, values) => {
    event.preventDefault();
  };

  setEspacamento = (espacamento) => {
    if (espacamento) {
      this.setState({
        espacamento,
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

export default connect(mapStateToProps, mapDispatchToProps)(Step5);
