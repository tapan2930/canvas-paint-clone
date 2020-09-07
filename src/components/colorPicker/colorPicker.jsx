import React from 'react'

class ColorPicker extends React.Component{

    setCallback = (e) => {
        return this.props.onchangeColor(e.target.value)
    }

    render(){
        return(
                <input type="color" id="BrushcolorPicker-id" defaultValue={this.props.defaultValue} onChange={ e => this.setCallback(e)} />  
        );
    }
}

export default ColorPicker