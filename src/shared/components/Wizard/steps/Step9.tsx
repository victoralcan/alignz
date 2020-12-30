import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { IRootState } from '../../../reducers';
import { connect } from 'react-redux';
import { setPessoa } from 'pages/preavaliacao/preavaliacao.reducer';
import { IPessoa } from "../../../model/formulario.model";

export interface IStep9Props extends StateProps, DispatchProps {}

export interface IStep9State {}

class Step9 extends React.Component<IStep9Props, IStep9State> {
  handleSubmit = (event, errors, values) => {
    event.persist();
    console.log(values);
    if (errors.length > 0) return;
    const pessoa: IPessoa = {
      nome: values.nome,
      email: values.email,
      telefone: values.telefone,
      cep: values.cep,
      idade: values.idade
    };
    this.props.setPessoa(pessoa);
  };

  render() {
    return (
      <>
        <div className="form-wizard-content">
          <AvForm onSubmit={this.handleSubmit} model={{}}>
            <div className="d-flex">
              <Row form className="text-center w-50 m-auto">
                <Col xs={12}>
                  <h3 className="mb-3">Avaliação completa!</h3>
                  <h5 className="mb-5 font-weight-light">
                    Agora, preencha seus dados e vamos te enviar o seu resultado no e-mail informado dentro de instantes
                  </h5>
                </Col>
                <Col xs={12}>
                  <AvField
                    className="inputForm"
                    name="nome"
                    id="nome"
                    placeholder="Nome completo"
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
                    className="inputForm"
                    name="email"
                    id="email"
                    placeholder="E-mail"
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
                <Col xs={12}>
                  <AvField
                    className="inputForm"
                    name="telefone"
                    id="telefone"
                    placeholder="Telefone"
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
                <Col xs={12}>
                  <AvField
                    className="inputForm"
                    name="cep"
                    id="cep"
                    placeholder="CEP"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: 'O CEP é obrigatório!',
                      },
                    }}
                  />
                </Col>
                <Col xs={12}>
                  <AvField
                    className="inputForm"
                    name="idade"
                    id="idade"
                    placeholder="Idade"
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
            </div>
            <br/>
            <div className="d-flex">
              <Button className="general-button p-3 m-auto">
                <h5 className="text-white">Ver meu resultado</h5>
              </Button>
            </div>
          </AvForm>
        </div>
      </>
    );
  }
}

const mapStateToProps = (store: IRootState) => ({});
const mapDispatchToProps = {
  setPessoa
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Step9);
