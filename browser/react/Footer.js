'use strict';

import React from 'react';
import reactDOM from 'react-dom';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <footer>
                <div className="pull-left">
                    <button className="btn btn-default">
                        <span className="glyphicon glyphicon-step-backward"></span>
                    </button>
                    <button className="btn btn-default">
                        <span className="glyphicon glyphicon-play"></span>
                    </button>
                    <button className="btn btn-default">
                        <span className="glyphicon glyphicon-step-forward"></span>
                    </button>
                </div>
                <div className="bar">
                    <div className="progress">
                        <div className="progress-bar"></div>
                    </div>
                </div>
            </footer>
        );
    }
}

