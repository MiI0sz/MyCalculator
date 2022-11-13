import React from "react";

function OperationButtons (props) {
    const { onClick } = props;
    return (
        <div className="operations">
            <button value="plus" className="operations_button plus" onClick={onClick} >+</button>
            <button value="minus" className="operations_button minus" onClick={onClick} >-</button>
            <button value="divide" className="operations_button divide" onClick={onClick} >&divide;</button>
            <button value="multiply" className="operations_button multiply" onClick={onClick} >&times;</button>
            <button value="equal" className="operations_button equal" onClick={onClick} >=</button>
        </div>
    );
}
export default OperationButtons;