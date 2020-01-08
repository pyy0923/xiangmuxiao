import React, { Component,Fragment } from 'react';
import {Table,Pagination,Spin,Button,Popconfirm, message,Drawer} from 'antd'
import {GetMenus,DelMenus,chaMenus} from  '../../../api/menus'
import UpdateMenus from '../Update/Update'
import styles from './list.module.less'

const pageSize=5
class GoodsList extends Component{
  constructor(){
    super()
    this.columns=[
      {
        title:'菜号',
        dataIndex:'mid',
        width:100,
        ellipsis: true,
      },
      {
        title:'菜名',
        dataIndex:'name',
      },
      {
        title:'菜系',
        dataIndex:'caixi',
      },
      {
        title:'描述',
        dataIndex:'miaoshu',
      },
      {
        title:'价格',
        dataIndex:'price',
      },
     
      {
        title:'操作',
        width:150,
        render:(data)=> {
          return(
            <Fragment>
              <Popconfirm
                title='确定要删除本条数据吗？'
                onConfirm={()=>{
                  this.delData(data.mid)
                }}
                okText='删除'
                cancelText='取消'
              >
                <Button type='danger' size='small'>删除</Button>
              </Popconfirm>
              <Button type='primary' size='small' onClick={()=>{
                this.setState({drawerShow:true,updataInfo:data})
              }}>修改</Button>
            </Fragment>
          )
        },
      }
    ]
    this.state={
      drawerShow:false,
      spinning:false,
      nowPage:1, //当前页数
      allCount:0, // 总数据条数
      dataSource:[],
      updataInfo:{},
      chaMenu:[],
      kw:''
    }
  }
  componentDidMount(){
      this.getTableData(1)
  }
  delData(sid){
  //  网络请求
  DelMenus(sid).then(()=>{
      message.success('删除ok',1)
      this.getTableData()
    })

  // 更新页面数据
  }
  getTableData(nowPage=1){
    // 根据页数获取网络数据
    this.setState({spinning:true})
    GetMenus(nowPage,pageSize)
    .then((res)=>{
      this.setState({dataSource:res.list.menu,allCount:res.list.allCount,spinning:false})
    })
  }
  submit=()=>{
    chaMenus(pageSize,this.state)
    .then(()=>{
      message.success('查询成功',1)
     if(this.state.kw){
       console.log(this.state)
       this.state.dataSource.map((item,index)=>{
         if(item.caixi==this.state.kw){
           this.state.chaMenu.push(item)
           this.setState({dataSource: this.state.chaMenu})
          }
       })
     }
    })
    .catch((err)=>{ message.error('查询失败',1)})
  }
  render(){
    let {dataSource,allCount,spinning,drawerShow,updataInfo,kw}=this.state
    return (
      <div >
        <Spin spinning={spinning}>
         <Table columns={this.columns} 
          dataSource={dataSource}
          rowKey='sid'
          pagination={false}
          scroll={{y:500}}
          ></Table>
        </Spin>
        <Pagination 
          simple  
          total={allCount} 
          pageSize={pageSize} 
          onChange={(page)=>{
            this.getTableData(page)
          }}
        />
        <Drawer
          closable={true}
          onClose={()=>{this.setState({drawerShow:false}) }}
          visible={drawerShow}
          placement='bottom'
          height='400px'
          style={{textAlign:'center',marginTop:'20px'}}
        >
           <UpdateMenus 
            updataInfo={updataInfo} 
            refreshList={()=>{
              // 收起抽屉
              this.setState({drawerShow:false}) 
              // 更新完毕后刷新界面
              this.getTableData()
            }}></UpdateMenus>
        </Drawer>
        <div className={styles.zi}>
         <input type='text' value={kw} 
          onChange={(e)=>{
            this.setState({kw:e.target.value})
          }}
          placeholder="请输入菜系"
          />
          <Button type='primary' onClick={this.submit} >菜系查询</Button>
      </div>
      </div>
    );
  }
}

export default GoodsList;
