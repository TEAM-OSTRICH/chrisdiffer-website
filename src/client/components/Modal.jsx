import React, { Component } from 'react';
import imgUrl from '../assets/dbView.png';
import imgUrl2 from '../assets/dbDiff.png';

const Modal = (props) => {
  const { currentImg, closeModalDisplay } = props;

  return (
    <div id="modalContainer">
      <button id="arrowButton">
        <i id="leftArrow" className="fas fa-arrow-circle-left" />
      </button>
      <img id="modalImg" src={require(`../assets/${currentImg}.png`)} />
      <button id="arrowButton">
        <i id="rightArrow" className="fas fa-arrow-circle-right" />
      </button>
      <button id="close" onClick={closeModalDisplay}>
        <i className="fas fa-times-circle" />
      </button>
    </div>
  );
};

export default Modal;
