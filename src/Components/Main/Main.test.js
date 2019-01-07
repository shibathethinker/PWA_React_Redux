import React from 'react';
import Enzyme,{shallow,mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Main from './Main.js';


Enzyme.configure({adapter:new EnzymeAdapter()});
jest.mock('../Services/FetchService');


test('!Main loads successfully',(done)=>{
const wrapper=mount(<Main />);
setTimeout(()=>{
wrapper.update();
expect(wrapper.length).toBe(1);
console.log('Fake Service...'+wrapper.debug());
done();
});
}

)