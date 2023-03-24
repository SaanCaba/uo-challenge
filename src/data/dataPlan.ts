import advancedIcon from "../assets/icon-advanced.png";
import arcadeIcon from "../assets/icon-arcade.png";
import videogamesIcon from "../assets/icon-pro.png";
import { Plans } from "../models/plans.models";

export const dataPlans : Plans[]= [
    {
        type:'Arcade',
        price:90,
        icon:arcadeIcon,
        selected:true,
        id:1
    },
    {
        type:'Advanced',
        price:120,
        icon:advancedIcon,
        selected:false,
        id:2
    },
    {
        type:'Pro',
        price:150,
        icon:videogamesIcon,
        selected:false,
        id:3
    }
]