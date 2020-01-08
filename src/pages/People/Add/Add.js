import React, { Component } from 'react';
import {Button, message} from 'antd'
import {AddPeople} from  '../../../api/people'
import styles from './add.module.less'


class Addpeople extends Component{
  constructor(){
    super()
    this.state={
      sid:'201541120140',
      name:'李四',
      fad:'经管',
      grade:'15级',
      time:'15',
      num:"2"
    }
  }
  submit=()=>{
    AddPeople(this.state)
    .then(()=>{message.success('添加ok',1)})
    .catch((err)=>{ message.error('添加失败',1)})
  }
  render(){
    let {sid,name,fad,grade,time,num} = this.state
    return (
      <div className={styles.box}>
        <div className={styles.kuang}>
         学号: <input type='text' value={sid} 
          onChange={(e)=>{
            this.setState({sid:e.target.value})
          }}
          />
          <br/>
          姓名: <input type='text' value={name} 
          onChange={(e)=>{
            this.setState({name:e.target.value})
          }}
          />
          <br/>
          院系: <input type='text' value={fad} 
          onChange={(e)=>{
            this.setState({fad:e.target.value})
          }}
          />
          <br/>
          年级: <input type='text' value={grade} 
          onChange={(e)=>{
            this.setState({grade:e.target.value})
          }}
          />
          <br/>
          学习时长: <input type='text' value={time} 
          onChange={(e)=>{
            this.setState({time:e.target.value})
          }}
          />
          <br/>
          违纪次数: <input type='text' value={num} 
          onChange={(e)=>{
            this.setState({num:e.target.value})
          }}
          />
          <br/>

          <Button type='primary' onClick={this.submit} className={styles.btn}>添加</Button>
          </div>
      </div>
    );
  }
}
export default Addpeople;
