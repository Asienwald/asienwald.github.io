import React from 'react';
import '../../css/misc.css';
import '../../css/menu.css';

function Menu(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-11 col-md-10 col-lg-8 ml-auto menu">
                    {/* <h1 className="mt-4 size-50 color-red">world map</h1> */}
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Menu;