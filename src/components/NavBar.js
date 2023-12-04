import { useState } from "react";

function Buttons (){
    const buttons = ["Button 1", "Button 2", "Button 3", "Button 4", "Button 5"];
    return (
        <div className="button-column">
            {buttons.map((label, index) => (
                <button key={index} className="column-button">{label}</button>
            ))}
        </div>
    );
}
function NavBar (){

    const [isHovered, setIsHovered] = useState(false)

    return (
    <>
    <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        
            <button className="column-button"> button 0</button>
            { isHovered && (<Buttons/>)}
            <button className="column-button-1"> button </button>
            { isHovered && (<Buttons/>)}
    </div>
    </>
    );
}
export default NavBar;