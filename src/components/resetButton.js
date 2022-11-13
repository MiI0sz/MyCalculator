import React from "react";
function ResetButton (props) {
    const { onClick } = props;
    return (
        <button value="C" className="reset_button" onClick={onClick}>C</button>
    )
}
export default ResetButton;