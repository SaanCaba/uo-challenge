import { Plans } from "../../models/plans.models";

import "./index.scss";

interface Props {
    plan: Plans;
    handleChangePlan: (id: number) => void;
}

function PlanItem({ plan, handleChangePlan }: Props) {
    return (
        <div
            className={
                plan.selected ? "divPlanCont planSelected" : "divPlanCont"
            }
            onClick={() => handleChangePlan(plan.id)}
        >
            <div className="divIcon">
                <img src={plan.icon} />
            </div>
            <div className="divCharacteristics">
                <span className="planType">{plan.type}</span>
                <span className="planPrice">${plan.price}/yr</span>
                <span className="planMonths">2 months free</span>
            </div>
        </div>
    );
}

export default PlanItem;
