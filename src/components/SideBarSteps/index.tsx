import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextApp } from "../../appContext/appContext";

import "./index.scss";

interface Props {
    currentStep: number;
    toConfirm?: boolean;
}

const SideBarSteps = ({ currentStep, toConfirm }: Props) => {
    const { validated } = useContextApp();

    return (
        <section className="sectionSideBarSteps">
            <menu>
                <ol>
                    <li
                        className={
                            toConfirm || !validated
                                ? "liSteps toConfirm"
                                : "liSteps"
                        }
                    >
                        <Link
                            className={
                                currentStep === 1
                                    ? "currentStep linkOtherStep"
                                    : "stepNotCurrent linkOtherStep"
                            }
                            to="/first_step"
                        >
                            <span>1</span>
                            <div
                                className={
                                    currentStep === 1 ? "bgCurrentStep" : ""
                                }
                            ></div>
                        </Link>
                        <div className="descStep">
                            <span>STEP 1</span>
                            <span>YOUR INFO</span>
                        </div>
                    </li>

                    <li
                        className={
                            toConfirm || !validated
                                ? "liSteps toConfirm"
                                : "liSteps"
                        }
                    >
                        <Link
                            className={
                                currentStep === 2
                                    ? "currentStep linkOtherStep"
                                    : "stepNotCurrent linkOtherStep"
                            }
                            to="/second_step"
                        >
                            <span>2</span>
                            <div
                                className={
                                    currentStep === 2 ? "bgCurrentStep" : ""
                                }
                            ></div>
                        </Link>

                        <div className="descStep">
                            <span>STEP 2</span>
                            <span>SELECT PLAN</span>
                        </div>
                    </li>

                    <li
                        className={
                            toConfirm || !validated
                                ? "liSteps toConfirm"
                                : "liSteps"
                        }
                    >
                        <Link
                            className={
                                currentStep === 3
                                    ? "currentStep linkOtherStep"
                                    : "stepNotCurrent linkOtherStep"
                            }
                            to="/third_step"
                        >
                            <span>3</span>
                            <div
                                className={
                                    currentStep === 3 ? "bgCurrentStep" : ""
                                }
                            ></div>
                        </Link>

                        <div className="descStep">
                            <span>STEP 3</span>
                            <span>ADD-ONS</span>
                        </div>
                    </li>

                    <li
                        className={
                            toConfirm || !validated
                                ? "liSteps toConfirm"
                                : "liSteps"
                        }
                    >
                        <Link
                            className={
                                currentStep === 4
                                    ? "currentStep linkOtherStep"
                                    : "stepNotCurrent linkOtherStep"
                            }
                            to="/fourth_step"
                        >
                            <span>4</span>
                            <div
                                className={
                                    currentStep === 4 ? "bgCurrentStep" : ""
                                }
                            ></div>
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
