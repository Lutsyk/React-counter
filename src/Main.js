import React from "react";
import { useAlert } from "./alert/alertContext";

export default function Main() {

    const {show} = useAlert()
    return(
        <>
            <h1>Hi from Context</h1>
            <div>
                <button onClick={()=> show('text from Main.js')} className="btn">Show alert</button>
            </div>
        </>
    )
}