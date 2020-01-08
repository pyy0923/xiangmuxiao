import React from 'react'
import {Dropdown,Menu,Icon,notification} from 'antd'
import {clear} from '../../utils/webStorage'
import {UserLogout} from '../../api/user'
const menuData=[
    {path:'',name:"个人信息",icon:'user'},
    {path:'',name:"个人设置",icon:'user'},
    {path:'',name:"退出登录",icon:'user'},
]
const openNotificationWithIcon=(type,msg)=>{
    notification[type]({
        message:'退出结果',
        description:msg,
        duration:1
    })
}
class HeaderNav extends React.Component{
    clickMenu=(e)=>{
        let {key}=e
        switch(Number(key)){
            case 2:
                UserLogout()
                .then((res)=>{
                  clear() 
                  openNotificationWithIcon('success','退出成功')
                })
                .catch((err)=>{
              
                  openNotificationWithIcon('error','退出失败请重试')
                })
                 break;
             
               default:
                 break;
        }
    }
    renderMenu(menuData){
        return(
          <Menu onClick={this.clickMenu}>
            {menuData.map((item,index)=>{
              return(
                  <Menu.Item key={index}>
                    <span>
                      <Icon type='user'></Icon>  
                      <span>{item.name}</span>
                    </span>
                  </Menu.Item>
              )
            })}
          </Menu>
        )
      }
      render() {
          return (
            <Dropdown overlay={this.renderMenu(menuData)}>
              <span className="ant-dropdown-link">
                天韵组 <Icon type="down" />
              </span>
            </Dropdown>
          );
      }
}
export default HeaderNav;