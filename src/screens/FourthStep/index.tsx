import React from "react";
import MainContainer from "../../components/MainContainer";
import SideBarSteps from "../../components/SideBarSteps";

import "./index.scss";

const FourthStep = (): JSX.Element => {
    return (
        <MainContainer>
            <SideBarSteps currentStep={4} />
            <section className="sectionSummary">
                <h1>holaa</h1>
            </section>
        </MainContainer>
    );
};

export default FourthStep;
