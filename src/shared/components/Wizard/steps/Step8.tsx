import React from 'react';
import { Col, Row } from 'reactstrap';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';

export interface IStep8Props extends StateProps, DispatchProps {}

export interface IStep8State {}

class Step8 extends React.Component<IStep8Props, IStep8State> {
  handleSubmit = (event, errors, values) => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <div className="form-wizard-content">
          <AvForm onSubmit={this.handleSubmit} model={{}}>
            <Row form>
              <Col xs={12}>
                <AvField
                  className="w-50"
                  label="Nome"
                  name="name"
                  id="name"
                  placeholder="Seu Nome"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: 'O nome é obrigatório!',
                    },
                    pattern: {
                      value: /^[\w À-ÖØ-öø-ÿ]{2,250}$/,
                      errorMessage: 'Você utilizou caractéres inválidos!',
                    },
                    maxLength: {
                      value: 44,
                    },
                  }}
                />
              </Col>
              <Col xs={12}>
                <AvField
                  className="w-50"
                  label="E-mail"
                  name="email"
                  id="email"
                  placeholder="Seu E-mail"
                  type="email"
                  errorMessage="Email incorreto!"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: 'O email é obrigatório!',
                    },
                  }}
                />
              </Col>
              <Col xs={4}>
                <AvField
                  label="Telefone"
                  name="telefone"
                  id="telefone"
                  placeholder="Seu Telefone"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: 'O telefone é obrigatório!',
                    },
                    pattern: {
                      value: /^\d+$/,
                      errorMessage: 'Você utilizou caractéres inválidos!',
                    },
                  }}
                />
              </Col>
              <Col xs={4}>
                <AvField
                  label="CEP"
                  name="cep"
                  id="cep"
                  placeholder="Seu CEP"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: 'O CEP é obrigatório!',
                    },
                  }}
                />
              </Col>
              <Col xs={4}>
                <AvField
                  label="Idade"
                  name="idade"
                  id="idade"
                  placeholder="Sua Idade"
                  errorMessage="Idade incorreta!"
                  validate={{
                    required: {
                      value: true,
                      errorMessage: 'A idade é obrigatória!',
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

export default connect(mapStateToProps, mapDispatchToProps)(Step8);
