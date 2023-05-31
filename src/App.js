import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: "",
      result: "",
      nsd_result: ""
    };
    this.number = this.number.bind(this);
    this.operator = this.operator.bind(this);
    this.ac = this.ac.bind(this);
    this.acc = this.acc.bind(this);
    this.equal = this.equal.bind(this);
  }

  number(event) {
    const num = event.target.innerText;
    this.setState({
      result: this.state.result + num
    });
  }

  operator(event) {
    const num = event.target.innerText;
   
    this.setState({
      result: this.state.result + num
    });
  
  }

  acc() {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  }

  ac() {
    this.setState({
      result: "",
      nsd_result:""
    });
  }

  equal() {
    this.setState({
      nsd_result:  eval(this.state.result),
      
    });
  }

  render() {
    return (
      <div className="App">
        <div className="all">
          <input className="result" id="one" value={this.state.nsd_result} />
          <br />
          <input className="result" id="two" value={this.state.result} />
          <div id="calculator-body">
            <button onClick={this.ac} className="operator">AC</button>
            <button onClick={this.acc} className="operator">DEL</button>
            <button onClick={this.operator} className="operator">%</button>
            <button onClick={this.operator} className="operator">/</button>
            <button onClick={this.number} className="number">7</button>
            <button onClick={this.number} className="number">8</button>
            <button onClick={this.number} className="number">9</button>
            <button onClick={this.operator} className="operator">*</button>
            <button onClick={this.number} className="number">4</button>
            <button onClick={this.number} className="number">5</button>
            <button onClick={this.number} className="number">6</button>
            <button onClick={this.operator} className="operator">-</button>
            <button onClick={this.number} className="number">1</button>
            <button onClick={this.number} className="number">2</button>
            <button onClick={this.number} className="number">3</button>
            <button onClick={this.operator} className="operator">+</button>
            <button onClick={this.number} className="number">0</button>
            <button onClick={this.operator} className="number">.</button>
            <button onClick={this.equal} id="equal">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
