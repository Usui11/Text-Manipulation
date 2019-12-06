import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      fontColor : "black", 
      fontSize:  30 
    };
  }
   changeColor = (value) =>{
     this.setState({
       fontColor:value
     })
   }
   increaseFont = (value) =>{
     this.setState({
       fontSize:value
     })
   }
  render() {
    return (
      <div>
        <p style={{color: `${this.state.fontColor}`, fontSize: `${this.state.fontSize}px`}}>I am Sonam</p>
        <button onClick = {() => this.changeColor('red')}>Red</button>
        <button onClick = {() => this.changeColor('blue')}>Blue</button>
        <button onClick = {() => this.changeColor('yellow')}>Yellow</button>
        <button onClick = {() => this.increaseFont(this.state.fontSize+1)}>Size++</button>
        <button onClick = {() => this.increaseFont(this.state.fontSize-1)}>Size--</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
