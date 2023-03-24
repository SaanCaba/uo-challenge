import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextApp } from "../../appContext/appContext";
import AddOn from "../../components/AddOnsItem";
import GoBackBtn from "../../components/GoBackBtn";
import MainContainer from "../../components/MainContainer";
import NextStepBtn from "../../components/NextStepBtn";
import SideBarSteps from "../../components/SideBarSteps";
import { dataAddOns } from "../../data/dataAddOns";
import { AddOns } from "../../models/addons.model";

import "./index.scss";

const ThirdStep = (): JSX.Element => {
    const [addOns, setAddons] = useState<AddOns[]>([]);

    useEffect(() => {
        if (localStorage.getItem("addons") !== null) {
            const addons: null | string = localStorage.getItem("addons");
            if (addons !== null) {
                const addonsParsed: AddOns[] = JSON.parse(addons);
                setAddons(addonsParsed);
            }
        } else {
            setAddons(dataAddOns);
        }
    }, []);

    const changeAddonChecked = (id: number) => {
        let changedAddons = addOns.map((addon) => {
            if (addon.id === id) {
                return {
                    ...addon,
                    selected: true,
                };
            } else {
                return {
                    ...addon,
                    selected: addon.selected,
                };
            }
        });
        setAddons(changedAddons);
        localStorage.setItem("addons", JSON.stringify(changedAddons));
    };

    const changeAddonNotChecked = (id: number) => {
        let changedAddons = addOns.map((addon) => {
            if (addon.id === id) {
                return {
                    ...addon,
                    selected: false,
                };
            } else {
                return {
                    ...addon,
                    selected: addon.selected,
                };
            }
        });
        setAddons(changedAddons);
        localStorage.setItem("addons", JSON.stringify(changedAddons));
    };
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
                            return (
                                <AddOn
                                    changeAddonNotChecked={
                                        changeAddonNotChecked
                                    }
                                    changeAddonChecked={changeAddonChecked}
                                    key={addon.type}
                                    addon={addon}
                                />
                            );
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
