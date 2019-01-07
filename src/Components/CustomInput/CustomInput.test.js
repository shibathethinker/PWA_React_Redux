import React from 'react';
import Enzyme,{shallow,mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import CustomInput from './CutomInput';


Enzyme.configure({adapter:new EnzymeAdapter()});

test('render custom input!',()=>{
const wrapper=shallow(<CustomInput  label='enter name' width='50%'/>);
expect(wrapper.length).toBe(1);
})

test('empty custom input line color: grey',()=>{
const wrapper=shallow( <CustomInput label='Email Id' width={{width:'50%'}} 
regex='^[A-Z0-9]+@[A-Z]+\.[A-Z]{2,3}$' 
msg='*   Improper format'/>);

const textBoxWrapper=wrapper.find('.textBoxInput');
expect(textBoxWrapper.length).toBe(1);
})


test('show error in invalid input',()=>{
    const wrapper=shallow( <CustomInput label='Email Id' width={{width:'50%'}} 
    regex='^[A-Z0-9]+@[A-Z]+\.[A-Z]{2,3}$' 
    msg='*   Improper format'/>);
    
    //Type invalid value
    const textBoxWrapper=wrapper.find('.textBoxInput');
    textBoxWrapper.simulate('change',{target:{value:'t'}})
    //Update the wrapper
    wrapper.update();
    //Check if error message appears
    const pwrapper=wrapper.find('p');
    console.log(pwrapper.text());
    expect(pwrapper.text().indexOf('Improper format')).toBeGreaterThan(0);
    })


    test('Green color of the textbox after activation',()=>{
        const wrapper=mount( <CustomInput label='Email Id' width={{width:'50%'}} 
        regex='^[A-Z0-9]+@[A-Z]+\.[A-Z]{2,3}$' 
        msg='*   Improper format'/>);
        
        console.log('!............!'+wrapper.getDOMNode().innerHTML);
        })