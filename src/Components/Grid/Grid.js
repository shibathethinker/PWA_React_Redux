import React from 'react';
import ReactDom from 'react-dom';
import propTypes from 'prop-types';
import  './Grid.css';
import { debug } from 'util';


export class Grid extends React.Component{

constructor(props)
{
    super(props);
    this.headerArr=[];
    this.tableBody=[];
    this.optionList=[];
    this.paginationFooterList=[];

    this.onFocus=this.onFocus.bind(this);
    this.onType=this.onType.bind(this);
    this.onClickTableHeader=this.onClickTableHeader.bind(this);
    this.filteredProdList=this.props.prodList;

    this.state={value:'',sortOder:'#icon-sort-amount-asc'}; 
}



onFocus(e)
{
    e.target.parentNode.classList.toggle('rowSelected');
}

onFocusRemove(e)
{
    e.target.parentNode.classList.toggle('rowSelected');
}


onClickTableHeader(e)
{
debugger;
const val=e.target.nextSibling.childNodes[0].getAttribute('xlink:href');
if(val==='#icon-sort-amount-asc')
this.setState({sortOder:'#icon-sort-amount-desc'});
else
this.setState({sortOder:'#icon-sort-amount-asc'});

}

onType(e)
{
    const tempArr=[];
    this.setState({value:e.target.value.trim()});
     const filterText=e.target.value.trim();
if (filterText!==''){
for(let item of this.filteredProdList)
{
    const newLocal = item["Name"].indexOf(filterText) >= 0;
    if(newLocal)
    tempArr.push(item);    
}

this.filteredProdList=tempArr;
                    }
               else
              this.filteredProdList=this.props.prodList;
}

componentDidMount()
{
   
}

createTable()
{
this.headerArr= this.props.headerList.map((item,index)=>(
<th key={index} >
<p onClick={this.onClickTableHeader}  style={{display:'inline'}}>{item}</p>
<svg className="icon"><use xlinkHref={this.state.sortOder}></use></svg>
</th>
));

this.tableBody=this.filteredProdList.map((item,index)=>(
<tr key={index}  onMouseOver={this.onFocus} onMouseOut={this.onFocusRemove}>
    {Object.keys(item).map((key,index)=>(<td key={index}>{item[key]}</td>))}
</tr>
))

this.optionList=this.props.paginationList.map((item,index)=>(
    <option key={index}>  
    {item}
    </option>
))



}

    render(){
this.createTable();

return ((<div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
<div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
<input id='gridFilterText' placeholder="filter text here....." style={{width:'50%',height:'25px',borderRadius:'4px'}} onChange={this.onType} value={this.state.value}></input>
<select style={{borderRadius:'4px'}}>{this.optionList}</select>
</div>
<table data-testid='gridMainTable' id='gridMainTable' style={{flex:'0.5',borderRadius:'4px',boxShadow:'-1px 3px 4px 0px black'}}>
    <thead style={{textDecoration:'underline'}}>
        <tr>
{this.headerArr}
        </tr>
 </thead>
 <tbody>
{this.tableBody}

</tbody>
</table>
<div>
    <table>
        <tbody>
            <tr>
          <td className='paginationStyle'>1</td>
          <td className='paginationStyle'>2</td>
        </tr>
    </tbody>
    </table>
    </div>
</div>));      

    }
}

Grid.propTypes={
 prodList:propTypes.array.isRequired  
}