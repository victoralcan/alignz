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

interface IStep8Props extends StateProps, DispatchProps {}

interface IStep8State {
  tempo: ISelectOption;
}

class Step8 extends React.Component<IStep8Props, IStep8State> {
  constructor(props) {
    super(props);
    this.state = {
      tempo: { label: '', value: '' },
    };
  }

  handleSubmit = (event, errors, values) => {
    event.preventDefault();
  };

  setTempo = (tempo) => {
    if (tempo) {
      this.setState({
        tempo,
      });
    }
  };

  render() {
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

export default connect(mapStateToProps, mapDispatchToProps)(Step8);
