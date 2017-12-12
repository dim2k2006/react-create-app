import React, {Component} from 'react';
import Uploader from '../uploader';
import About from '../about';
import Prize from '../prize';

import './style.css';

const LayoutAbout = () => {
    return (
        <div className="layout__about">
            <About />
        </div>
    );
};

const LayoutPrize = () => {
    return (
        <div className="layout__prize">
            <Prize />
        </div>
    );
};

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <div className="layout__uploader">
                    <Uploader
                        handleChange={this.props.handleChange}
                        isLoading={this.props.isLoading}
                        source={this.props.source}
                        result={this.props.result}
                    />
                </div>

                {this.props.result <= 80 && <LayoutAbout />}

                {this.props.result > 80 && <LayoutPrize />}
            </div>
        );
    }
}

export default Layout;
