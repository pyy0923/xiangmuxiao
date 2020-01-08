import React,{Component,Fragment} from 'react';
import {Button,message} from 'antd'
import {UpdateBooks} from '../../../api/books'

class updateBook extends Component{
    constructor(props){
        super()
        // this.state={...this.props.updataData}
        this.state={...props.updataData}
    }
    componentWillReceiveProps(props){
        // console.log('props改变',props)

        this.setState({...props.updataData})
        // console.log('state改变',this.state)
      }
    submit=()=>{
        // console.log('修改后',this.state)
        UpdateBooks(this.state)
            .then((data)=>{
                message.success('修改完成')
                this.props.refreshList()
            })
    }
    render(){
        let {bid,name,category,desc,price} = this.state
        return (
            <Fragment>
                id: {bid}
                <br />
                图书名: <input type='text' value={name} onChange={(e)=>{this.setState({name:e.target.value}) }}/><br/>
                图书分类：<input type='text' value={category} onChange={(e)=>{this.setState({category:e.target.value})}}/><br />
                描述：<input type='text' value={desc} onChange={(e)=>{this.setState({desc:e.target.value})}}/><br/>
                价格：<input type='text' value={price} onChange={(e)=>{this.setState({price:e.target.value})}} /><br/>
                <Button type='primary' onClick={this.submit}>修改</Button>
            </Fragment>
        )
    }
}

export default updateBook