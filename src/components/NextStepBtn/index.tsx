import React, { ButtonHTMLAttributes } from "react";

import "./index.scss";

type ButtonNativeTypes = ButtonHTMLAttributes<HTMLButtonElement>;

type Props = ButtonNativeTypes;

const NextStepBtn = ({ ...btnProps }: Props): JSX.Element => {
    return (
        <button className="btnNextStep" {...btnProps}>
            Next step
        </button>
    );
};

export default NextStepBtn;
