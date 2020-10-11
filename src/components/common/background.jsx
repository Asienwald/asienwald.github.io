import React, { Component } from 'react';

// components
import Parallax from './parallax';

const parallax_1 = "/assets/forest_bg.png";
const parallax_2 = "/assets/forest_parallax_2_small.png";
const parallax_3 = "/assets/forest_parallax_3_small.png";
const parallax_4 = "/assets/forest_parallax_4_med.png";


class Background extends Component {
    render() {
        return (
            <div>
                <Parallax image={parallax_1} index={0} moving={false} />
                <Parallax image={parallax_2} index={24} moving={this.props.moving} />
                <Parallax image={parallax_3} index={16} moving={this.props.moving} />
                <Parallax image={parallax_4} index={10} moving={this.props.moving} />
                {/* <Parallax image={parallax_4} index={4}></Parallax> */}
            </div>
        );
    }
}

export default Background;