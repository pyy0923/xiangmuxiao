import React, { Component,Fragment } from 'react';
import {Table,Pagination,Spin,Button,Popconfirm, message,Drawer} from 'antd'
import {GetGoods,DelGood} from  '../../../api/goods'

// const dataSource=[
//   {hehe:'1',name:'呵呵',desc:'副经理说杰弗里斯',address:'逮虾户'},
//   {hehe:'2',name:'呵呵',desc:'副经理说杰弗里斯',address:'逮虾户'},
//   {hehe:'3',name:'呵呵',desc:'副经理说杰弗里斯',address:'逮虾户'}
// ] 
const pageSize=3
class GoodsList extends Component{
  constructor(){
    super()
    this.columns=[
      {
        title:'id',
        dataIndex:'_id',
        width:100,
        ellipsis: true,
        // fixed:'left'
      },
      {
        title:'姓名',
        dataIndex:'name',
        // fixed:'left'
      },
      {
        title:'描述',
        dataIndex:'desc',
      },
      {
        title:'价格',
        dataIndex:'price',
      },
      {
        title:'类型',
        dataIndex:'foodType',
      },
      {
        title:'图片',
        dataIndex:'img',
        render(data) {
          return (
            <img src={data} width='100' height='80' alt=""/>
          )
        },
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
                  this.delData(data._id)
                }}
                okText='删除'
                cancelText='取消'
              >
                <Button type='danger' size='small'>删除</Button>
              </Popconfirm>
              <Button type='primary' size='small' onClick={()=>{
                this.setState({drawerShow:true})
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
    }
  }
  componentDidMount(){
      this.getTableData(1)
  }
  delData(id){
  //  网络请求
    DelGood(id).then(()=>{
      message.success('删除ok',1)
      this.getTableData()
    })

  // 更新页面数据
  }
  getTableData(nowPage=1){
    // 根据页数获取网络数据
    this.setState({spinning:true})
    GetGoods(nowPage,pageSize)
    .then((res)=>{
      this.setState({dataSource:res.list.foods,allCount:res.list.allCount,spinning:false})
    })
  }
  render(){
    let {dataSource,allCount,spinning,drawerShow}=this.state
    return (
      <div >
        <Spin spinning={spinning}>
         <Table columns={this.columns} 
          dataSource={dataSource}
          rowKey='_id'
          pagination={false}
          scroll={{y:280}}
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
        >
          这里是修改的抽屉
        </Drawer>
      </div>
    );
  }
}

export default GoodsList;
