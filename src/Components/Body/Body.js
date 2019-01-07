import React from 'react';
import {Route,Switch} from 'react-router-dom';
import  Main from '../Main/Main.js';
import  DataForm from '../DataForm/DataForm.js';

export default class MainBody extends React.Component{

    render()
    {
        return (

<Switch>
<Route path='/DataForm' component={DataForm}/>
<Route  exact path='' component={Main}/>
<Route  exact path='/' component={Main}/>
</Switch>

        )
    }
}