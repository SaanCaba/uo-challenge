import React from "react";
import { Plans } from "../../models/plans.models";

import "./index.scss";

interface Props {
    plan: Plans;
}

const PlanItem = ({ plan }: Props) => {
    return (
        <div
            className={
                plan.selected ? "divPlanCont planSelected" : "divPlanCont"
            }
        >
            <div className="divIcon">
                <plan.icon />
            </div>
            <div className="divCharacteristics">
                <span className="planType">{plan.type}</span>
                <span className="planPrice">${plan.price}/yr</span>
                <span className="planMonths">2 months free</span>
            </div>
        </div>
    );
};

export default PlanItem;
