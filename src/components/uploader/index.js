import React, {Component} from 'react';
import Upload from '../upload';
import Loader from '../loader';
import './style.css';

class Uploader extends Component {
    render() {
        return (
            <div className={`uploader ${this.props.isLoading ? 'uploader_state_loading' : ''}`}>
                <div className="uploader__body">
                    <input type="file" className="uploader__input" onChange={this.props.handleChange} />

                    <div className="uploader__icon">
                        {this.props.isLoading ? <Loader /> : <Upload fill="#FFFFFF" />}
                    </div>
                </div>
            </div>
        );
    }
}

export default Uploader;
