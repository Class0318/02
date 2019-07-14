import React,{Component} from 'react'
import {From,Input,Icon,Button} from 'antd'
import logo from './images/logo.png'
import './login.less'

const Item = Form.Item
export default class Login extends Component{
    render(){
        return(
            <div className='login'>
                    <header className='login-header'>
                        <img src={logo} alt="logo"/>
                        <h1>React项目：后台管理系统</h1>
                    </header>
                <section className='login-content'>
                    <h3>用户登录</h3>
                    <From onSubmint={this.login} className="login-form">
                        <Item>
                            <Input prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)'}}/>}
                            type="password" placeholder="密码"/>
                            <Input prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)'}}/>}
                            type="userName" placeholder="用户名"/>
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Item>
                    </From> 
                </section>
            </div>
        )
    
    }
}