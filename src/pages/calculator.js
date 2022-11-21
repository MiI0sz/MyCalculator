import React,  { Component } from "react";
import CalcDisplay from "../components/calcDisplay";
import CalculatorButtons from "../components/CalcultorButtons";
import "./calculator.scss";

class Calculator extends Component {
    constructor (props) {
        super (props);
        this.state = {
            result: 0,
            currentValue: "",
            operator : "equal",
            displayedValue: "0"
        };
    }

    readCurrentValueFromDisplay = event => this.setState({currentValue: event.target.value});
    
    onResetClick = () => {
        this.setState (() => ({
            result: 0,
            currentValue: "",
            operator : "equal",
            displayedValue: "0"
        }));
    }

    onNumberClick = (value) => {
        this.setState (prevState => ({
            ...prevState,
            currentValue: prevState.currentValue + value,
            displayedValue: prevState.currentValue + value
        }));
    }

    onOperatorClick = (operatorType) => {
        let mathOperationResult = this.executeMathOperation (this.state.result, this.state.operator, this.state.currentValue);
        this.setState ({
            result: mathOperationResult,
            operator: operatorType,
            currentValue: "",
            displayedValue: mathOperationResult
        });
    }

    executeMathOperation = (previousResult, operator, currentValue) => {
        console.log ("execute math operation values: " + previousResult + " " + operator + " " + currentValue );
        switch (operator) {
            case "plus":
                return previousResult + parseInt(currentValue);
            case "minus":
                return previousResult - parseInt(currentValue);
            case "divide":
                return previousResult / parseInt(currentValue);
            case "multiply":
                return previousResult * parseInt(currentValue);
            case "equal":
                return currentValue ? parseInt(currentValue) : previousResult;
        };
    }

    render() {
        return (
            <div className="container">
                <section className="calculator">
                    <CalcDisplay value={this.state.displayedValue} onChange={this.readCurrentValueFromDisplay} />
                    <CalculatorButtons numberClick={this.onNumberClick} operatorClick={this.onOperatorClick} resetClick={this.onResetClick} />
                </section>
            </div>
        );
    }
}

export default Calculator;