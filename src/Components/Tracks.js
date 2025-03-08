import React from 'react';
import { Card } from "@mui/material";
//import Question from "../Assets/question.svg";
import Health from "../Assets/health.svg";
import Ag from "../Assets/ag.svg"
import Bus from "../Assets/bus.svg";
// import Health from "../Assets/question.svg";
// import Ag from "../Assets/question.svg"
// import Bus from "../Assets/question.svg";
function Tracks() {
    return (
        <div className="Tracks" id="tracks">
            <h2 className="Tracks-title">HackMerced X Tracks</h2>
            <div className="Tracks-Flex">
                {["Health for Social Good by CITRIS"].map((title) => (
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
                {["AgTech by VISTA F3"].map((title) => (
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
                {["Business and Finance by Letta"].map((title) => (
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
