import React, { Component } from 'react';
import './CardImage.css';
import cardImage from '../../../assets/img/blog1.jpeg';

export default class CardImage extends Component {
  render() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-sm-4">
                <div className="card" style={{
                    width: '23rem',
                    height: '40vh'
                    }}>
                   <img  src={cardImage} className="card-image-top"/>
                   <div className="card-body">
                       <h1 className="card-title">COVID-19 Relief Services</h1>
                       <p className="card-text">In Nairobi Kenya</p>
                   </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card" style={{width: '18rem'}}>
                   <img  src={cardImage} className="card-image-top"/>
                   <div className="card-body">
                       <h1 className="card-title">COVID-19 Relief Services</h1>
                       <p className="card-text">In Nairobi Kenya</p>
                   </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card" style={{width: '18rem'}}>
                   <img  src={cardImage} className="card-image-top"/>
                   <div className="card-body">
                       <h1 className="card-title">COVID-19 Relief Services</h1>
                       <p className="card-text">In Nairobi Kenya</p>
                   </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card" style={{width: '18rem'}}>
                   <img  src={cardImage} className="card-image-top"/>
                   <div className="card-body">
                       <h1 className="card-title">COVID-19 Relief Services</h1>
                       <p className="card-text">In Nairobi Kenya</p>
                   </div>
                </div>
            </div>
        </div>
        </div>
    );
  }
}
