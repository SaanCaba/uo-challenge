import React from "react";
import { Link } from "react-router-dom";
import MainContainer from "../../components/MainContainer";
import NextStepBtn from "../../components/NextStepBtn";
import SideBarSteps from "../../components/SideBarSteps";

import "./index.scss";

const FirstStep = (): JSX.Element => {
    return (
        <MainContainer>
            <SideBarSteps currentStep={1} />
            <section className="sectionForm">
                <div className="divTitleForm">
                    <h1>Personal info</h1>
                    <span>
                        Please provide your name, email address, and phone
                        number.
                    </span>
                </div>
                <form className="formCont">
                    <div className="contInputFields">
                        <div>
                            <label>Name</label>
                            <input
                                placeholder="e.g. Stephen King"
                                type="text"
                            />
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input
                                placeholder="e.g. stepthenking@lorem.com"
                                type="text"
                            />
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input
                                placeholder="e.g. +1 234 567 890"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="divBtn">
                        <Link to="/second_step">
                            <NextStepBtn type="submit" />
                        </Link>
                    </div>
                </form>
            </section>
            <div className="divBtnMobile">
                <Link to="/second_step">
                    <NextStepBtn type="submit" />
                </Link>
            </div>
        </MainContainer>
    );
};

export default FirstStep;
