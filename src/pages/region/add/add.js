import React, { Component } from 'react';
import {Button, message} from 'antd'
import {AddRegions} from  '../../../api/region'
import styles from './add.module.less'


class addRegion extends Component{
  constructor(){
    super()
    this.state={
      rid:'000238',
      name:'昌平',
      desc:'北京昌平e',
      postal:10086
    }
  }
  submit=()=>{
    AddRegions(this.state)
    .then(()=>{message.success('添加ok',1)})
    .catch((err)=>{ message.error('添加失败',1)})
  }
  render(){
    let {rid,name,desc,postal} = this.state
    return (
      <div className={styles.box}>
        <div className={styles.kuang}>
         编号: <input type='text' value={rid} 
          onChange={(e)=>{
            this.setState({rid:e.target.value})
          }}
          />
          <br/>
          地区名: <input type='text' value={name} 
          onChange={(e)=>{
            this.setState({name:e.target.value})
          }}
          />
          <br/>
          地区简介: <input type='text' value={desc} 
          onChange={(e)=>{
            this.setState({desc:e.target.value})
          }}
          />
          <br/>
          邮政编码: <input type='text' value={postal} 
          onChange={(e)=>{
            this.setState({postal:e.target.value})
          }}
          />
          <br/>
          <Button type='primary' onClick={this.submit} className={styles.btn}>添加</Button>
          </div>
      </div>
    );
  }
}
export default addRegion;
