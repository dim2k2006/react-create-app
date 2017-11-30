import React, {Component} from 'react';

class Checkmark extends Component {
    render() {
        return (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="512px" height="403.017px" viewBox="0 54.493 512 403.017">
                <path fill={this.props.fill} d="M498.276,68.227c-18.314-18.313-47.988-18.313-66.304,0L153.122,347.078l-74.146-63.691
                    c-18.064-18.065-47.348-18.065-65.428,0c-18.064,18.062-18.064,47.361,0,65.426l110.775,95.148
                    c18.064,18.064,47.348,18.064,65.428,0c1.813-1.811,3.329-3.828,4.782-5.844c0.265-0.25,0.562-0.422,0.828-0.672l302.917-302.933
                    C516.574,116.215,516.574,86.525,498.276,68.227z"/>
            </svg>
        );
    }
}

export default Checkmark;
