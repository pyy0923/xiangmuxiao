import React, { Component } from 'react';
import {Button, message} from 'antd'
import {chaPeople} from  '../../../api/people'


class ChaPeople extends Component{
  constructor(){
    super()
    this.state={
     kw:'美术'
    }
  }
  submit=()=>{
    chaPeople(this.state)
    .then(()=>{message.success('查询成功',1)})
    .catch((err)=>{ message.error('查询失败',1)})
  }
  render(){
    let {kw} = this.state
    return (
      <div >
         <input type='text' value={kw} 
          onChange={(e)=>{
            this.setState({kw:e.target.value})
          }}
          />
          <Button type='primary' onClick={this.submit} >查询</Button>
      </div>
    );
  }
}
export default ChaPeople;
