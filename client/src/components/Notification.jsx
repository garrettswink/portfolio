import React from "react";
import "../style/Notification"

export default function Notification ({message, show}) {
    return (
        show && (
            <div className="notification">
            <p>{message}</p>
            </div>
        )
    )
}