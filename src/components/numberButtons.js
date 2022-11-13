import React from "react";

function NumberButtons (props) {
    const { onClick } = props;
    return (
        <div className="numbers">
            <button value="1" className="numbers_button" onClick={onClick} > 1 </button>
            <button value="2" className="numbers_button" onClick={onClick} > 2 </button>
            <button value="3" className="numbers_button" onClick={onClick} > 3 </button>
            <button value="4" className="numbers_button" onClick={onClick} > 4 </button>
            <button value="5" className="numbers_button" onClick={onClick} > 5 </button>
            <button value="6" className="numbers_button" onClick={onClick} > 6 </button>
            <button value="7" className="numbers_button" onClick={onClick} > 7 </button>
            <button value="8" className="numbers_button" onClick={onClick} > 8 </button>
            <button value="9" className="numbers_button" onClick={onClick} > 9 </button>
            <button value="0" className="numbers_button" onClick={onClick} > 0 </button>
        </div>
    );
}
export default NumberButtons;