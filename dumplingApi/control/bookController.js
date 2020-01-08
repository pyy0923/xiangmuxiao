const BookModule = require('../db/model/booksModel')

// 添加
async function  add(bid,name,category,desc,price){
  
   let result =await BookModule.insertMany({bid,name,category,desc,price})
   console.log(result)
}
// 获取
async function get(page,pageSize){

  let allBooks =await BookModule.find()

  let allCount =allBooks.length 
  let books = await BookModule.find().skip((page-1)*pageSize).limit(pageSize)
  return  {books,allCount}
}

// 关键字查询
async function getByKw(kw,page,pageSize){
 let regex=new RegExp(kw) 
 let  allBooks=await BookModule.find({$or:[{name:{$regex:regex}}]})
 let  allCount = allBooks.length
 let  books=await BookModule.find({$or:[{name:{$regex:regex}}]}).skip((page-1)*pageSize).limit(pageSize)
 return {books,allCount}
}

// 删除
async function del(bid){
  console.log('删除',bid)
  let result = await  BookModule.deleteOne({bid})
  return result
}

// 修改
async function  update(bid,name,category,desc,price){
  console.log('这里是id',bid)
  let result  = await BookModule.updateOne({bid:bid},{bid,name,category,desc,price})
   console.log(result)
   return  result
}
module.exports={add,get,getByKw,del,update}