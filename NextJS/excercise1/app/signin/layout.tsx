import React from "react";
export default function ({children}:{children:React.ReactNode}){
    return(
        <div>
            <div>
                <h1>Hi there!</h1>
            </div>
            {children}
        </div>
    )
}