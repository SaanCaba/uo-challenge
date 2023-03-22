import React from "react";
import MainContainer from "../../components/MainContainer";
import SideBarSteps from "../../components/SideBarSteps";

import "./index.scss";

const ThirdStep = (): JSX.Element => {
    return (
        <MainContainer>
            <SideBarSteps currentStep={3} />
            <section className="sectionAddOns">
                <h1>holaa</h1>
            </section>
        </MainContainer>
    );
};

export default ThirdStep;
