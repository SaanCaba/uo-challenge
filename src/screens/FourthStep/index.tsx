import React, { useEffect, useState } from "react";
import { useContextApp } from "../../appContext/appContext";
import MainContainer from "../../components/MainContainer";
import SideBarSteps from "../../components/SideBarSteps";
import { AllPacksContext } from "../../models/context.model";

import "./index.scss";

const FourthStep = (): JSX.Element => {
    const { getAllPacks, getTotalPrice } = useContextApp();
    const [allPacks, setAllPacks] = useState<AllPacksContext[] | null>(
        getAllPacks()
    );
    const [price, setPrice] = useState(getTotalPrice());
    console.log(price);
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
                                <div>
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
                </div>
            </section>
        </MainContainer>
    );
};

export default FourthStep;
