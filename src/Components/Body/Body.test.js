import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Body from './Body.js';
Enzyme.configure({adapter:new EnzymeAdapter()});

test('Body renders properly',()=>{
const wrapper=shallow(<Body/>);
expect(wrapper.length).toBe(1);
})