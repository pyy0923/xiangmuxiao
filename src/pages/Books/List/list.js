import React, {Component,Fragment} from 'react'
import {Table,Pagination,Spin,Button,Popconfirm, message,Drawer} from 'antd'
import {GetBooks,DelBook} from '../../../api/books'
import UpdateBook from '../Update/update'

const pageSize=3
class BooksList extends Component {
    constructor(){
        super();
        this.columns=[
            {
                title:'图书号',
                dataIndex:'bid'
            },
            {
                title:'图书名',
                dataIndex:'name'
            },
            {
                title:'图书分类',
                dataIndex:'category'
            },
            {
                title:'图书描述',
                dataIndex:'desc'
            },
            {
                title:'价格',
                dataIndex:'price'
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
            spinning:false,
            nowPage:1, //当前页数
            allCount:0, // 总数据条数
            dataSource:[],
            updataData:{}
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
    }
    getTableData(nowPage=1){

      this.setState({spinning:true})
      GetBooks(nowPage,pageSize)
      .then((res)=>{
        // console.log(res.list.books)
        let data = res.list.books
        data.forEach(item => {
          item._id = JSON.parse(JSON.stringify(item._id))
        });
        this.setState({dataSource:data,allCount:res.list.allCount,spinning:false})
      })
    }
    render(){
        let {dataSource,allCount,spinning,drawerShow,updataData}=this.state
        return (
            <div>
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

export default BooksList