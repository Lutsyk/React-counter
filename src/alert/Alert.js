import React from "react";
import { useAlert } from "./alertContext";

export default function Alert() {

    const alert = useAlert()

    if(!alert.visible) return null

    return(
        <div className="alert" onClick={alert.hide}>
            <p>{alert.text}</p>
        </div>
    )
}