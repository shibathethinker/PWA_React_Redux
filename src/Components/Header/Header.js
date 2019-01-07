import React from 'react';
import  './Header.css';
import {Link} from 'react-router-dom';


export default class Header extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            selectedId:'first'
        };

        this.clicked=this.clicked.bind(this);
    }

    clicked(e)
    {
        const selectedVal=e.target.parentNode.id;
this.setState({
    selectedId:selectedVal
       });
    }


compStyles={
default:{backgroundColor:'transparent'},
selected:{backgroundColor:'#E91E63'}
}

    render(){
return (<header className="site_header">

    <nav style={{display:'flex'}}>
            <div id='first' className="header_content_text" style={this.state.selectedId==='first'?this.compStyles.selected:this.compStyles.default}>
            <Link to='/' onClick={this.clicked}>Grid</Link></div>

            <div id='sec' className="header_content_text" style={this.state.selectedId==='sec'?this.compStyles.selected:this.compStyles.default}>
            <Link to='/DataForm' onClick={this.clicked}>Admin</Link></div>
    </nav>

</header>)
    }
}

