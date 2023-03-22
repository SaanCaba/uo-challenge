import React, { ButtonHTMLAttributes } from "react";

import "./index.scss";

type ButtonNativeTypes = ButtonHTMLAttributes<HTMLButtonElement>;

type Props = ButtonNativeTypes;

const GoBackBtn = ({ ...btnsprops }: Props) => {
    return <button {...btnsprops}></button>;
};

export default GoBackBtn;
