import React, { Component } from 'react';
import './Main.css';
import {Grid} from '../Grid/Grid.js';
import  FetchService from '../Services/FetchService';
import {connect} from 'react-redux';
import  {dataLoaded} from '../../Actions';
import { isNull } from 'util';

class Main extends Component {

constructor(props)
{
  super(props);
  this.updateState=this.updateState.bind(this);
  this.state={
    items:[],
    isLoaded:false,    
    url:this.props.url===undefined?"http://localhost:3100/posts":this.props.url
  };

}

updateState(result)
{
  this.setState({items:result,isLoaded:true})  
  //Call the action creator to create the action
  //This action will inturn be passed to the dummy reducer
  //The dummy reducer updates the state as passed
  this.props.dataLoaded(result);  
}
 componentDidMount()
{
  FetchService(this.state.url)
    .then((res)=> res.json())
    .then(  (result)=>this.updateState(result)                                   
         ).catch(function(error){console.log(error)});
}

  render() {
    let GridVal;
    if(this.state.isLoaded)
    GridVal=<Grid headerList={['Id','Name','Stock']} prodList={this.state.items} paginationList={[3,5,10]} textPassed=''/>;
    else
    GridVal=<p>Loading....</p>;
    
    return (   
       <div className="App">        
      {GridVal}        
      </div>
    );
  }
}

const mapStateToProps=(state)=>{  
  console.log(state);
return state;
}

export default connect(mapStateToProps,{dataLoaded})(Main) 

