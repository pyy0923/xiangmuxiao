import React from 'react'
import {Button,message} from 'antd'
import {UpdateRegion} from '../../../api/region'
import styles from './Update.module.less'

class MenusUpdate extends React.Component{
    constructor(props){
        super()
        this.state={...props.updataInfo}
    }
    componentWillReceiveProps(props){
        this.setState({...props.updataInfo})
    }
    submit=()=>{
        UpdateRegion(this.state).then((data)=>{
            message.success('修改成功')
            this.props.refreshList()
        })
    }
    render(){
        let {rid,name,desc,postal}=this.state
        return(
            <div className={styles.box}>
                编号:<input type='text' value={rid} onChange={(e)=>{this.setState({rid:e.target.value})}} /><br/>
                地名:<input type='text' value={name} onChange={(e)=>{this.setState({name:e.target.value})}} /><br/>
                简介:<input type='text' value={desc} onChange={(e)=>{this.setState({desc:e.target.value})}} /><br/>
                编码:<input type='text' value={postal} onChange={(e)=>{this.setState({postal:e.target.value})}} /><br/>
               
                <Button type='primary' onClick={this.submit}>修改</Button>
            </div>
        )
    }
}
export default MenusUpdate;