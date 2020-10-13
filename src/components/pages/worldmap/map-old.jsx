import React from 'react';
import '../../../css/misc.css';
import '../../../css/bigpanel.css';
import '../../../css/worldmap.css';
import { useHistory } from 'react-router-dom';

function MapContents(props) {

    const history = useHistory();

    const jumpTo = (route) => {
        history.push(`/${route}`)
    }

    return (
        <div className="h-100">
            <h1 className="color-red size-50 title">World Map</h1>

            <div className="position-relative h-100 big-screens">
                <div className="circle-point education-circle">
                    <div className="circle-point-inside"
                    ></div>
                    <p className="size-45">education</p>
                </div>

                <div className="circle-point experience-circle">
                    <div className="circle-point-inside"></div>
                    <p className="size-45">experience</p>
                </div>

                <div className="circle-point about-circle"
                    onClick={() => {jumpTo("aboutme")}}
                >
                    <div className="circle-point-inside"></div>
                    <p className="size-45">about me</p>
                </div>
                <div className="circle-point achievements-circle">
                    <div className="circle-point-inside"></div>
                    <p className="size-45">achievements</p>
                </div>
                <div className="circle-point projects-circle">
                    <div className="circle-point-inside"></div>
                    <p className="size-45">projects</p>
                </div>
                <div className="circle-point about-site-circle">
                    <div className="circle-point-inside"></div>
                    <p className="size-45">about this site</p>
                </div>
                <div className="circle-point find-circle">
                    <div className="circle-point-inside"></div>
                    <p className="size-45">find me</p>
                </div>

                <div className="horizontal-line horizontal-line-1"></div>
                <div className="horizontal-line horizontal-line-2"></div>
                <div className="horizontal-line horizontal-line-3"></div>
                <div className="horizontal-line horizontal-line-4"></div>
                <div className="horizontal-line horizontal-line-5"></div>
                <div className="horizontal-line horizontal-line-6"></div>
                <div className="horizontal-line horizontal-line-7"></div>
                <div className="horizontal-line horizontal-line-8"></div>

                <div className="vertical-line vertical-line-1"></div>
                <div className="vertical-line vertical-line-2"></div>
                <div className="vertical-line vertical-line-3"></div>
                <div className="vertical-line vertical-line-4"></div>
            </div>

            <div className="small-screens row h-100">
                <div className="col-10 mx-auto mt-3">
                    <div className="d-flex flex-row text-center mb-3 map-link"
                        onClick={() => {jumpTo("aboutme")}}
                    >
                        <div className="circle-point">
                            <div className="circle-point-inside"></div>
                        </div>
                        <p className="size-45 ml-3 my-auto">about me</p>
                    </div>
                    
                    <div className="d-flex flex-row text-center mb-3 map-link"
                        onClick={() => {jumpTo("education")}}
                    >
                        <div className="circle-point">
                            <div className="circle-point-inside"></div>
                        </div>
                        <p className="size-45 ml-3 my-auto">education</p>
                    </div>

                    <div className="d-flex flex-row text-center mb-3 map-link"
                        onClick={() => {jumpTo("experience")}}
                    >
                        <div className="circle-point">
                            <div className="circle-point-inside"></div>
                        </div>
                        <p className="size-45 ml-3 my-auto">experience</p>
                    </div>

                    <div className="d-flex flex-row text-center mb-3 map-link"
                        onClick={() => {jumpTo("achievements")}}
                    >
                        <div className="circle-point">
                            <div className="circle-point-inside"></div>
                        </div>
                        <p className="size-45 ml-3 my-auto">achievements</p>
                    </div>

                    <div className="d-flex flex-row text-center mb-3 map-link"
                        onClick={() => {jumpTo("projects")}}
                    >
                        <div className="circle-point">
                            <div className="circle-point-inside"></div>
                        </div>
                        <p className="size-45 ml-3 my-auto">projects</p>
                    </div>

                    <div className="d-flex flex-row text-center mb-3 map-link"
                        onClick={() => {jumpTo("aboutthissite")}}
                    >
                        <div className="circle-point">
                            <div className="circle-point-inside"></div>
                        </div>
                        <p className="size-45 ml-3 my-auto">about this site</p>
                    </div>

                    <div className="d-flex flex-row text-center mb-3 map-link"
                        onClick={() => {jumpTo("findme")}}
                    >
                        <div className="circle-point">
                            <div className="circle-point-inside"></div>
                        </div>
                        <p className="size-45 ml-3 my-auto">find me</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MapContents;