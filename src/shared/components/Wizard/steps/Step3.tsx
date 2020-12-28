import React from 'react';
import { Col, Label, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import FittedImage from 'react-fitted-image';
import Boca from 'content/images/pages/agenda/boca.png';
import ImgTemp from 'content/images/pages/agenda/imgTemporaria.png';

interface IStep3Props extends StateProps, DispatchProps {}

interface IStep3State {}

class Step3 extends React.Component<IStep3Props, IStep3State> {
  render() {
    return (
      <>
        <div className="form-wizard-content">
          <div className="center-elements">
            <div className="formImage">
              <FittedImage src={Boca} fit="contain" />
            </div>
          </div>
          <Label for="espacamento">Qual o nível de desalinhamento dos seus dentes?</Label>
          <Row>
            <Col xs={4} className="center-elements">
              <div className="optionImage">
                <FittedImage src={ImgTemp} fit="contain" />
              </div>
            </Col>
            <Col xs={4} className="center-elements">
              <div className="optionImage">
                <FittedImage src={ImgTemp} fit="contain" />
              </div>
            </Col>
            <Col xs={4} className="center-elements">
              <div className="optionImage">
                <FittedImage src={ImgTemp} fit="contain" />
              </div>
            </Col>
            <Col xs={12} className="d-flex">
              <p className="m-auto">Nenhuma</p>
            </Col>
          </Row>
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
