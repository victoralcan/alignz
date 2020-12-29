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

interface IStep7Props extends StateProps, DispatchProps {}

interface IStep7State {
  frase: ISelectOption;
}

class Step7 extends React.Component<IStep7Props, IStep7State> {
  constructor(props) {
    super(props);
    this.state = {
      frase: { label: '', value: '' },
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

  render() {
    const frases = [
      { value: '0', label: 'Tenho implante' },
      { value: '1', label: 'Perdi um dente' },
      { value: '2', label: 'Uso prótese' },
      { value: '3', label: 'Nenhuma das anteriores' },
    ];
    return (
      <>
        <div className="form-wizard-content">
          <AvForm onSubmit={this.handleSubmit} model={{}}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Step7);
