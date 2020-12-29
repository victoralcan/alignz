import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

import MultiStep from './MultiStep';

import { connect } from 'react-redux';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import Step6 from './steps/Step6';
import Step7 from './steps/Step7';
import Step8 from './steps/Step8';
import Step9 from './steps/Step9';
import { ColorPallet } from '../../model/enum/colors';
import Logo from '../../../content/images/logo-alignerz-removebg.png';
import FittedImage from 'react-fitted-image';

export interface IWizardProps extends StateProps, DispatchProps {}

export interface IWizardState {
  cSelected?: Array<any>;
  dropdownOpen?: boolean;
}

class Wizard extends React.Component<IWizardProps, IWizardState> {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      cSelected: [],
      dropdownOpen: false,
    };

    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected && this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  next = (currentStep) => {
    if (currentStep === 0) {
      document.getElementById('nfStep').click();
    } else if (currentStep === 1) {
      document.getElementById('sellerStep').click();
    } else if (currentStep === 2) {
      document.getElementById('buyerStep').click();
    } else if (currentStep === 3) {
      document.getElementById('duplicateStep').click();
    }
  };

  render() {
    const steps = [
      { name: 'Passo 1', component: <Step1 /> },
      { name: 'Passo 2', component: <Step2 /> },
      { name: 'Passo 3', component: <Step3 /> },
      { name: 'Passo 4', component: <Step4 /> },
      { name: 'Passo 5', component: <Step5 /> },
      { name: 'Passo 6', component: <Step6 /> },
      { name: 'Passo 7', component: <Step7 /> },
      { name: 'Passo 8', component: <Step8 /> },
      { name: 'Passo 9', component: <Step9 /> },
    ];
    return (
      <Row className="h-100">
        <Col md="12">
          <Card className="main-card mb-3 h-100" style={{ backgroundColor: ColorPallet.pastelOpac }}>
            <CardBody className="center-elements">
              <div id="alignerzLogo">
                <FittedImage src={Logo} alt="AlignerZ" fit="contain" />
              </div>
              <div className="forms-wizard-alt p-5 border border-light" style={{ backgroundColor: ColorPallet.white }}>
                <MultiStep steps={steps} />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
