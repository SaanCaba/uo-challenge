import React from "react";
import AlertIcon from "../IconsSvg/Alert";

import "./index.scss";

const Alert = () => {
    return (
        <section className="sectionAlert">
            <div className="divIconTitle">
                <AlertIcon />
                <h1>Thank you!</h1>
            </div>
            <div className="divContP">
                <p>
                    Thanks for confirming your subscription! We hope you have
                    using our platform. If you ever need support, please feel
                    free to email us at support@loremgaming.com.
                </p>
            </div>
        </section>
    );
};

export default Alert;
