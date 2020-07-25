import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Work.css';
import colImage from '../../assets/img/col1.jpg';
 
class Works extends Component {
    render() { 
        return (
            <div className="container">
                <div className="works-heading">
                    <h3>Major Works</h3>
                    <span className="span3"></span>
                    <p className="work-text">Our major work based on Child Education, Child health, 
                           Save Girl Child, Girl Education, Women health care and education, 
                           Employment, Training, poor rehabilitation,
                           Food & Nutrition, plantation, Serving old orphan people, public awareness etc.
                    </p>
                </div>
                <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <img src={colImage} 
                            style={{
                                width:'15vw',
                                height:'20vh'
                            }}
                        />
                    </div>
                    <div className="col-sm">
                     <img src={colImage} 
                         style={{
                                width:'15vw',
                                height:'20vh'
                            }}
                     />
                    </div>
                    <div className="col-sm">
                    <img src={colImage} 
                        style={{
                                width:'15vw',
                                height:'20vh'
                            }}
                    />
                    </div>
                    <div className="col-sm">
                    <img src={colImage} 
                        style={{
                                width:'15vw',
                                height:'20vh'
                            }}
                    /> 
                    </div>
                    <div className="col-sm">
                    <img src={colImage} 
                        style={{
                                width:'15vw',
                                height:'20vh'
                            }}
                    /> 
                    </div>
                    <div className="col-sm">
                    <img src={colImage} 
                        style={{
                                width:'15vw',
                                height:'20vh'
                            }}
                    /> 
                    </div>
                    <div className="col-sm">
                    <img src={colImage} 
                        style={{
                                width:'15vw',
                                height:'20vh'
                            }}
                    />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img src={colImage} 
                            style={{
                                width:'15vw',
                                height:'20vh'
                            }}
                        />
                    </div>
                    <div className="col-sm">
                     <img src={colImage} 
                         style={{
                                width:'15vw',
                                height:'20vh'
                            }}
                     />
                    </div>
                    <div className="col-sm">
                    <img src={colImage} 
                        style={{
                                width:'15vw',
                                height:'20vh'
                            }}
                    />
                    </div>
                    <div className="col-sm">
                    <img src={colImage} 
                        style={{
                                width:'15vw',
                                height:'20vh'
                            }}
                    /> 
                    </div>
                    <div className="col-sm">
                    <img src={colImage} 
                        style={{
                                width:'15vw',
                                height:'20vh'
                            }}
                    /> 
                    </div>
                    <div className="col-sm">
                    <img src={colImage} 
                        style={{
                                width:'15vw',
                                height:'20vh'
                            }}
                    /> 
                    </div>
                    <div className="col-sm">
                    <img src={colImage} 
                        style={{
                                width:'15vw',
                                height:'20vh'
                            }}
                    />
                    </div>
                </div>
                <div className="row">
                <div className="col-sm">
                    <img src={colImage} 
                        style={{
                                width:'15vw',
                                height:'20vh'
                            }}
                    /> 
                    </div>
                    <div className="col-sm">
                    <img src={colImage} 
                        style={{
                                width:'15vw',
                                height:'20vh'
                            }}
                    />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
 
export default Works;