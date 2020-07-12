import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Grid.css';
import cardImage from '../../assets/img/blog1.jpeg';

class Grid extends Component {
    render() { 
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm">
                        <div className="card" style={{height:'40vh'}}>
                            <img src={cardImage} style={{height: '25vh'}}/>
                            <div className="card-body">
                                <h3 className="card-title">COVID-19 Relief Services</h3>
                                <p className="card-text">In Bhubaneswar at Ekamra Vihar.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                    <div className="card" style={{height:'40vh'}}>
                            <img src={cardImage} style={{height: '25vh'}}/>
                            <div className="card-body">
                                <h3 className="card-title">COVID-19 Relief Services</h3>
                                <p className="card-text">In Bhubaneswar at Ekamra Vihar.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                    <div className="card" style={{height:'40vh'}}>
                            <img src={cardImage} style={{height: '25vh'}}/>
                            <div className="card-body">
                                <h3 className="card-title">COVID-19 Relief Services</h3>
                                <p className="card-text">In Bhubaneswar at Ekamra Vihar.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                    <div className="card" style={{height:'40vh'}}>
                            <img src={cardImage} style={{height: '25vh'}}/>
                            <div className="card-body">
                                <h3 className="card-title">COVID-19 Relief Services</h3>
                                <p className="card-text">In Bhubaneswar at Ekamra Vihar.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm">
                        <div className="card" style={{height:'40vh'}}>
                            <img src={cardImage} style={{height: '25vh'}}/>
                            <div className="card-body">
                                <h3 className="card-title">COVID-19 Relief Services</h3>
                                <p className="card-text">In Bhubaneswar at Ekamra Vihar.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                    <div className="card" style={{height:'40vh'}}>
                            <img src={cardImage} style={{height: '25vh'}}/>
                            <div className="card-body">
                                <h3 className="card-title">COVID-19 Relief Services</h3>
                                <p className="card-text">In Bhubaneswar at Ekamra Vihar.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                    <div className="card" style={{height:'40vh'}}>
                            <img src={cardImage} style={{height: '25vh'}}/>
                            <div className="card-body">
                                <h3 className="card-title">COVID-19 Relief Services</h3>
                                <p className="card-text">In Bhubaneswar at Ekamra Vihar.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                    <div className="card" style={{height:'40vh'}}>
                            <img src={cardImage} style={{height: '25vh'}}/>
                            <div className="card-body">
                                <h3 className="card-title">COVID-19 Relief Services</h3>
                                <p className="card-text">In Bhubaneswar at Ekamra Vihar.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Grid;