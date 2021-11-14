import React from "react";

export default function Main( {toggle} ) {
    return(
        <>
            <h1>Hi from Context</h1>
           
            <div>
                <button onClick={toggle} className="btn">Show alert</button>
            </div>
        </>
    )
}