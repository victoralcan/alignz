import React from 'react';
import { Col, Row } from 'reactstrap';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';

export interface IStep2Props extends StateProps, DispatchProps {}

export interface IStep2State {}

class Step2 extends React.Component<IStep2Props, IStep2State> {
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
                <AvField
                  label="Passo2"
                  name="name"
                  id="name"
                  placeholder="Seu Nome"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: 'O nome é obrigatório!',
                    },
                    pattern: {
                      value: /^\d+$/,
                      errorMessage: 'Você utilizou caractéres inválidos!',
                    },
                    maxLength: {
                      value: 44,
                    },
                  }}
                />
              </Col>
              <Col md={6}>
                <AvField
                  label="Sobrenome"
                  name="sobrenome"
                  id="sobrenome"
                  placeholder="Seu Sobrenome"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: 'O sobrenome é obrigatório!',
                    },
                    pattern: {
                      value: /^\w+$/,
                      errorMessage: 'Você utilizou caractéres inválidos!',
                    },
                  }}
                />
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
