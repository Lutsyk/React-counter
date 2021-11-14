import React from "react";
import { useAlert } from "./alert/alertContext";

export default function Main() {

    const {toggle} = useAlert()
    return(
        <>
            <h1>Hi from Context</h1>
            <div>
                <button onClick={toggle} className="btn">Show alert</button>
            </div>
        </>
    )
}