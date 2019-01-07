import React from 'react';
//import ReactDOM  from 'react-dom';
//import Enzyme,{shallow,mount,render} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {BrowserRouter as Router} from 'react-router-dom';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';


//Enzyme.configure({adapter:new EnzymeAdapter()});
/*test('!renders without crashing!!', () => {
    debugger;
    //ReactDOM.render(<App />);
const wrapper=shallow(<App/>);
});*/


test('first header tab clicked', async()=>{
    //jest.useFakeTimers();
    const {getByText, getByTestId, container, asFragment,queryAllByTestId} = render(
        <Router><App /></Router>,
      );
      fireEvent.click(getByText('Grid'));
//await wait();
const greetingTextNode = await waitForElement(() =>
getByTestId('gridMainTable'),
);
//console.log(container.firstChild);
    //expect(container.firstChild).toHaveLength(1);
//expect(greetingTextNode).toHaveLength(1);

})




