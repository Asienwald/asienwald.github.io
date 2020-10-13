import React from 'react';
import '../../css/misc.css';
import '../../css/bigpanel.css';
import MapContents from '../pages/worldmap/map-old';

function BigPanel(props) {
    return (
        <div className="container-fluid">
            <div className="col-12 col-md-10 col-lg-8 offset-lg-3 mr-lg-auto big-panel">
                <div className="h-100 w-100 d-flex flex-column justify-content-start text-white p-0">
                    {/* <h1 className="color-red">World Map</h1>

                    <div className="position-relative red h-100">
                        <div className="circle-point education-circle">
                            <div className="circle-point-inside"></div>
                        </div>

                        <div className="circle-point experience-circle">
                            <div className="circle-point-inside"></div>
                        </div>

                        <div className="circle-point experience-circle">
                            <div className="circle-point-inside"></div>
                        </div>
                    </div> */}
                    <MapContents/>

                </div>
            </div>
            
        </div>
    );
}

export default BigPanel;