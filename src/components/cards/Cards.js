import React, { Component } from 'react';
import Mission from '../../assets/img/mission.png'
import Vission from '../../assets/img/vission.png'
import Moto from '../../assets/img/moto.png'
import './Cards.css';
 
class Cards extends Component {
    render() { 
        return (
            <div className="container" style={{height: '50vh'}}>
                <div className="row">
                 <div className="col-sm-4">
                 <div className="card card-details" style={{
                     width: '23rem',
                     height: '40vh'
                     }}>
                    <img src={Mission} className="card-img" style={{
                         width: '7vw',
                         marginLeft:'10px'


                    }} />
                    <div className="card-body">
                        <h1 className="card-title" id="title">Mission</h1>
                        <p className="card-text" id="text">To eradicate hunger and poverty.</p>
                    </div>
                </div>
                 </div>
                <div className="col-sm-4">
                <div className="card card-details" style={{
                    width: '23rem',
                    height: '40vh'
                    }}>
                    <img src={Vission} style={{
                         width: '7vw',
                         marginLeft:'10px'
                    }} />
                    <div className="card-body">
                        <h1 className="card-title" id="title">Vission</h1>
                        <p className="card-text" id="text">A world full of people devoid of miseries and pain.</p>
                    </div>
                </div>
                </div>
                <div className="col-sm-4">
                <div className="card card-details" style={{
                    width: '23rem',
                    height: '40vh'
                    }}>
                    <img src={Moto} style={{
                        width: '7vw',
                        marginLeft:'10px'
                    }}  />
                    <div className="card-body">
                        <h1 className="card-title" id="title">Moto</h1>
                        <p className="card-text" id="text">We rise by lifting others.</p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        );
    }
}
 
export default Cards;