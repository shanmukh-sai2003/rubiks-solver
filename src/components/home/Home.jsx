import React from "react";
import {useNavigate} from "react-router-dom";
import "./Home.css";

function LandingPage() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/solve");
    }

    return (
        <div className="home">
            <div>
                <h1>NAME</h1>
                <button className="startNowBtn" onClick={handleClick}>start now</button>
            </div>
        </div>
    )
}

export default LandingPage;