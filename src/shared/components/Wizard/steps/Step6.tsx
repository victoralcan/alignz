import React from 'react';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';

interface IStep6Props extends StateProps, DispatchProps {}

interface IStep6State {}

class Step6 extends React.Component<IStep6Props, IStep6State> {
  handleSubmit = (event, errors, values) => {
    event.preventDefault();
  };

  render() {
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

export default connect(mapStateToProps, mapDispatchToProps)(Step6);
