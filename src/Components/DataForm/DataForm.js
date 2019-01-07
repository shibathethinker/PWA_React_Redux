import React from 'react';
import CustoInput from '../CustomInput/CutomInput';
import './DataForm.css';

export default class DataForm extends React.Component{

    render()
    {
return (<div>
    <CustoInput label='Email Id' width={{width:'50%'}} 
    regex='^[A-Z0-9]+@[A-Z]+\.[A-Z]{2,3}$' 
    msg='*   Improper format'/>
</div>);
    }
}