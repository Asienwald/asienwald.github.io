import React from 'react';
import Title from '../../common/title';
import PageWithContent from '../pagewithcontent';
import AchievementsModal from './achievementsmodal';
import CarouselSection from './carouselsection'

const AchievementsPage = () => {
    return (
        <div>
            <PageWithContent>
                <Title
                    text="Player achievements"
                />
                <CarouselSection
                    title="awards"
                    carouselItems={[
                        {
                            imageUrl: "/assets/photos/aisp svrp 2019 silver 001.jpg",
                            title: "AiSP SVRP 2019 Silver 1",
                            issuedBy: "Association of Information Security Professionals",
                            descripList: ["NULL for now"],
                            issueDate: "OCT 2019"
                        },
                        {
                            imageUrl: "/assets/photos/cmls cert.png",
                            title: "AiSP SVRP 2019 Silver 2",
                            issuedBy: "Association of Information Security Professionals 2",
                            descripList: ["NULL for now bru", "hey heyyyy"],
                            issueDate: "OCT 2019"
                        }
                    ]}
                />

                <CarouselSection
                    title="certs"
                    carouselItems={[
                        {
                            imageUrl: "/assets/photos/aisp svrp 2019 silver 001.jpg",
                            title: "AiSP SVRP 2019 Silver 1",
                            issuedBy: "Association of Information Security Professionals",
                            descripList: ["NULL for now"],
                            issueDate: "OCT 2019"
                        }
                    ]}
                />

                {/* <AchievementsModal>

                </AchievementsModal> */}
            </PageWithContent>
        </div>
    );
};

export default AchievementsPage;