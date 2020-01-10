import React from 'react'
import {Button,message} from 'antd'
import {UpdateMenus} from '../../../api/menus'
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
        UpdateMenus(this.state).then((data)=>{
            message.success('修改成功')
            this.props.refreshList()
        })
    }
    render(){
        let {mid,name,caixi,miaoshu,price}=this.state
        return(
            <div className={styles.box}>
                预约号:<input type='text' value={mid} onChange={(e)=>{this.setState({mid:e.target.value})}} /><br/>
                姓名:<input type='text' value={name} onChange={(e)=>{this.setState({name:e.target.value})}} /><br/>
                预约时间:<input type='text' value={caixi} onChange={(e)=>{this.setState({caixi:e.target.value})}} /><br/>
                座位号:<input type='text' value={miaoshu} onChange={(e)=>{this.setState({miaoshu:e.target.value})}} /><br/>
                备注:<input type='text' value={price} onChange={(e)=>{this.setState({price:e.target.value})}} /><br/>
               
                <Button type='primary' onClick={this.submit}>修改</Button>
            </div>
        )
    }
}
export default MenusUpdate;