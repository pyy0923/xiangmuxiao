import React, { Component } from 'react';
import {Button, message} from 'antd'
import {AddMenus} from  '../../../api/menus'
import styles from './add.module.less'


class addMenus extends Component{
  constructor(){
    super()
    this.state={
      mid:'01',
      name:'张飞',
      caixi:'2019-1-10',
      miaoshu:'1排1列',
      price:'准时到达'
    }
  }
  submit=()=>{
    AddMenus(this.state)
    .then(()=>{message.success('添加ok',1)})
    .catch((err)=>{ message.error('添加失败',1)})
  }
  render(){
    let {mid,name,caixi,miaoshu,price} = this.state
    return (
      <div className={styles.box}>
        <div className={styles.kuang}>
         预约单号: <input type='text' value={mid} 
          onChange={(e)=>{
            this.setState({mid:e.target.value})
          }}
          />
          <br/>
          姓名: <input type='text' value={name} 
          onChange={(e)=>{
            this.setState({name:e.target.value})
          }}
          />
          <br/>
          预约时间: <input type='text' value={caixi} 
          onChange={(e)=>{
            this.setState({caixi:e.target.value})
          }}
          />
          <br/>
          座位号: <input type='text' value={miaoshu} 
          onChange={(e)=>{
            this.setState({miaoshu:e.target.value})
          }}
          />
          <br/>
          备注: <input type='text' value={price} 
          onChange={(e)=>{
            this.setState({price:e.target.value})
          }}
          />
          <br/>
          <Button type='primary' onClick={this.submit} className={styles.btn}>添加</Button>
          </div>
      </div>
    );
  }
}
export default addMenus;
