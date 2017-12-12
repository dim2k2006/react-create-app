import React, {Component} from 'react';
import Upload from '../upload';
import Loader from '../loader';
import './style.css';

const RenderResult = (props) => {
    const result = props.result;
    const text = props.text;
    let markup;

    switch(result) {
        case 'fail':
            markup = resultFail(text);
            break;
        case 'almost':
            markup = resultAlmost(text);
            break;
        case 'success':
            markup = resultSuccess(text);
            break;
        default:
            markup = resultFail(text);
    }

    return markup;
};

const resultFail = (text) => {
    return (
        <div className="uploader__result uploader__result_fail" dangerouslySetInnerHTML={{__html: text}} />
    );
};

const resultAlmost = (text) => {
    return (
        <div className="uploader__result uploader__result_almost" dangerouslySetInnerHTML={{__html: text}} />
    );
};

const resultSuccess = (text) => {
    return (
        <div className="uploader__result uploader__result_success" dangerouslySetInnerHTML={{__html: text}} />
    );
};

class Uploader extends Component {
    render() {
        let result = 'fail';
        let text = `${this.props.result}% Крутости!`;

        if (this.props.result >= 0 && this.props.result <= 30) {
            result = 'fail';
            text = `${this.props.result}% Крутости. <br> Попробуйте еще раз.`;
        } else if (this.props.result > 30 && this.props.result <= 80) {
            result = 'almost';
            text = `${this.props.result}% Крутости! <br> Вы почти у цели!`;
        } else {
            result = 'success';
            text = `${this.props.result}% Крутости! <br> Идеальный снимок!`;
        }

        return (
            <div className={`uploader ${this.props.isLoading ? 'uploader_state_loading' : ''} ${this.props.source ? 'uploader_state_' + result : ''}`}>
                <div className="uploader__body">
                    <input type="file" className="uploader__input" onChange={this.props.handleChange} />

                    <div className="uploader__icon">
                        {this.props.isLoading ? <Loader /> : <Upload fill="#FFFFFF" />}
                    </div>
                </div>

                {this.props.source && !this.props.isLoading ? <RenderResult result={result} text={text} /> : <div className="uploader__spacer" />}
            </div>
        );
    }
}

export default Uploader;
