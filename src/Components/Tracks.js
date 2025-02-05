import React from 'react';
import { Card } from "@mui/material";
import Question from "../Assets/question.svg";
import Health from "../Assets/health.svg";
import Ag from "../Assets/ag.svg"
import Bus from "../Assets/bus.svg";
function Tracks() {
    return (
        <div className="Tracks" id="tracks">
            <h2 className="Tracks-title">tracks</h2>
            <div className="Tracks-Flex">
                {["Health"].map((title) => (
                    <Card
                        style={{ borderRadius: "30px"}}
                        className="Track-Card"
                    >
                        <img
                            className="Track-Logo"
                            src={Health}
                            alt="Health track logo"
                        />
                        <h1 className="Track-Name">{title}</h1>
                        <div className="Track-Text"></div>
                    </Card>
                ))}
                {["Agriculture"].map((title) => (
                    <Card
                        style={{ borderRadius: "30px"}}
                        className="Track-Card"
                    >
                        <img
                            className="Track-Logo"
                            src={Ag}
                            alt="Agriculture track logo"
                        />
                        <h1 className="Track-Name">{title}</h1>
                        <div className="Track-Text"></div>
                    </Card>
                ))}
                {["Business"].map((title) => (
                    <Card
                        style={{ borderRadius: "30px"}}
                        className="Track-Card"
                    >
                        <img
                            className="Track-Logo"
                            src={Bus}
                            alt="Business track logo"
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
