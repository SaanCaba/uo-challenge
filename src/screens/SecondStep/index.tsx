import React, { useState } from "react";
import ArcadeIcon from "../../components/Icons/Arcade";
import MainContainer from "../../components/MainContainer";
import NextStepBtn from "../../components/NextStepBtn";
import PlanItem from "../../components/PlanItem";
import SideBarSteps from "../../components/SideBarSteps";
import { dataPlans } from "../../data/dataPlan";
import { Plans } from "../../models/plans.models";

import "./index.scss";

const SecondStep = (): JSX.Element => {
    const [plans, setPlans] = useState<Plans[]>(dataPlans);
    return (
        <MainContainer>
            <SideBarSteps currentStep={2} />
            <section className="sectionSelectPlan">
                <div className="divTitlePlan">
                    <h1>Select your plan</h1>
                    <span>
                        You have the option of monthlu or yearly billing
                    </span>
                </div>
                <div className="divSelectPlan">
                    <div className="divPlans">
                        {plans.map((plan) => {
                            return <PlanItem plan={plan} />;
                        })}
                    </div>
                    <div className="divBtns">
                        <button>Go Back</button>
                        <NextStepBtn />
                    </div>
                </div>
            </section>
        </MainContainer>
    );
};

export default SecondStep;
