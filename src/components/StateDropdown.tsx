import { useState } from "react";
import "./StateDropdown.css"

export function StateDropdown() {

    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);


    return (
        <fieldset className="state-dropdown">
            <button 
            onClick={() => setIsDropdownDisplayed(prevState => !prevState)}
            > 
            -- Select your states --
            </button>
            {isDropdownDisplayed && <div className="panel">Hello</div>}
        </fieldset>
    )
}