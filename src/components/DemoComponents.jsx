import React, { useContext, useState } from "react";
import StateContext from "../context";

const Demo = () => {
    const [value, dispatch] = useContext(StateContext);
    const [input, setInput] = useState("");
    const { name } = value;
   
   
    
    const _handleChange = (name) => {
        setInput(name);
    };

    const _handleSubmit = (e, dispatch) => {
        e.preventDefault();
        dispatch({
            type: "CHANGE_NAME",
            name: input,
        });
        setInput("");
    };

  

    return (
        <>
        <form onSubmit={e => _handleSubmit(e, dispatch)}>
            <label>
            <h1>The cat's name is {name}.</h1>
            <input type="text" name="newVictim" placeholder="Enter Name" value={input} onChange={event => _handleChange(event.target.value)}
            />
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Demo;