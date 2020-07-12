import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Grid extends Component {
    render() { 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        One
                    </div>
                    <div className="col-sm">
                        One
                    </div>
                    <div className="col-sm">
                        One
                    </div>
                    <div className="col-sm">
                        One
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Grid;