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
            <Sider style={{backgroundColor:"#001535"}} collapsed={false}>
              <SliderNav></SliderNav>
            </Sider>
            <Layout>
              <Header 
               style={{
                 backgroundImage: "url(http://imgsrc.baidu.com/imgad/pic/item/d1a20cf431adcbefe90f823ca7af2edda3cc9fd5.jpg)",
                 backgroundSize:"100%",padding: 0,
               textAlign:'right',paddingRight:'20px',cursor:'pointer'}} 
               >
                 {/* <img src="http://www.library.fudan.edu.cn/_upload/tpl/00/05/5/template5/images/logo.png" style={{
                   float:"left"
                 }} width='200'/> */}
                 <div style={{backgroundImage:"url(http://www.library.fudan.edu.cn/_upload/tpl/00/05/5/template5/images/logo.png)",
                    backgroundSize:"350% 100%",
                    width:"80px",float:"left",height:"80%",marginTop:"5px",marginLeft:"10px"
                }}
                 ></div>
                <Icon className="trigger"/>
                <HeaderNav></HeaderNav>
              </Header>
              <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  background: 'skyblue',
                  minHeight: 280,
                }}
                >
               {this.props.children}
              </Content>
              <Footer style={{backgroundImage:"url(http://pic2.cxtuku.com/00/00/46/b879273d26e6.jpg)"
              ,backgroundSize:"100% 200%"
              ,height:'80px'}}>
                <div className={styles.foot}>
                  版权所有:天韵组
                  <p><em>本网站纯属意外只为奖品而生，如有雷同纯属正常</em></p>
                </div>
              </Footer>
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