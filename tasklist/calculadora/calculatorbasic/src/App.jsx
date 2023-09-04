
import './App.css'
import React, {Component} from 'react';


class App extends Component{

handleNumberClick = (event) =>{
  const digit = event.target.innerText;
  this.setState ((prevState) =>({

      displayValue: prevState.displayValue === '0' ? digit : prevState.displayValue + digit,

  }));
};

handleOperatorClick = (event) =>{
  const operator = event.target.innerText;
  this.setState({
    prevValue: this.state.displayValue,
    displayValue: '0',
    operator,
  });

};

handleCalculate = () =>{
  const {prevValue,displayValue,operator} = this.state;
  if (prevValue && operator && displayValue){
    const result = eval('${prevValue} ${operator} ${displayValue}');
    this.setState({
      displayValue: result.toString(),
      prevValue: null,
      operator: null,
    });
  }
};



  render(){
    return(
      <div className='calculator'>


            <div className="calculator-buttons">
              <div className="row">
                <button onClick={this.handleNumberClick}>7</button>
                <button onClick={this.handleNumberClick}>8</button>
                <button onClick={this.handleNumberClick}>9</button>
                <button onClick={this.handleOperatorClick}>/</button>
              </div>
              <div className="row">
                <button onClick={this.handleNumberClick}>4</button>
                <button onClick={this.handleNumberClick}>5</button>
                <button onClick={this.handleNumberClick}>6</button>
                <button onClick={this.handleOperatorClick}>*</button>
              </div>
              <div className="row">
                <button onClick={this.handleNumberClick}>1</button>
                <button onClick={this.handleNumberClick}>2</button>
                <button onClick={this.handleNumberClick}>3</button>
                <button onClick={this.handleOperatorClick}>-</button>
              </div>
              <div className="row">
                <button onClick={this.handleNumberClick}>0</button>
                <button onClick={this.handleOperatorClick}>+</button>
                <button onClick={this.handleCalculate}>=</button>
              </div>
            </div>

            <div className="display">{this.state.displayValue}</div>


      </div>
    );
  }

  constructor(props){
    super(props);
    this.state = {

        displayValue: '0',
        prevValue:null,
        operator:null,
    
      };
  }
}


export default App
