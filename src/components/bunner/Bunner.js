import React, { Component } from 'react';
import Index1 from '../../assets/img/index1.png';
import Index2 from '../../assets/img/index2.png'
import Index3 from '../../assets/img/index3.png'
import './Banner.css';

class Bunner extends Component {
  render() {
    return (
      <div className="container">
        <div className="first-image-container">
            <img src={Index1} />
            <h3>Ration kits distributed</h3>
            <h1>5900</h1>
        </div>
        <div className="second-image-container">
            <img src={Index2} />
            <h3>Cash help extended</h3>
            <h1>Rs 240654</h1>
        </div>
        <div className="third-image-container">
            <img src={Index3} />
            <h3>People provided help</h3>
            <h1>3565</h1>
        </div>
      </div>
    );
  }
}
export default Banner;