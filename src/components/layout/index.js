import React, {Component} from 'react';
import Uploader from '../uploader';
import About from '../about';

import './style.css';

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <div className="layout__uploader">
                    <Uploader handleChange={this.props.handleChange} isLoading={this.props.isLoading} source={this.props.source} />
                </div>

                <div className="layout__about">
                    <About />
                </div>
            </div>
        );
    }
}

export default Layout;
