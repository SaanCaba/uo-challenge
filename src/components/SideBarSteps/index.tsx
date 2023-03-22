import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

interface Props {
    currentStep: number;
}

const SideBarSteps = ({ currentStep }: Props) => {
    return (
        <section className="sectionSideBarSteps">
            <menu>
                <ol>
                    <li className="liSteps">
                        <Link
                            className={
                                currentStep === 1
                                    ? "currentStep linkOtherStep"
                                    : "stepNotCurrent linkOtherStep"
                            }
                            to="/first_step"
                        >
                            1
                        </Link>
                        <div className="descStep">
                            <span>STEP 1</span>
                            <span>YOUR INFO</span>
                        </div>
                    </li>

                    <li className="liSteps">
                        <Link
                            className={
                                currentStep === 2
                                    ? "currentStep linkOtherStep"
                                    : "stepNotCurrent linkOtherStep"
                            }
                            to="/second_step"
                        >
                            2
                        </Link>

                        <div className="descStep">
                            <span>STEP 2</span>
                            <span>SELECT PLAN</span>
                        </div>
                    </li>

                    <li className="liSteps">
                        <Link
                            className={
                                currentStep === 3
                                    ? "currentStep linkOtherStep"
                                    : "stepNotCurrent linkOtherStep"
                            }
                            to="/third_step"
                        >
                            3
                        </Link>

                        <div className="descStep">
                            <span>STEP 3</span>
                            <span>ADD-ONS</span>
                        </div>
                    </li>

                    <li className="liSteps">
                        <Link
                            className={
                                currentStep === 4
                                    ? "currentStep linkOtherStep"
                                    : "stepNotCurrent linkOtherStep"
                            }
                            to="/fourth_step"
                        >
                            4
                        </Link>

                        <div className="descStep">
                            <span>STEP 4</span>
                            <span>SUMMARY</span>
                        </div>
                    </li>
                </ol>
            </menu>
        </section>
    );
};

export default SideBarSteps;
