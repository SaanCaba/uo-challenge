import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextApp } from "../../appContext/appContext";
import GoBackBtn from "../../components/GoBackBtn";
import MainContainer from "../../components/MainContainer";
import NextStepBtn from "../../components/NextStepBtn";
import PlanItem from "../../components/PlanItem/index";
import SideBarSteps from "../../components/SideBarSteps/index";
import { dataPlans } from "../../data/dataPlan";
import { type Plans } from "../../models/plans.models";

import "./index.scss";

function SecondStep(): JSX.Element {
    const [plansState, setPlans] = useState<Plans[]>([]);
    const { addPlan } = useContextApp();

    useEffect(() => {
        if (localStorage.getItem("plans") !== null) {
            const plans: null | string = localStorage.getItem("plans");
            if (plans !== null) {
                const plansParsed: Plans[] = JSON.parse(plans);
                setPlans(plansParsed);
            }
        } else {
            setPlans(dataPlans);
        }
    }, []);

    const handleChangePlan = (id: number): void => {
        const mappedPlans = plansState
            .map((el) => {
                return {
                    ...el,
                    selected: false,
                };
            })
            .map((el) => {
                if (el.id === id) {
                    addPlan(el);
                    return {
                        ...el,
                        selected: true,
                    };
                } else {
                    return {
                        ...el,
                        selected: el.selected,
                    };
                }
            });
        setPlans(mappedPlans);
        localStorage.setItem("plans", JSON.stringify(mappedPlans));
    };
    return (
        <MainContainer>
            <SideBarSteps currentStep={2} />
            <section className="sectionSelectPlan">
                <div className="divTitlePlan">
                    <h1>Select your plan</h1>
                    <span>
                        You have the option of monthly or yearly billing
                    </span>
                </div>
                <div className="divSelectPlan">
                    <div className="divPlans">
                        {plansState.map((plan) => {
                            return (
                                <PlanItem
                                    handleChangePlan={handleChangePlan}
                                    key={plan.id}
                                    plan={plan}
                                />
                            );
                        })}
                    </div>
                    <div className="divBtns">
                        <GoBackBtn />
                        <Link to={"/third_step"}>
                            <NextStepBtn />
                        </Link>
                    </div>
                </div>
            </section>
            <div className="divBtnsMobile">
                <GoBackBtn />
                <Link to={"/third_step"}>
                    <NextStepBtn />
                </Link>
            </div>
        </MainContainer>
    );
}

export default SecondStep;
