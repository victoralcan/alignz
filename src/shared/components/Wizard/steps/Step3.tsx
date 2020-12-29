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

interface IStep3Props extends StateProps, DispatchProps {}

interface IStep3State {
  usouAparelho: ISelectOption;
}

class Step3 extends React.Component<IStep3Props, IStep3State> {
  constructor(props) {
    super(props);
    this.state = {
      usouAparelho: { label: '', value: '' },
    };
  }

  handleSubmit = (event, errors, values) => {
    event.preventDefault();
  };

  setUsouAparelho = (usouAparelho) => {
    if (usouAparelho) {
      this.setState({
        usouAparelho,
      });
    }
  };

  render() {
    return (
      <>
        <div className="form-wizard-content">
          <AvForm onSubmit={this.handleSubmit} model={{}}>
            <Row form>
              <Col xs={12}>
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
