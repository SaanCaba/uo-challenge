import AdvancedIcon from "../components/Icons/Advanced";
import ArcadeIcon from "../components/Icons/Arcade";
import VideogamesIcon from "../components/Icons/Videogames";
import { Plans } from "../models/plans.models";

export const dataPlans : Plans[]= [
    {
        type:'Arcade',
        price:90,
        icon:ArcadeIcon,
        selected:true,
        id:1
    },
    {
        type:'Advanced',
        price:90,
        icon:AdvancedIcon,
        selected:false,
        id:2
    },
    {
        type:'Pro',
        price:90,
        icon:VideogamesIcon,
        selected:false,
        id:3
    }
]