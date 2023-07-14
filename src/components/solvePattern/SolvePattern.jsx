import React, { useState } from "react"; 
import "./SolvePattern.css";

function SolvePattern() {
    const [mouseOver, setMouseOver] = useState(false);
    const [shape, setShape] = useState(0);
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function handleMouseOver(e) {
        // className format of buttons here is - shape 1/shape 2/...
        if(mouseOver === false) {
            const s = e.target.className; // to get the className of the button on which the mouse is hovering
            setShape(parseInt(s[s.length - 1])); // to get the number of the button 
        }

        setMouseOver((prev) => !prev);  
    }
    
    return (
        <div className="solvePattern">
            <div className="solvePatternBtns">
                {arr.map((ele) => {
                    return (
                        <button className={`shape${ele}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>shape {ele}</button>
                    )
                })}
            </div>

            <div className="solvePatternImgs">
                {mouseOver && <img src={require(`../images/rubik_cube${shape % 2 + 1}.png`)} alt=""></img>}
            </div>
        </div>
    )
}

export default SolvePattern;