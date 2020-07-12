import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import cardImage from '../../assets/img/blog1.jpeg';

class Grid extends Component {
    render() { 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card" style={{height:'50vh'}}>
                            <img src={cardImage} style={{height: '20vh'}}/>
                            <div className="card-body">
                                <h1 className="card-title">COVID-19 Relief Services</h1>
                                <p className="card-text">In Nairobi Kenya</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                    <div className="card" style={{height:'50vh'}}>
                            <img src={cardImage} style={{height: '20vh'}}/>
                            <div className="card-body">
                                <h1 className="card-title">COVID-19 Relief Services</h1>
                                <p className="card-text">In Nairobi Kenya</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                    <div className="card" style={{height:'50vh'}}>
                            <img src={cardImage} style={{height: '20vh'}}/>
                            <div className="card-body">
                                <h1 className="card-title">COVID-19 Relief Services</h1>
                                <p className="card-text">In Nairobi Kenya</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                    <div className="card" style={{height:'50vh'}}>
                            <img src={cardImage} style={{height: '20vh'}}/>
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
 
export default Grid;