import React, { useState } from "react";
import { useContextApp } from "../../appContext/appContext";
import { AddOns } from "../../models/addons.model";

import "./index.scss";

interface Props {
    addon: AddOns;
    changeAddonChecked: (id: number) => void;
    changeAddonNotChecked: (id: number) => void;
}

const AddOn = ({ addon, changeAddonChecked, changeAddonNotChecked }: Props) => {
    const [checked, setChecked] = useState(addon.selected);
    const { addAddon, deleteAddon } = useContextApp();
    const handleChangeCheckbox = () => {
        setChecked(!checked);
        if (checked === true) {
            deleteAddon(addon.id);
            changeAddonNotChecked(addon.id);
        }
        if (!checked) {
            addAddon(addon);
            changeAddonChecked(addon.id);
        }
    };
    return (
        <div
            className={
                checked ? "contAddonItem contAddonItemChecked" : "contAddonItem"
            }
        >
            <div className="divCheckbox">
                <input
                    className="check"
                    type="checkbox"
                    onChange={() => handleChangeCheckbox()}
                    checked={checked}
                />
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
