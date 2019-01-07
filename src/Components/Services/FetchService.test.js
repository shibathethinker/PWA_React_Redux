import React from 'react';
import Enzyme,{shallow,mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import FetchService from './FetchService';


Enzyme.configure({adapter:new EnzymeAdapter()});

jest.mock('./FetchService');
test('getting data',async (done)=>{

    let returnedData=[];
    FetchService('').then((data)=>{data.json()}).then((dataP)=>{
        returnedData=dataP;     
       done();
       //console.log(returnedData[0]);
    });

   // setTimeout(()=>{;},1000) ;  

})