import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../../css/misc.css';
import '../../../css/worldmap.css';

function Map(props) {

    const history = useHistory();

    const jumpTo = (route) => {
        history.push(`/${route}`)
    }

    return (
        <div>
            <h1 className="mt-5 size-50 color-red">world map</h1>

            <div className="row text-white mx-5 map-links">
                <div className="col-12 col-lg-6">
                    <div className="row">
                        <div className="col-12">
                        <div className="d-flex flex-row map-link mt-4"
                                onClick = {() => {jumpTo("")}}
                            >
                                <div className="circle-point">
                                    <div className="circle-point-inside"></div>
                                </div>
                                <p className="size-45 my-auto ml-4">Home</p>
                            </div>
                            <div className="d-flex flex-row map-link mt-4"
                                onClick = {() => {jumpTo("aboutme")}}
                            >
                                <div className="circle-point">
                                    <div className="circle-point-inside"></div>
                                </div>
                                <p className="size-45 my-auto ml-4">about me</p>
                            </div>
                            
                            <div className="d-flex flex-row map-link mt-4"
                                onClick = {() => {jumpTo("education")}}
                            >
                                <div className="circle-point">
                                    <div className="circle-point-inside"></div>
                                </div>
                                <p className="size-45 my-auto ml-4">education</p>
                            </div>
                            
                            <div className="d-flex flex-row map-link mt-4"
                                onClick = {() => {jumpTo("experience")}}
                            >
                                <div className="circle-point">
                                    <div className="circle-point-inside"></div>
                                </div>
                                <p className="size-45 my-auto ml-4">experience</p>
                            </div>

                            <div className="d-flex flex-row map-link mt-4"
                                onClick = {() => {jumpTo("achievements")}}
                            >
                                <div className="circle-point">
                                    <div className="circle-point-inside"></div>
                                </div>
                                <p className="size-45 my-auto ml-4">achievements</p>
                            </div>

                            
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex flex-row map-link mt-4"
                                onClick = {() => {jumpTo("projects")}}
                            >
                                <div className="circle-point">
                                    <div className="circle-point-inside"></div>
                                </div>
                                <p className="size-45 my-auto ml-4">projects</p>
                            </div>
                            <div className="d-flex flex-row map-link mt-4"
                                onClick = {() => {jumpTo("aboutthissite")}}
                            >
                                <div className="circle-point">
                                    <div className="circle-point-inside"></div>
                                </div>
                                <p className="size-45 my-auto ml-4">about this site</p>
                            </div>

                            <div className="d-flex flex-row map-link mt-4"
                                onClick = {() => {jumpTo("findme")}}
                            >
                                <div className="circle-point">
                                    <div className="circle-point-inside"></div>
                                </div>
                                <p className="size-45 my-auto ml-4">find me</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;