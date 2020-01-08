import axios from '../utils/axios'

// 获取
export const GetBooks = async (page,pageSize)=>{
  let url='/hehe/v1/admin/book/getBooks' 
  let result = await axios.post(url,{page,pageSize})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}

//添加
export const AddBook = async ({bid,name,category,desc,price})=>{
  let url='/hehe/v1/admin/book/addBook' 
  let result = await axios.post(url,{bid,name,category,desc,price})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}

// 删除
export const DelBook = async (bid)=>{
    let url='/hehe/v1/admin/book/delBook' 
    let result = await axios.post(url,{bid})
    if(result.err==0){
      return result
    }else{
      throw result
    }
  }

// 查询
export const SeekBook = async (kw)=>{
    let url = '/hehe/v1/admin/book/getBooksByKw'
    // console.log('关键字',kw)
    // let pages = page || 1
    // let pageSizes = pageSize || 3
    let result = await axios.post(url,kw)
    // let result = await axios.post(url,{kw,pages,pageSizes})
    if(result.err==0){
        return result
    }else{
        throw result
    }
}

// 修改
export const UpdateBooks = async ({bid,name,category,desc,price})=>{
    let url = '/hehe/v1/admin/book/updateBook'
    let result = await axios.post(url,{bid,name,category,desc,price})
    if(result.err==0){
        return result
    }else{
        throw result
    }
}