import React from 'react';
import ReactDOM from 'react-dom';
import './CustomInput.css';
import  'escape-regex';

/**
 * @input 
 * pass custom width, custome label ,custom regex and custom error message
 * 
 */

export default class CustomInput extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={invalid:false,emptyField:true};
        this.onType=this.onType.bind(this);
        
    }

    onType(e)
    {   
        let regex=new RegExp(this.props.regex,'i');     
       let val=!regex.test(e.target.value);
        this.setState({invalid:val});

        if(e.target.value.trim()==='')
        this.setState({emptyField:true});
        else
        this.setState({emptyField:false});
    }

    render(){
        let errorMsg='';
if(this.state.invalid)
errorMsg=<p>{this.props.msg}</p>;
else
errorMsg=<p></p>;

return (
<div className="textBoxContainer">
<input className="textBoxInput" style={this.props.width} onChange={this.onType} data-empty={this.state.emptyField}></input>
<label>{this.props.label}</label>
{errorMsg}
</div>
)

    }
}