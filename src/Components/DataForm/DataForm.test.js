import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import DataForm from './DataForm.js';
Enzyme.configure({adapter:new EnzymeAdapter()});


test('DataForm loads succesfully',()=>{
const wrapper=shallow(<DataForm/>);
expect(wrapper.length).toBe(1);
})