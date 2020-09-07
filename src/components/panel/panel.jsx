import React from "react"
import './panel.css'
import Button from '../button/button'
import ColorPicker from '../colorPicker/colorPicker'
import { faCoffee, faBrush, faFill, faEraser, faRecycle, faDownload, faUpload, faTrash, faSave } from "@fortawesome/free-solid-svg-icons";


class Panel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            brushSize: 5,
            brushColor: "#000000",
            active: "Brush",
            canvasColor: "#fffff"
        }
    }

    brushRangeOnchange = (e) =>{
        this.setState({brushSize: e.target.value})
        if(this.state.active === "Brush"){
            this.brushCallback(e.target.value,this.state.brushColor)
        }else {
            this.brushCallback((e.target.value)*2,this.state.canvasColor)
        }
    }

    canvasColorPickerCallback = (value)=>{
        let canvas = document.getElementById("myCanvas")
        canvas.style.backgroundColor = value
        this.setState({canvasColor: value})
    }

    brushColorCallback = (value)=>{
        this.setState({brushColor:value})
        this.brushCallback(this.state.brushSize, value)
     
    }

    brushCallback = (size,color) =>{
        alert(color)
        return this.props.brushInfo({
            size: size,
            color: color
       })
    }


    brushToggleCallaback = (activeBtn) => {
        this.setState({active: activeBtn})
    }

    BrushSizePanel = ()=>{
        if(this.state.brushSize < 10){
            return `0${this.state.brushSize}`
        }
        return this.state.brushSize
    }

    onClickEraserHandler = (e)=>{
        this.brushToggleCallaback(e)
        this.brushCallback(this.state.brushSize,this.state.canvasColor)
    }

    render(){
        return(
            <div className="top-bar">
                <Button id="active-id" title={"Active"} text ={this.state.active} />
                <div className="brush">
                   <Button title={"Brush"} icon={faBrush} onclick={(e) => this.brushToggleCallaback(e)}/>
                   <ColorPicker onchangeColor={(value)=> this.brushColorCallback(value)}/>
                    <span>{this.BrushSizePanel()}</span>
                   <input type="range" value={this.state.brushSize} min="1" max="10" onChange={e => this.brushRangeOnchange(e)} id="BrushSizeSlider-id"/>
                </div>
                <Button title={"Fill"} icon={faFill}/>
                <ColorPicker defaultValue={"#ffffff"} onchangeColor={(value)=> this.canvasColorPickerCallback(value)}/>
                <Button title={"Eraser"} icon={faEraser} onclick={(e) => this.onClickEraserHandler(e)}/>
                <Button title={"Refresh"} icon={faRecycle}/>
                <Button title={"Brush"} icon={faDownload}/>
                <Button title={"Brush"} icon={faUpload}/>
                <Button title={"Clear"} icon={faTrash}/>
                <Button title={"Save"} icon={faSave}/>
            </div>
        )
    }
}

export default Panel
