import React, {Component} from 'react';
import Layout from '../layout';

import 'normalize.css';
import './style.css';

class App extends Component {
    /**
     * Constructor
     */
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            isLoading: false,
            source: ''
        };
    }

    /**
     * Handle input change event
     * @param {Object} event
     */
    handleChange(event) {
        const input = event.target;
        const reader = new FileReader();

        reader.addEventListener('loadstart', () => {
            this.setState({isLoading: true, source: ''});
        });

        reader.addEventListener('load', () => {
            const dataURL = reader.result;

            setTimeout(() => {
                this.setState({isLoading: false, source: dataURL});
            }, 4000);
        });

        // reader.onload = () => {
        //
        //     // const output = document.getElementById('output');
        //     // output.src = dataURL;
        // };

        reader.readAsDataURL(input.files[0]);
    }

    render() {
        return (
            <div className="app">
                <Layout
                    handleChange={this.handleChange}
                    isLoading={this.state.isLoading}
                    source={this.state.source}
                />

                <img width="40" height="40" src={this.state.source} alt='some img' />
            </div>
        );
    }
}

export default App;
