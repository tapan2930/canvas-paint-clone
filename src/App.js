import React from 'react';
import Panel from './components/panel/panel'
import Canvas from './components/canvas/canvas'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      brushColor: "#000000",
      brushSize: 2
    }
  }
  brushCallback = value => {
    this.setState({brushColor : value.color,
                   brushSize: value.size})
  }
  render(){
    return (
      <div className="App">
      <Panel brushInfo={value => this.brushCallback(value)}/>
      <Canvas brushSize = {this.state.brushSize} brushColor = {this.state.brushColor} />
    </div>
    )
    }
}

export default App;
