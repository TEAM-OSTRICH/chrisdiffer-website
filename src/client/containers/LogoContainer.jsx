import React, { Component } from 'react';
import logoImgUrl from '../assets/cdf.svg';

const LogoContainer = () => (
  <div>
    <div id="logoImgContainer">
      <img id="logoImg" src={logoImgUrl} />
    </div>
    <div id="logoTextContainer">
      <span id="logoText">CHRISDIFFER</span>
    </div>
    <div id="logoDescriptionContainer">
      <span>Schema Migration Tool</span>
    </div>
  </div>
);

export default LogoContainer;
