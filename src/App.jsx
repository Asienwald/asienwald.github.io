import React from 'react';
import logo from './logo.svg';
import './App.css';

// components
import Background from './components/common/background';
import Parallax from './components/common/parallax';

import Player from './components/common/player';
import Panel from './components/common/panel';

import Ground from './components/common/ground';

function App() {
  return (
    <div className="App">

      <Panel></Panel>

      <Player isCenter={true} isRunning={true}>
      
      </Player>

      {/* <Ground isMoving={false}></Ground> */}
      <Ground 
        style={{overflow: "hidden"}}
        moving={true}
      ></Ground>
      
      <Background
        moving={true}
      ></Background>


      {/* <Parallax image={"/assets/forest_parallax_4_small.png"} index={7} moving={true} /> */}

    </div>
  );
}

export default App;
