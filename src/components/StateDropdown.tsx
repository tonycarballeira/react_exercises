import { useState, useTransition } from "react";
import "./StateDropdown.css";
import { states } from "./states"

export function StateDropdown() {

    const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
    const [selectedStates, setSelectedStates] = useState(
        states.reduce((obj, state) => ({...obj, [state.abbreviation]: false}))    
    );
        console.log("selected states", selectedStates);
    return (
        <fieldset className="state-dropdown">
            <button onClick={() => setIsDropdownDisplayed(prevState => !prevState)}> 
            -- select your states --
            </button>
            
            {isDropdownDisplayed && (
                <div className="panel">
                    {states.map((state) => (
                        <fieldset key={state.abbreviation}>
                            <input 
                                
                                
                                id={state.abbreviation} 
                                type="checkbox" 
                            />
                            <label htmlFor={state.abbreviation}>
                                {state.name}
                            </label>
                        </fieldset>
                    ))}
                </div>
            )}
        </fieldset>
    )
}