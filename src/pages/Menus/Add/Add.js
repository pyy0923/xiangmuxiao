import React, { Component } from 'react';
import {Button, message} from 'antd'
import {AddMenus} from  '../../../api/menus'
import styles from './add.module.less'


class addMenus extends Component{
  constructor(){
    super()
    this.state={
      mid:'01',
      name:'红烧肉',
      caixi:'鲁菜',
      miaoshu:'好吃',
      price:'43元'
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
         菜号: <input type='text' value={mid} 
          onChange={(e)=>{
            this.setState({mid:e.target.value})
          }}
          />
          <br/>
          菜名: <input type='text' value={name} 
          onChange={(e)=>{
            this.setState({name:e.target.value})
          }}
          />
          <br/>
          菜系: <input type='text' value={caixi} 
          onChange={(e)=>{
            this.setState({caixi:e.target.value})
          }}
          />
          <br/>
          描述: <input type='text' value={miaoshu} 
          onChange={(e)=>{
            this.setState({miaoshu:e.target.value})
          }}
          />
          <br/>
          价格: <input type='text' value={price} 
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
