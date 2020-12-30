import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

const getNavStates = (indx, length) => {
  const styles = [];
  for (let i = 0; i < length; i++) {
    if (i < indx) {
      styles.push('done');
    } else if (i === indx) {
      styles.push('doing');
    } else {
      styles.push('todo');
    }
  }
  return { current: indx, styles: styles };
};

const checkNavState = (currentStep, stepsLength) => {
  if (currentStep > 0 && currentStep < stepsLength - 1) {
    return {
      showPreviousBtn: true,
      showNextBtn: true,
    };
  } else if (currentStep === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true,
    };
  } else {
    return {
      showPreviousBtn: true,
      showNextBtn: false,
    };
  }
};

interface IMultiStepProps {
  steps: Array<any>;
}

class MultiStep extends React.Component<IMultiStepProps> {
  state = {
    showPreviousBtn: false,
    showNextBtn: true,
    compState: 0,
    navState: getNavStates(0, this.props.steps.length),
  };

  setNavState = (next) => {
    this.setState({
      navState: getNavStates(next, this.props.steps.length),
    });
    if (next < this.props.steps.length) {
      this.setState({ compState: next });
    }
    this.setState(checkNavState(next, this.props.steps.length));
  };

  handleKeyDown = (evt) => {
    if (evt.which === 13) {
      this.next();
    }
  };

  handleOnClick = (evt) => {
    if (
      evt.currentTarget.value === this.props.steps.length - 1 &&
      this.state.compState === this.props.steps.length - 1
    ) {
      this.setNavState(this.props.steps.length);
    } else {
      this.setNavState(evt.currentTarget.value);
    }
  };

  next = () => {
    this.setNavState(this.state.compState + 1);
  };

  previous = () => {
    if (this.state.compState > 0) {
      this.setNavState(this.state.compState - 1);
    }
  };

  getClassName = (className, i) => {
    return className + '-' + this.state.navState.styles[i];
  };

  renderSteps = () => {
    return this.props.steps.map((s, i) => (
      <li className={this.getClassName('form-wizard-step', i)} onClick={this.handleOnClick} key={i} value={i} />
    ));
  };

  render() {
    return (
      <div onKeyDown={this.handleKeyDown}>
        {this.props.steps[this.state.compState].component}
        <br />
        <div className="clearfix">
          <div>
            {this.state.compState === 0 ? (
              <div className="d-flex">
                <Button className="general-button p-3 m-auto" onClick={this.next}>
                  <h5 className="text-white">Iniciar</h5>
                </Button>
              </div>
            ) : this.state.compState === this.props.steps.length - 1 ? (
              <div className="d-flex">
                <Button className="general-button p-3 m-auto d-none" onClick={this.next}>
                  <h5 className="text-white">Ver meu resultado</h5>
                </Button>
              </div>
            ) : (
              <>
                <Button className="general-button p-3 float-left d-none" id="backStepButton" onClick={this.previous}>
                  <h5 className="text-white">Voltar</h5>
                </Button>
                <Button className="general-button p-3 float-right d-none" id="nextStepButton" onClick={this.next}>
                  <h5 className="text-white">Próximo</h5>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(MultiStep);
