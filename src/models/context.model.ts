import AddOn from "../components/AddOnsItem";
import { AddOns } from "./addons.model";
import { Plans } from "./plans.models";

export interface StateContext{
    plans: Plans | null,
    addons: AddOns[] | null
    addPlan: (plan:Plans) => void 
    addAddon:(addon:AddOns) => void
    deleteAddon:(id:number) => void
    getAllPacks:() => AllPacksContext[] | null
    getTotalPrice:() => number | null

}

export interface StateAppContext{
    step2: Plans | null,
    step3: AddOns[] | null
}

export interface AllPacksContext extends Plans, AddOns{}

    