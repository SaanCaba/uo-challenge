import React, { createContext, useContext, useEffect, useState } from "react";
import { dataPlans } from "../data/dataPlan";
import { AddOns } from "../models/addons.model";
import {
    AllPacksContext,
    StateAppContext,
    StateContext,
} from "../models/context.model";
import { Plans } from "../models/plans.models";

export const ContextApp = createContext<StateContext>({
    plan: null,
    addons: null,
    addPlan() {},
    addAddon() {},
    deleteAddon() {},
    getAllPacks() {
        return null;
    },
    getTotalPrice() {
        return null;
    },
});

export const useContextApp = (): StateContext => {
    const context = useContext<StateContext>(ContextApp);
    return context;
};

interface Props {
    children: React.ReactNode;
}

export function ContextProvider({ children }: Props): React.ReactElement {
    const [plan, setStep2] = useState<null | Plans>(null);
    const [addons, setStep3] = useState<AddOns[]>([]);

    const addPlan = (plan: Plans): void => {
        setStep2(plan);
    };

    const addAddon = (addon: AddOns) => {
        setStep3((val) => [...val, addon]);
        console.log(addons);
    };

    const deleteAddon = (id: number) => {
        let filterAddons = addons.filter((el) => el.id !== id);
        setStep3(filterAddons);
    };

    const getAllPacks = () => {
        const packs: Plans[] = JSON.parse(
            localStorage.getItem("plans") as string
        );
        const addons: AddOns[] = JSON.parse(
            localStorage.getItem("addons") as string
        );
        if (packs === null) {
            const defaultPlans: Plans[] = dataPlans.filter(
                (plan) => plan.selected
            );
            return defaultPlans;
        }
        const selectedPlans = packs.filter((plan) => plan.selected);
        const selectedAddons = addons?.filter((addon) => addon.selected);
        if (selectedAddons === undefined) {
            return selectedPlans;
        }
        const allSelectedPacks: AllPacksContext[] = [
            ...selectedPlans,
            ...selectedAddons,
        ];
        return allSelectedPacks;
    };

    const getTotalPrice = () => {
        const allPacks = getAllPacks();
        console.log(allPacks);
        let total = allPacks.reduce((a, v) => a + v.price, 0);
        return total;
    };

    return (
        <ContextApp.Provider
            value={{
                plan,
                addons,
                addPlan,
                addAddon,
                deleteAddon,
                getAllPacks,
                getTotalPrice,
            }}
        >
            {children}
        </ContextApp.Provider>
    );
}
