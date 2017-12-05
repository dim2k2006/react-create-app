import React, {Component} from 'react';
import Layout from '../layout';
import randomInteger from '../../utils/random';
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
            palette: [],
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
            }, 3000);
        });

        reader.readAsDataURL(input.files[0]);
    }

    /**
     * Generate color palette
     */
    generatePalette() {
        const image = this.image;
        const palette = colorThief.getPalette(image);
        let result = 0;
        const ratioLimit = 25;

        for (const color of palette) {
            const red = color[0];
            const green = color[1];
            const blue = color[2];

            const greenRatio = Math.floor(green / red * 100);
            const blueRatio = Math.floor(blue / red * 100);

            if (greenRatio <= ratioLimit && blueRatio <= ratioLimit) {
                result = randomInteger(81, 100);
                break;
            } else {
                result = randomInteger(1, 79);
            }
        }

        this.setState({
            isLoading: false,
            result,
            palette
        });
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

                <div className="app__palette">
                    {
                        this.state.palette.map((color, index) => {
                            const bgcolor = `rgba(${color.join(',')}, 1)`;

                            return (
                                <div key={index} className="app__paletteItem">
                                    <span style={{backgroundColor: bgcolor}} />
                                    <i>{bgcolor}</i>
                                </div>
                            );
                        })
                    }
                </div>

                <div className="app__image">
                    <img src={this.state.source} alt='some img' ref={(image) => this.image = image} />
                </div>
            </div>
        );
    }
}

export default App;
