import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogoContainer from './containers/LogoContainer.jsx';
import MainContainer from './containers/MainContainer.jsx';
import Modal from './components/Modal.jsx';
import * as actions from './actions/actions';

function mapStateToProps(store) {
  return {
    isOpen: store.isOpen,
    currentImg: store.currentImg,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openModalDisplay(imgUrl) {
      dispatch(actions.openModalDisplay(imgUrl));
    },
    closeModalDisplay() {
      dispatch(actions.closeModalDisplay());
    },
  };
}

class App extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      isOpen, openModalDisplay, currentImg, closeModalDisplay,
    } = this.props;

    return (
      <div>
        <LogoContainer />
        <MainContainer openModalDisplay={openModalDisplay} />
        {isOpen ? <Modal currentImg={currentImg} closeModalDisplay={closeModalDisplay} /> : null}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
