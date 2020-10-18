import React from 'react';
import '../../../css/education.css';
import School from './school';
import SubSection from './subsection';


function SPAcademicComponent() {
    return (
        <div>
            <p>cumulative gpa: 3.955</p>
            <SubSection
                sectionTitle = "year 1"
                bulletPoints = {[
                    "director's honour roll",
                    'fundamentals of programming (dist)',
                    "mathematics (dist)",
                    "fundamentals of computing (dist)"
                ]}
            />

            <SubSection
                sectionTitle = "year 2"
                bulletPoints = {[
                    "narrative thinking (dist)",
                    "infocomm security (dist)",
                    "linux administration and security (dist)"
                ]}
            />
        </div>
    );
}



function Education() {
    return (
        <div className="education">
            <School
                schoolName = "singapore polytechnic"
                studyPeriod = "2019-current"
                studyScope = "diploma in infocomm security management"
                academicComponent = {<SPAcademicComponent/>}
                ccaList = {[
                    `school of computing ambassadors (head of r&d team)`,
                    "DISM gryphons (member)",
                    "seed student interest group (member)",
                    "symphonic band (member)",
                    "japanese cultural club (member)"
                ]}
                awardsList = {[
                    "dso diploma scholarship",
                    "singapore poly outstanding talent programme (SPOT)"
                ]}
            /> 

            <div className="mt-5"></div>

            <School
                schoolName="chung cheng high (yishun)"
                studyPeriod = "2015-2019"
                studyScope = "express stream"
                academicComponent = {<SubSection
                    sectionTitle = "gce o levels 2018"
                    bulletPoints = {[
                        "raw l1r5 - 6",
                        "top scorer (cchy) 2018",
                        "8 distinctions"
                    ]}
                />}
                ccaList = {[
                    "symphonic band (basses section leader) - i play the euphonium!"
                ]}
                awardsList = {[
                    "student of the year 2018",
                    "EDUSAVE certificate of academic achievement 2015, 2016",
                    "CDC-CCC education merit award 2016",
                    "EDUSAVE scholarship 2017, 2018",
                    "singapore youth festival, silver awar"
                ]}
            />
            
        </div>
    );
}

export default Education;