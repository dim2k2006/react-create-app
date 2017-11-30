import React, {Component} from 'react';
import Camera from '../camera';
import './style.css';

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="about__header">
                    <div className="about__icon">
                        <Camera fill="#6D83DE" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__title">
                        <h1>Фото анализатор</h1>
                    </div>

                    <div className="about__text">
                        <p>Загрузите фотографию и узнайте насколько она крутая!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
