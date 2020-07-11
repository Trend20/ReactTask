import React, { Component } from 'react';
import './CardImage.css';
import cardImage from '../../../assets/img/blog1.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
 
class CardImage extends Component {
    render() { 
        return (
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <img src={cardImage} className="card-img-top"/>
                        <div className="card-body">
                        <h1 className="card-title">COVID-19 Relief Services</h1>
                        <p className="card-text">In Nairobi, Kenya</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={cardImage} className="card-img-top"/>
                        <div className="card-body">
                        <h1 className="card-title">COVID-19 Relief Services</h1>
                        <p className="card-text">In Nairobi, Kenya</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={cardImage} className="card-img-top"/>
                        <div className="card-body">
                        <h1 className="card-title">COVID-19 Relief Services</h1>
                        <p className="card-text">In Nairobi, Kenya</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={cardImage} className="card-img-top"/>
                        <div className="card-body">
                        <h1 className="card-title">COVID-19 Relief Services</h1>
                        <p className="card-text">In Nairobi, Kenya</p>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CardImage;