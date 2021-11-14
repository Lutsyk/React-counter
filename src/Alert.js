import React, {useContext} from "react";
import { AlertContext } from "./App";

export default function Alert() {

    const alert = useContext(AlertContext)

    if(!alert) return null

    return(
        <div className="alert">
            <p>Really really really importent!!!</p>
        </div>
    )
}