import React, { Component,Fragment } from 'react';
import {Table,Pagination,Spin,Button,Popconfirm, message} from 'antd'
import {AddBook} from '../../../api/books'

class GoodsAdd extends Component{
    constructor(){
        super()
        this.state={
            bid:111,
            name:'人生',
            category:'生命科学',
            desc:'让你懂得人生',
            price:'108',
        }
    }
    submit=()=>{
      AddBook(this.state)
      .then(()=>{message.success('添加ok',1)})
      .catch((err)=>{ message.error('添加失败',err)})
    }
    render(){
      let {bid,name,category,price,desc} = this.state
      return (
        <div>
           书号: &nbsp;&nbsp;&nbsp;<input type='text' value={bid} 
            onChange={(e)=>{
              this.setState({bid:e.target.value})
            }}
            />
             <br/>
           书名: &nbsp;&nbsp;&nbsp;<input type='text' value={name} 
            onChange={(e)=>{
              this.setState({name:e.target.value})
            }}
            />
            <br/>
            类别:&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' value={category} 
            onChange={(e)=>{
              this.setState({category:e.target.value})
            }}
            />
            <br/>
            描述:&nbsp;&nbsp;&nbsp; <input type='text' value={desc} 
            onChange={(e)=>{
                this.setState({desc:e.target.value})
            }}
            />
            <br/>
            价格: &nbsp;&nbsp;&nbsp;<input type='text' value={price} 
            onChange={(e)=>{
              this.setState({price:e.target.value})
            }}
            />
            <br/>
  
            <Button type='primary' onClick={this.submit}>提交</Button>
        </div>
      );
    }
  }
  export default GoodsAdd;
  