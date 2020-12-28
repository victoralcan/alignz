import React from 'react';
import { Col, Label, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { IRootState } from 'shared/reducers';
import Boca from '../../../../content/images/pages/agenda/boca.png';
import ImgTemp from '../../../../content/images/pages/agenda/imgTemporaria.png';
import FittedImage from 'react-fitted-image';

interface IStep6Props extends StateProps, DispatchProps {}

interface IStep6State {}

class Step6 extends React.Component<IStep6Props, IStep6State> {
  render() {
    return (
      <>
        <div className="form-wizard-content">
          <div className="center-elements">
            <div className="formImage">
              <FittedImage src={Boca} fit="contain" />
            </div>
          </div>
          <Label for="espacamento">Como é sua mordida?</Label>
          <Row>
            <Col xs={3} className="center-elements">
              <div className="optionImage">
                <FittedImage src={ImgTemp} fit="contain" />
              </div>
            </Col>
            <Col xs={3} className="center-elements">
              <div className="optionImage">
                <FittedImage src={ImgTemp} fit="contain" />
              </div>
            </Col>
            <Col xs={3} className="center-elements">
              <div className="optionImage">
                <FittedImage src={ImgTemp} fit="contain" />
              </div>
            </Col>
            <Col xs={3} className="center-elements">
              <div className="optionImage">
                <FittedImage src={ImgTemp} fit="contain" />
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Step6);
