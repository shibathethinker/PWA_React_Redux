import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Header from './Header';

Enzyme.configure({adapter:new EnzymeAdapter()});

test('Header loads successfully',()=>{
const wrapper=shallow(<Header/>);
expect(wrapper.length).toBe(1);
})




