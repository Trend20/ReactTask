import React, { Component } from 'react';
import Mission from '../../assets/img/mission.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import Vission from '../../assets/img/vission.png';
import Moto from '../../assets/img/moto.png';
 
class Paper extends Component {
    render() { 
        return (
            <div className="container">
                <div className="card" style={{width: "18rem"}}>
                    <img src={Mission} className="card-img"/>
                    <div className="card-body">
                        <h1 className="card-title">Mission</h1>
                        <p className="card-text">To eradicate hunger and poverty.</p>
                    </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={Vission} className="card-img"/>
                    <div className="card-body">
                        <h1 className="card-title">Mission</h1>
                        <p className="card-text">To eradicate hunger and poverty.</p>
                    </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={Moto} className="card-img"/>
                    <div className="card-body">
                        <h1 className="card-title">Mission</h1>
                        <p className="card-text">To eradicate hunger and poverty.</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Paper;