import React from 'react';
import Player from '../../common/player';
import '../../../css/misc.css';
import '../../../css/playerstats.css';


function PlayerStats(props) {

    return (
        <div className="player-stat">
            <div className="row">
                <div className="col-12 col-lg-4 text-center">
                    <Player
                        isCenter={false}
                        isRunning = {false}
                        className="red"
                    />
                    <p className="mt-4 size-50 color-orange">Lv. 1</p>
                </div>
                <div className="col-12 col-lg-8">
                    <div className="orange-panel size-30 red text-white text-left">
                        <p>player name: kar wei</p>

                        <div className="d-flex flex-row">
                            <p>sex: f</p>
                            <p className="tab">age: 18</p>
                        </div>
                        <p>occupation: it student at singapore polytechnic</p>
                        <p>current status:<br/><span className="size-25">fragile, handle with care</span></p>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12 col-lg-4 text-center">
                    <div className="orange-panel size-25 text-white text-left p-3">
                        <p className="size-35 color-green mb-1">likes</p>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <ul className="">
                                    <li>mentaiko sushi</li>
                                    <li>JROCK</li>
                                    <li>guitars</li>
                                    <li>cats</li>
                                </ul>
                            </div>
                        </div>

                        <p className="size-35 color-purple mb-1 mt-3">dislikes</p>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <ul className="">
                                    <li>bugs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-8">
                    <div className="orange-panel size-25 red text-white text-left p-3 player-skills">
                        <p className="color-lightblue size-35 mb-0">skills</p>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <ul>
                                    <li>reactjs</li>
                                    <li>ui/ux design</li>
                                    <li>android studio</li>
                                    <li>unity</li>
                                    <li>nodejs</li>
                                    <li>python</li>
                                </ul>
                            </div>

                            <div className="col-12 col-lg-6">
                                <ul>
                                    
                                    <li>infocomm security</li>
                                    <li>ethical hacking</li>
                                    <li>project management</li>
                                    <li>leadership</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerStats;