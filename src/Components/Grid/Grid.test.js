import React from 'react';
import Enzyme,{shallow,mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {Grid} from './Grid';
import { debug } from 'util';
import App from '../App/App';

Enzyme.configure({adapter: new EnzymeAdapter()});
var items=[
  {
    "id": 1,
    "Name": "pen",
    "Stock": "100"
  },
  {
    "id": 2,
    "Name": "pencil",
    "Stock": "150"
  },
  {
    "id": 31,
    "Name": "book",
    "Stock": "100"
  }
];

test('Grid renders',()=>{
const wrapper=shallow(<Grid headerList={['Id','Name','Stock']} paginationList={[3,5,10]} prodList={items}/>)
})

test('Grid does not render without data!',()=>{
  const wrapper=shallow(<Grid headerList={['Id','Name','Stock']} paginationList={[3,5,10]} />)
  expect(wrapper.length.toBe(0));
  })

test('Grid renders 1 table',()=>{
const wrapper=shallow(<Grid headerList={['Id','Name','Stock']} paginationList={[3,5,10]} prodList={items}/>)
expect(wrapper.find('#gridMainTable').length).toBe(1);
})

test('Grid renders all Rows ',()=>{
  const wrapper=shallow(<Grid headerList={['Id','Name','Stock']} paginationList={[3,5,10]} prodList={items}/>)
  const tableWrapper=wrapper.find('#gridMainTable').children();
  const tableBodyWrapper=tableWrapper.find('tbody');

  expect(tableBodyWrapper.find('tbody').children()).toHaveLength(items.length);
  })

  test('Grid renders all headers',()=>{
const wrapper=shallow(<Grid headerList={['Id','Name','Stock']} paginationList={[3,5,10]} prodList={items}/>);
const tableWrapper=wrapper.find('#gridMainTable').children();
const tableHeaderWrapper=tableWrapper.find('th');

expect(tableHeaderWrapper)
  } )

  test('Grid filters properly',()=>{
  const gridWrapper=   mount(<Grid headerList={['Id','Name','Stock']} paginationList={[3,5,10]}  prodList={items}/>);
  const textBoxWrapper=gridWrapper.find('#gridFilterText');
  //console.log(textBoxWrapper.debug());
  textBoxWrapper.simulate('change',{target:{value:'p'}});
  
  gridWrapper.update();
  console.log(textBoxWrapper.debug());
  expect(gridWrapper.find('#gridMainTable').children().find('tbody').children()).toHaveLength(2);
  })

  