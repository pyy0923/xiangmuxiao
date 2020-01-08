import React from 'react'
import styles from './login.module.less'
import {Card,Form,Input,Icon,Checkbox,Button,message} from 'antd'
import { UserLogin } from '../../api/user'
import { setItem } from '../../utils/webStorage'
class Login extends React.Component{
    login=()=>{
        let {validateFields}=this.props.form
        validateFields((err,data)=>{
            if(err) return message.error('输入有误，请重试',1)
            let {userName,passWord}=data
            UserLogin(userName,passWord)
            .then((res)=>{
              setItem('token',res.token)
              setItem('uid',res.uid)
              setItem('rootIds',res.rootList)
                message.success('登录成功,稍后跳转',1,()=>{
                     this.props.history.replace('/admin/home')
                })
            })
            .catch((err)=>{
              // console.log(err)
                message.error('登录失败请重试',1)
            })
        })
    }
    render() {
        let {getFieldDecorator} = this.props.form
        return (
          <div className={styles.login}>
            <Card  title='用户登录' className={styles['login-card']}>
              <Form.Item>   
                {getFieldDecorator('userName',{
                  rules: [{ required: true, message: '用户名不能为空!' },
                          { min:3, message: '用户名不能小于3位字符!' },
                          { max:9, message: '用户名不能大于9位字符!' }]
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="text"
                    placeholder="Username"
                  />
                )}  
              </Form.Item>
              <Form.Item>   
                {getFieldDecorator('passWord',{
                  rules:[{required:true,message:'用户密码不能为空'}]
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />
                )}  
              </Form.Item>
                  <Form.Item >   
                    <Button type="primary" onClick={this.login} >
                      登录
                    </Button>
                  </Form.Item>
              </Card> 
          </div>
        );
      }
}
export default Form.create()(Login)