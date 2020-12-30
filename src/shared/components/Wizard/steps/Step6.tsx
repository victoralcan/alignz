import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import Cruzada from '../../../../content/images/pages/preavaliacao/mordidaCruzada.png';
import Protuida from '../../../../content/images/pages/preavaliacao/mordidaProtuida.png';
import Retraida from '../../../../content/images/pages/preavaliacao/mordidaRetraida.png';
import FittedImage from 'react-fitted-image';
import { setMordida } from 'pages/preavaliacao/preavaliacao.reducer';

interface ISelectOption {
  label: string;
  selected: boolean;
  src: ImageData;
}

interface IStep6Props extends StateProps, DispatchProps {}

interface IStep6State {
  respostas: Array<ISelectOption>;
}

class Step6 extends React.Component<IStep6Props, IStep6State> {
  constructor(props) {
    super(props);
    this.state = {
      respostas: [
        { label: 'Cruzada', selected: false, src: Cruzada },
        { label: 'Protuída', selected: false, src: Protuida },
        { label: 'Retraída', selected: false, src: Retraida },
      ],
    };
  }

  handleSubmit = (event, errors) => {
    const { respostas } = this.state;
    event.persist();
    if (errors.length > 0) return;
    const selected = respostas.find(resposta => resposta.selected === true);
    this.props.setMordida(selected.label);
    document.getElementById('nextStepButton').click()
  };

  setResposta = (index) => {
    const respostas = [...this.state.respostas];
    respostas.forEach((resposta) => (resposta.selected = false));
    respostas[index].selected = true;
    this.setState({
      respostas,
    });
  };

  render() {
    const { respostas } = this.state;
    return (
      <>
        <div className="form-wizard-content">
          <AvForm onSubmit={this.handleSubmit} model={{}}>
            <div className="bgText d-flex">
              <Row className="text-center m-auto-w-75">
                <Col xs={12}>
                  <h1 className="titleStep text-black mb-5">Como é a sua mordida?</h1>
                </Col>
                {respostas.map((resposta, index) => {
                  return (
                    <Col key={index} xs={12} sm={6} md={4} className="center-elements mb-3">
                      <Button type="submit" className="btnImg">
                        <div
                          className={`optionImage ${resposta.selected && 'selectedImg'}`}
                          onClick={() => this.setResposta(index)}
                        >
                          <FittedImage src={resposta.src} fit="contain"/>
                        </div>
                      </Button>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </AvForm>
        </div>
      </>
    );
  }
}

const mapStateToProps = (store: IRootState) => ({});
const mapDispatchToProps = {
  setMordida
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Step6);
