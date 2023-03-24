import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextApp } from "../../appContext/appContext";
import GoBackBtn from "../../components/GoBackBtn";
import MainContainer from "../../components/MainContainer";
import SideBarSteps from "../../components/SideBarSteps";
import { AllPacksContext } from "../../models/context.model";

import "./index.scss";

const FourthStep = (): JSX.Element => {
    const { getAllPacks, getTotalPrice } = useContextApp();
    const [allPacks] = useState<AllPacksContext[] | null>(getAllPacks());
    const [price] = useState(getTotalPrice());
    return (
        <MainContainer>
            <SideBarSteps currentStep={4} />
            <section className="sectionSummary">
                <div className="divTitle">
                    <h1>Finishing up</h1>
                    <span>
                        Double-check everything looks OK before confiming
                    </span>
                </div>

                <div className="divContAllPacks">
                    <div className="divPacks">
                        {allPacks?.map((el) => {
                            return (
                                <div key={el.id}>
                                    <span>{el.type}</span>
                                    <span>+${el.price}/yr</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="divPrice">
                        <span>Total (per year)</span>
                        <span>${price}/yr</span>
                    </div>
                    <div className="divBtns">
                        <GoBackBtn />
                        <button className="confirmBtn">Confirm</button>
                    </div>
                </div>
            </section>
            <div className="divMobileBtns">
                <GoBackBtn />
                <button className="confirmBtn">Confirm</button>
            </div>
        </MainContainer>
    );
};

export default FourthStep;
