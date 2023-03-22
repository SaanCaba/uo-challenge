import React from "react";

import "./index.scss";

interface Props {
    children: React.ReactNode;
}

const MainContainer = ({ children }: Props): JSX.Element => {
    return (
        <main className="mainContainer">
            <div className="divContainerContent">{children}</div>
        </main>
    );
};

export default MainContainer;
