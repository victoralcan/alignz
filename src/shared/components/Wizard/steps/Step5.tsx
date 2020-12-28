import React from 'react';
import { Col, Label, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import FittedImage from 'react-fitted-image';
import Boca from 'content/images/pages/agenda/boca.png';
import ImgTemp from 'content/images/pages/agenda/imgTemporaria.png';

interface IStep5Props extends StateProps, DispatchProps {}

interface IStep5State {}

class Step5 extends React.Component<IStep5Props, IStep5State> {
  render() {
    return (
      <>
        <div className="form-wizard-content">
          <div className="center-elements">
            <div className="formImage">
              <FittedImage src={Boca} fit="contain" />
            </div>
          </div>
          <Label for="espacamento">Como é o espaçamento dos seus dentes?</Label>
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

export default connect(mapStateToProps, mapDispatchToProps)(Step5);
