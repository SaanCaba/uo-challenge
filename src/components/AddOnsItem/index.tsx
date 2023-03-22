import React from "react";
import { AddOns } from "../../models/addons.model";

import "./index.scss";

interface Props {
    addon: AddOns;
}

const AddOn = ({ addon }: Props) => {
    return (
        <div className="contAddonItem">
            <div className="divCheckbox">
                <input className="check" type="checkbox" />
            </div>
            <div className="divInfoAddon">
                <div className="divContInfo">
                    <span>{addon.type}</span>
                    <span>{addon.desc}</span>
                </div>
                <div className="divContPrice">
                    <span>+${addon.price}/yr</span>
                </div>
            </div>
        </div>
    );
};

export default AddOn;
