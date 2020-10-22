import React, { useContext, useState } from "react";
import StateContext from "../context";


const CatActivity = () => {
    const [value, dispatch] = useContext(StateContext);

    const { activity } = value;
   
   
    
    const _handleClick = (activity) => {
        dispatch({
          type: "SET_ACTIVITY",
          activity,
        });
      };

  

    return (
    <>
        
        <h2>They are {activity}.</h2>
   
        <i>
            <button type="button" onClick={() => _handleClick("napping")}>
                Eating
            </button>
        </i>
        <i>
            <button type="button" onClick={() => _handleClick("playing")}>
                Playing
            </button>
        </i>
        <i>
          <button type="button" onClick={() => _handleClick("eating")}>
                Napping
          </button>
        </i>
    
      
    </>
    )
}

export default CatActivity;