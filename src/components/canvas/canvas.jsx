import React from 'react'
import './canvas.css'

class Canvas extends React.Component{
    canvas = null;
    context = null;
    constructor(props){
        super(props)
        this.state = {
            isMouseDown: false
        }
    }

    onMouseDownHandler = (e) =>{
        this.setState({isMouseDown:true})
        const currentPosition = this.mousePosition(e);
        this.context.moveTo(currentPosition.X, currentPosition.y)
        this.context.beginPath();
        this.context.lineWidth = this.props.brushSize;
        this.context.lineCap = 'round'
        this.context.strokeStyle = this.props.brushColor
    }

    onMouseMoveHandler = (e) =>{
        if (this.state.isMouseDown){
            const currentPosition = this.mousePosition(e)
            this.context.lineTo(currentPosition.x,currentPosition.y);
            this.context.stroke();
        }
    }

    onMouseUpHandler = (e) => {
        console.log("mouse up")
        this.setState({isMouseDown: false})
    }

    mousePosition = e =>{
        this.canvas = document.getElementById("myCanvas")
        this.context = this.canvas.getContext('2d')
            const boundaries = this.canvas.getBoundingClientRect();
            let path =  {
                x: e.clientX - boundaries.left,
                y: e.clientY - boundaries.top
            };
            return path;
    }

    render(){
        return(
            <canvas className="canvas" id="myCanvas" width={window.innerWidth} height={window.innerHeight-5}
             onMouseDown={e=> this.onMouseDownHandler(e)}
             onMouseUp={e => this.onMouseUpHandler(e)}
             onMouseMove={e => this.onMouseMoveHandler(e)}
             ></canvas>
        );
    }
}

export default Canvas