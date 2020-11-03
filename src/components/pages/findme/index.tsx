import React from 'react';
import PageWithContent from '../pagewithcontent'
import Title from '../../common/title'
import '../../../css/misc.css';
import '../../../css/findme.css';


const FindMePage = () => {
    return (
        <div>
            <PageWithContent>
                <Title
                    text="Find Me"
                />

                <div className="red d-flex flex-row justify-content-start">
                    <i className="fab fa-discord text-white findme-icon" ></i>
                    <i className="fab fa-linkedin findme-icon text-white"></i>
                    <i className="fab fa-github-square findme-icon text-white"></i>
                </div>
            </PageWithContent>
        </div>
    );
};

export default FindMePage;