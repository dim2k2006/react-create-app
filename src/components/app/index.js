import React, {Component} from 'react';
import Layout from '../layout';
import 'normalize.css';
import './style.css';

// eslint-disable-next-line
const colorThief = new ColorThief();

class App extends Component {
    /**
     * Constructor
     */
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.generatePalette = this.generatePalette.bind(this);

        this.state = {
            isLoading: false,
            source: '',
            result: 0
        };
    }

    componentDidMount() {
        this.image.addEventListener('load', this.generatePalette);
    }

    /**
     * Handle input change event
     * @param {Object} event
     */
    handleChange(event) {
        const input = event.target;
        const reader = new FileReader();

        reader.addEventListener('loadstart', () => {
            this.setState({
                isLoading: true,
                source: '',
                result: 0
            });
        });

        reader.addEventListener('load', () => {
            const dataURL = reader.result;

            setTimeout(() => {
                this.setState({
                    source: dataURL,
                    result: 0
                });
            }, 4000);
        });

        reader.readAsDataURL(input.files[0]);
    }

    /**
     * Generate color palette
     */
    generatePalette() {
        const image = this.image;
        console.log('image:', image);

        const palette = colorThief.getPalette(image);

        console.log(palette);
    }

    render() {
        return (
            <div className="app">
                <Layout
                    handleChange={this.handleChange}
                    isLoading={this.state.isLoading}
                    source={this.state.source}
                    result={this.state.result}
                />

                <div className="app__image">
                    <img src={this.state.source} alt='some img' ref={(image) => this.image = image} />
                </div>
            </div>
        );
    }
}

export default App;
