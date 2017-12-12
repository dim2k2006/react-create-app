import React, {Component} from 'react';
import './style.css';
import prize from '../../images/vis-prize.jpg';

class Prize extends Component {
    render() {
        return (
            <div className="prize">
                <div className="prize__content">
                    <div className="prize__title">
                        <h1>Ваш приз:</h1>
                    </div>

                    <div className="prize__preview">
                        <img src={prize} alt="prize"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Prize;
