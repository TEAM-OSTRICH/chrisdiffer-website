import React, { Component } from 'react';
import octocatImgUrl from '../assets/octocat.png';
import dbViewImgUrl from '../assets/dbView.png';
import dbDiffImgUrl from '../assets/dbDiff.png';

const MainContainer = (props) => {
  const { openModalDisplay } = props;

  return (
    <div id="mainContainer">
      <div id="downloadsContainer">
        <div id="downloadsBox">
          <a href="https://github.com/TEAM-OSTRICH/CHRISDIFFER">
            <img id="octocat" src={octocatImgUrl} />
          </a>
          <h6>download</h6>
        </div>
      </div>
      <div className="mainContainerDiv">
        <span className="mainSpan">
        CHRISDIFFER is a open-source tool to aid developers in schema migrations.
          <br />
          <br />
        Visually compare changes between your development and production databases before committing changes and reduce errors.
          <br />
          <br />
          <br />
          <br />
          {/* <br />
          <br /> */}
        Features:
        </span>
        <ul>
          <li>View the structure of your databases</li>
          <br />
          <li>See table column data types / constraints and the relationships between tables</li>
          <br />
          <li>Visualize the differences between your databases in a intuitive manner</li>
          <br />
          <li>Choose which changes to make from the GUI and automatically generate the alter scripts to update your target database</li>
        </ul>
      </div>
      <div className="mainContainerDiv">
        <span className="mainSpan">
          Clean visual represenation of your database.
        </span>
        <br />
        <br />
        <img id="dbView" src={dbViewImgUrl} onClick={event => openModalDisplay(event)} />
        <br />
        <br />
        <span className="mainSpan">
          Choose which changes to make and auto generate SQL scripts.
        </span>
        <br />
        <br />
        <img id="dbDiff" src={dbDiffImgUrl} onClick={event => openModalDisplay(event)} />
      </div>
    </div>
  );
};

export default MainContainer;
