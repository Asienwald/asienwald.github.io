import React, { Component } from 'react';
import '../../css/homepanel.css';
import '../../css/misc.css';

class Panel extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-10 col-lg-5 mx-auto position-relative home-panel">
                        <div className="h-100 w-100 d-flex flex-column justify-content-end text-white p-0">
                            <h1 className="size-60">Hello World</h1>
                            <p className="size-40 mb-3 mt-4">my name is <span className="color-red">kar wei</span> and learning is my passion</p>
                            <p className="mt-3 size-30 color-orange">click here to find out more about me!</p>

                            <button className="start-btn size-40 mb-2 mt-3">start</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel;