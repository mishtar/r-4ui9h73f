import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
    this.repetir = this.repetir.bind(this);
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.repetir} />
        <p className="repeater">{this.state.value}</p>
      </div>
    );
  }

  repetir(event){
    this.setState({value: event.target.value});
  }
}

export default App;
