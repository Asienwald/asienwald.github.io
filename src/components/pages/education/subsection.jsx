import React, { useEffect, useState } from 'react';
import '../../../css/misc.css';

function SubSection(props) {

    const [pts, setPts] = useState([]);

    const initBulletPts = () => {
        let _pts = []
        props.bulletPoints.map((val, index) => {
            // console.log(val);
            _pts.push(<div className="col-12 col-lg-6">
                    <ul>
                        <li>{val}</li>
                    </ul>
                </div>)
        })
        setPts(_pts);
    }

    useEffect(() => {
        initBulletPts();
    }, [])

    return (
        <div className="sub-section">
            <p className="color-cyan mb-1">{props.sectionTitle}</p>
            <hr/>
            <div className="row size-25">
                {pts}
                {/* <div className="col-12 col-lg-6">
                    <ul>
                        <li>director's honour roll</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-6">
                    <ul>
                        <li>fundamentals of programming (dist)</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-6">
                    <ul>
                        <li>mathematics (dist)</li>
                    </ul>
                </div>
                <div className="col-12 col-lg-6">
                    <ul>
                        <li>fundamentals of computing (dist)</li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
}

export default SubSection;