import React, { useState, useEffect } from 'react';
import '../../../css/experience.css';
import '../../../css/misc.css';

function Position(props) {
    const [descripList, setDescripList] = useState([]);

    const initDescrip = () => {
        let _descrip = [];
        props.descripList.map((val, index) => {
            _descrip.push(<p>{val}</p>)
        })
        setDescripList(_descrip);
    }

    useEffect(() => {
        initDescrip();
    }, [])

    return (
        <div className="position text-left text-white">
            <div>
                <p className="size-40"><span className="color-red">{props.role}</span>, {props.division}</p>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <p className="color-darkpurple size-30">{props.organisation}</p>
                </div>
                
                <div className="col-12 col-lg-6">
                    <p className="color-darkpurple size-30">{props.positionPeriod}</p>
                </div>
            </div>

            <div className='size-25'>
                {descripList}
            </div>
        </div>
    );
}

export default Position;