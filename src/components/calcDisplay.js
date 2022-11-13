import React from "react";

function CalcDisplay (props) {
    const { value, onChange } = props;
    return (
        <input type="text" name="display_value" className="calc_display" value={value} onChange={onChange} />
    )
}
export default CalcDisplay;