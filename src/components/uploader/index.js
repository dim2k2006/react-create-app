import React, {Component} from 'react';
import Upload from '../upload';
import './style.css';

class Uploader extends Component {
    render() {
        return (
            <div className="uploader">
                <div className="uploader__body">
                    <input type="file" className="uploader__input" onChange={this.props.handleChange} />

                    <div className="uploader__icon">
                        <Upload fill="#FFFFFF" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Uploader;
