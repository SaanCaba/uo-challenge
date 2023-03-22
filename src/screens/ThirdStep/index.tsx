import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddOn from "../../components/AddOnsItem";
import GoBackBtn from "../../components/GoBackBtn";
import MainContainer from "../../components/MainContainer";
import NextStepBtn from "../../components/NextStepBtn";
import SideBarSteps from "../../components/SideBarSteps";
import { dataAddOns } from "../../data/dataAddOns";
import { AddOns } from "../../models/addons.model";

import "./index.scss";

const ThirdStep = (): JSX.Element => {
    const [addOns, setAddons] = useState<AddOns[]>(dataAddOns);
    return (
        <MainContainer>
            <SideBarSteps currentStep={3} />
            <section className="sectionAddOns">
                <div className="divTitle">
                    <h1>Pick add-ons</h1>
                    <span>Add-ons help enhance your gaming experience</span>
                </div>
                <div className="divContentAddons">
                    <div className="divAddonContainer">
                        {addOns.map((addon) => {
                            return <AddOn addon={addon} />;
                        })}
                    </div>
                    <div className="divBtns">
                        <GoBackBtn />
                        <Link to={"/fourth_step"}>
                            <NextStepBtn />
                        </Link>
                    </div>
                </div>
            </section>
            <div className="divBtnsMobile">
                <GoBackBtn />
                <Link to={"/fourth_step"}>
                    <NextStepBtn />
                </Link>
            </div>
        </MainContainer>
    );
};

export default ThirdStep;
