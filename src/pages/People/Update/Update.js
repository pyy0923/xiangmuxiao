import React from 'react'
import {Button,message} from 'antd'
import {UpdatePeople} from '../../../api/people'
import styles from './Update.module.less'

class PeopleUpdate extends React.Component{
    constructor(props){
        super()
        this.state={...props.updataInfo}
    }
    componentWillReceiveProps(props){
        this.setState({...props.updataInfo})
    }
    submit=()=>{
        UpdatePeople(this.state).then((data)=>{
            message.success('修改成功')
            this.props.refreshList()
        })
    }
    render(){
        let {sid,name,fad,grade,time,num}=this.state
        return(
            <div className={styles.box}>
                学号:<input type='text' value={sid} onChange={(e)=>{this.setState({sid:e.target.value})}} /><br/>
                姓名:<input type='text' value={name} onChange={(e)=>{this.setState({name:e.target.value})}} /><br/>
                院系:<input type='text' value={fad} onChange={(e)=>{this.setState({fad:e.target.value})}} /><br/>
                年级:<input type='text' value={grade} onChange={(e)=>{this.setState({grade:e.target.value})}} /><br/>
                学习时长:<input type='text' value={time} onChange={(e)=>{this.setState({time:e.target.value})}} /><br/>
                违纪次数:<input type='text' value={num} onChange={(e)=>{this.setState({num:e.target.value})}} /><br/>
                <Button type='primary' onClick={this.submit}>修改</Button>
            </div>
        )
    }
}
export default PeopleUpdate