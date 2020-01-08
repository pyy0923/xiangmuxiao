import React,{Fragment} from 'react'
import {Layout,Icon,Modal} from 'antd'
import styles from './admin.module.less'
import SliderNav from '../../components/SilderNav'
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import ActionCreator from '../../store/actionCreator'
const {Header,Sider,Content,Footer}=Layout;
class Admin extends React.Component{
    render(){
      let {tokenModal,setTokenModal} = this.props
        return(
          <Fragment>
            <Layout className={styles.admin}>
            <Sider  collapsed={false}>
              <SliderNav></SliderNav>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon className="trigger"/>
                <HeaderNav></HeaderNav>
              </Header>
              <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 280,
                }}
                >
               {this.props.children}
              </Content>
              <Footer>读书破万卷，下笔如有神。</Footer>
            </Layout>
          </Layout>
           <Modal
           title='11'
           visible={tokenModal}
           onOk={()=>{
             this.props.history.replace('/login')
             setTokenModal(false)
           }}
           onCancel={()=>{
             setTokenModal(false)
           }}
         >
            token失效，请重新登录！
         </Modal>
         </Fragment>
        )
    }
}

export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(ActionCreator,dispatch)
})(withRouter(Admin))