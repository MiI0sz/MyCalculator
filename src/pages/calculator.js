import React,  { Component } from "react";
import CalcDisplay from "../components/calcDisplay";
import NumberButtons from "../components/numberButtons";
import OperationButtons from "../components/operationButtons";
import ResetButton from "../components/resetButton";
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

    onNumberClick = (event) => {
        this.setState (prevState => ({
            ...prevState,
            currentValue: prevState.currentValue + event.target.value,
            displayedValue: prevState.currentValue + event.target.value
        }));
    }

    onOperatorClick = (event) => {
        let mathOperationResult = this.executeMathOperation (this.state.result, this.state.operator, this.state.currentValue);
        this.setState ({
            result: mathOperationResult,
            operator: event.target.value,
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
                    <NumberButtons onClick={this.onNumberClick} />
                    <OperationButtons onClick={this.onOperatorClick} />
                    <ResetButton onClick={this.onResetClick} />
                </section>
            </div>
        );
    }
}
export default Calculator;