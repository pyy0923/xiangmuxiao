import React, {Component,Fragment} from 'react'
import {Table,Pagination,Spin,Button,Popconfirm, message,Drawer} from 'antd'
import {GetBooks,SeekBook,DelBook} from '../../../api/books'
import UpdateBook from '../Update/update'

const pageSize = 3
class seekBook extends Component{
    constructor(){
        super();
        this.columns=[
            {
                title:'图书号',
                dataIndex:'bid',
                className:"column-money"
            },
            {
                title:'图书名',
                dataIndex:'name',
                className:"column-money"
            },
            {
                title:'图书分类',
                dataIndex:'category',
                className:"column-money"
            },
            {
                title:'图书描述',
                dataIndex:'desc',
                className:"column-money"
            },
            {
                title:'价格',
                dataIndex:'price',
                className:"column-money"
            },
            {
              title:'操作',
              width:150,
              className:"column-money",
              render:(data)=> {
                return(
                  <Fragment>
                    <Popconfirm
                      title='确定要删除本条数据吗？'
                      onConfirm={()=>{
                        this.delData(data.bid)
                      }}
                      okText='删除'
                      cancelText='取消'
                    >
                      <Button type='danger' size='small'>删除</Button>
                    </Popconfirm>
                    <Button type='primary' size='small' onClick={()=>{
                      this.setState({drawerShow:true,updataData:data})
                    }}>修改</Button>
                  </Fragment>
                )
              }
            },
        ]
        this.state={
            drawerShow:false,
            spinning:true,
            nowPage:1, //当前页数
            allCount:0, // 总数据条数
            dataSource:[],
            updataData:{},
            kws:''
          }
    }
    componentDidMount(){
        this.getTableData(1)
    }
    delData(id){
        //  网络请求
        DelBook(id).then(()=>{
            message.success('删除ok',1)
            this.getTableData()
        })
        // 更新页面数据
    }
    getTableData(nowPage=1){
        // 根据页数获取网络数据
        this.setState({spinning:true})
        GetBooks(nowPage,pageSize)
        .then((res)=>{
          this.setState({dataSource:res.list.books,allCount:res.list.allCount,spinning:false})
        })
      }
    seekTableData=()=>{
        let kw = {kw:this.state.kws,page:1,pageSize:3}
        // console.log(kw)
        SeekBook(kw)
            .then((res)=>{
                // console.log(res)
                this.setState({dataSource:res.list.books,allCount:res.list.allCount,spinning:false})
            })
    }
    render(){
        let {dataSource,allCount,spinning,drawerShow,updataData,kw}=this.state
        return (
            <div>
                查找: <input type='text' placeholder='书名查找' onChange={(e)=>{this.setState({kws:e.target.value})}} />
                {/* 查找: <input type='text' onChange={(e)=>{this.seekTableData(e.target.value)}} /> */}
                    <Button onClick={this.seekTableData}>确定</Button>
                <Spin spinning={spinning}>
                    <Table columns={this.columns} 
                    dataSource={dataSource}
                    rowKey='bid'
                    pagination={false}
                    scroll={{y:280}}
                    ></Table>
                </Spin>
                <Pagination 
                simple  
                total={allCount} 
                pageSize={pageSize} 
                onChange={(page)=>{
                    this.seekTableData(page)
                }}
                />
                <Drawer
                    closable={true}
                    onClose={()=>{this.setState({drawerShow:false}) }}
                    visible={drawerShow}
                    >
                    <UpdateBook
                        updataData={updataData}
                        refreshList={
                            ()=>{
                                this.setState({drawerShow:false})
                                this.getTableData()
                            }
                        }
                    ></UpdateBook>
                </Drawer>
            </div>
        )
    }
}

export default seekBook