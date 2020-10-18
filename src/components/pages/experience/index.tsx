import React from 'react';
import Title from '../../common/title';
import PageWithContent from '../pagewithcontent';
import Position from './position';

function ExperiencePage() {
    return (
        <div>
            <PageWithContent>
                <Title
                    text = "player work experience"
                />
                <Position
                    role = "director"
                    division = "talent development department"
                    organisation = "cyber youth singapore"
                    positionPeriod = "sep 2020 to present"
                    descriptionList = {[
                        "as the director of the talent development department in CYS, i am responsible for ensuring that youths in the cyber youth collective have constant access to opportunities to excel and develop themselves in pursuit of a career in cyber.",
                        "i guide and lead my members in the collective development team and collaboration team in developing and maintaining the talent development matrix (nest), liasing with external organisations and organising cyber events"
                    ]}
                />

                <div className="mt-5"></div>

                <Position
                    role = "student intern"
                    division = "information division"
                    organisation = "dso national laboratories"
                    positionPeriod = "aug 2019 to oct 2019"
                    descriptionList = {[
                        "i served a 2 month internship period in dso national laboratories in my year 1 study in singapore polytechnic.",
                        "my project was on automated red teaming where an ai was built to think and act like a penetration tester. i was mainly tasked with developing the penetration tools used for the project.",
                        "with the aid of my supervisor and peers in dso, i learnt about working in an actual penetration testing environment and further broadened my experience in penetration testing techniques"
                    ]}
                />
            </PageWithContent>
        </div>
    );
}


export default ExperiencePage;