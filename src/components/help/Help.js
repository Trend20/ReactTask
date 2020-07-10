import React, { Component } from 'react';
import cardImage from '../../assets/img/blog1.jpeg';
import './Help.css';
 
class Help extends Component {
    render() { 
        return (
            <div className="container-fluid">
                <div className="help-header">
                     <h3 className="text-dark text-center">A Small Help</h3>
                     <span></span>
                </div>
                    <div className="help-desc">
                        <p>Brotherhood global foundation Trust has created a revolution among youngsters, which 
                           not only based on ethics but also added value and believing in 
                           our culture and tradition also.
                        </p>
                    </div>
                    <div className="row">
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
 
export default Help;