import React from "react";

function Button (props) {
    const { value, className, onClick, label } = props;
    return (
        <button value={value} className={className} onClick={onClick}>{label}</button>
    )
}

export default Button;