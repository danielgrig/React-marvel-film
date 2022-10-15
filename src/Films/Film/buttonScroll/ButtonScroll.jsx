import React from "react";
import './buttonScroll.css'
 
export const ButtonScroll = () => {
    return (
            <button className="scroll-up" onClick={() => window.scroll(0, 0)}></button>
    )
}