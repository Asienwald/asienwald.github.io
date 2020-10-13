import React, { useEffect, useState } from 'react';
import SubSection from './subsection';

function School(props) {
    const [ccas, setCcas] = useState([]);
    const [awards, setAwards] = useState([]);

    const initCcas = () => {
        let _ccas = [];
        props.ccaList.map((val, index) => {
            _ccas.push(<li>{val}</li>)
        })
        setCcas(_ccas);
    }

    const initAwards = () => {
        let _awards = [];
        props.awardsList.map((val, index) => {
            _awards.push(<li>{val}</li>)
        })
        setAwards(_awards);
    }

    useEffect(() => {
        initCcas();
        initAwards();
    }, [])

    return (
        <div>
            <div className="row text-white text-left">

                <div className="col-12">
                    <h2 className="size-50">{props.schoolName}</h2>
                </div>

                <div className="col-12 col-lg-3 ">
                    <p className="size-30 color-grey">{props.studyPeriod}</p>
                </div>

                <div className="col-12 col-lg-9 ">
                    <p className="size-30 color-grey">{props.studyScope}</p>
                </div>

                <div className="row w-100 m-0 p-0 size-30">
                    <div className="col-12 section">
                        <div className="section-header text-center academic-border">
                            <p className="color-green size-35">academic</p> 
                        </div>
                        
                        <div>
                            {props.academicComponent}
                        </div>
                    </div>
                </div>

                <div className="row w-100 m-0 p-0 size-30">
                    <div className="col-12 section">
                        <div className="section-header text-center cca-border">
                            <p className="color-blue size-35">CCA</p> 
                        </div>
                        
                        <div>
                            <ul>
                                {ccas}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row w-100 m-0 p-0 size-30">
                    <div className="col-12 section">
                        <div className="section-header text-center awards-border">
                            <p className="color-red size-35">awards</p> 
                        </div>
                        
                        <div>
                            <ul>
                                {awards}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default School;