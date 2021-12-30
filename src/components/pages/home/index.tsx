import React from 'react';
import Panel from '../../common/panel';


function HomePage() {
    return (
        <div>
            <Panel
                title="hello world"
                descrip={<p className="size-40 mb-3 mt-4">i'm <span className="color-red">Kar Wei</span>, an aspiring software engineer and cybersecurity analyst</p>}
                remark="find out more about me!"
                btnString="start"
            />
        </div>
    );
}

export default HomePage;