import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContextApp } from "../../appContext/appContext";
import Alert from "../../components/Alert";
import GoBackBtn from "../../components/GoBackBtn";
import MainContainer from "../../components/MainContainer";
import SideBarSteps from "../../components/SideBarSteps";
import { AllPacksContext } from "../../models/context.model";

import "./index.scss";

const FourthStep = (): JSX.Element => {
    const { getAllPacks, getTotalPrice, setValidateUser } = useContextApp();
    const [allPacks] = useState<AllPacksContext[] | null>(getAllPacks());
    const [price] = useState<number | null>(getTotalPrice());
    const [confirm, setConfirm] = useState<boolean>(false);
    const navigate = useNavigate();
    const onConfirm = () => {
        setConfirm(true);

        setTimeout(() => {
            navigate("/first_step");
            localStorage.removeItem("plans");
            localStorage.removeItem("addons");
            localStorage.removeItem("validated");
            setValidateUser(false);
        }, 3000);
    };

    return (
        <MainContainer>
            <SideBarSteps toConfirm={confirm} currentStep={4} />
            {confirm ? (
                <Alert />
            ) : (
                <section className="sectionSummary">
                    <div className="divTitle">
                        <h1>Finishing up</h1>
                        <span>
                            Double-check everything looks OK before confiming
                        </span>
                    </div>

                    <div className="divContAllPacks">
                        <div className="divPacks">
                            {allPacks?.map((el, i) => {
                                return (
                                    <div key={i}>
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
                            <button
                                onClick={() => onConfirm()}
                                className="confirmBtn"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </section>
            )}
            {!confirm && (
                <div className="divMobileBtns">
                    <GoBackBtn />
                    <button onClick={() => onConfirm()} className="confirmBtn">
                        Confirm
                    </button>
                </div>
            )}
        </MainContainer>
    );
};

export default FourthStep;
