import React,{Component} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Admit from './pages/admit/admit'
import Login from './pages/login/login'


export default class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/login' component={Admit}/>
                </Switch>
            </BrowserRouter>   
        )
    }
}