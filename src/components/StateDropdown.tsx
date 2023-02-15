import { useState } from "react";
import "./StateDropdown.css"

export function StateDropdown() {

    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);


    return (
        <>
            <button className="state-dropdown"> -- Select your states --</button>
            {isDropdownDisplayed && <div className="panel">Hello</div>}
        </>
    )
}