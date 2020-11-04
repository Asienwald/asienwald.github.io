import React, { Component } from 'react';

import Ground from './ground';
import Background from './background';
import BackToWorld from './backtoworld';
import EnvButton from './envbutton';


function Environment() {
    return (
        <div className="w-100 h-100">
            <BackToWorld
                // showBack = {props.showBack}
            />
            
            <Ground
                // moving = {props.moving}
            />
            <Background
                // moving = {props.moving}
            />

            <EnvButton/>
        </div>
    );
}

export default Environment;