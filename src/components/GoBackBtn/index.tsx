import React, { ButtonHTMLAttributes } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

import "./index.scss";

type ButtonNativeTypes = ButtonHTMLAttributes<HTMLButtonElement>;

type Props = ButtonNativeTypes;

const GoBackBtn = ({ ...btnsprops }: Props) => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <button onClick={() => goBack()} className="gobackBtn" {...btnsprops}>
            Go back
        </button>
    );
};

export default GoBackBtn;
