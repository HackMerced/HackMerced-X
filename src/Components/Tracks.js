import React from 'react';
import { Card } from "@mui/material";
import Question from "../Assets/question.svg";
function Tracks() {
    return (
        <div className="Tracks" id="tracks">
            <h2 className="Tracks-title">tracks</h2>
            <div className="Tracks-Flex">
                {["Tracks", "Coming", "Soon"].map((title) => (
                    <Card
                        style={{ borderRadius: "30px"}}
                        className="Track-Card"
                    >
                        <img
                            className="Track-Logo"
                            src={Question}
                            alt="Mystery logo"
                        />
                        <h1 className="Track-Name">{title}</h1>
                        <div className="Track-Text"></div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Tracks;
