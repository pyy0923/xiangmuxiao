const express = require('express')
const router = express.Router()
const Book = require('../../control/bookController')

//查询接口（分页查询  分类查询 关键字查询）
router.post('/getBooks',(req,res)=>{
  let page=Number(req.body.page)||1
  let pageSize=Number(req.body.pageSize)||2
  Book.get(page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'查询失败'})})
})
// 分类查询
router.post('/getBooksByType',(req,res)=>{
  let {foodType} = req.query 
  let page=Number(req.query.page)||1
  let pageSize = Number(req.query.pageSize)||3
  Book.getByType(foodType,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
})
// 关键字查询
router.post('/getBooksByKw',(req,res)=>{
  let page=Number(req.body.page)||1
  let pageSize = Number(req.body.pageSize)||3
  console.log('这里是req',req.body)
  let kw = req.body.kw 
  Book.getByKw(kw,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'ok',list:data})
  })
})
//删除接口
router.post('/delBook',(req,res)=>{
  let  {bid}=req.body
  Book.del(bid)
  .then((data)=>{
    res.send({err:0,msg:'del ok'})
  })
  .catch((err)=>{ 
    res.send({err:-1,msg:'del nook'})
  })
})
//添加数据
router.post('/addBook',(req,res)=>{
  let {bid,name,category,desc,price} = req.body 
  Book.add(bid,name,category,desc,price)
  .then((data)=>{res.send({err:0,msg:'添加ok'})})
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'添加失败'})})
})
//修改 
router.post('/updateBook',(req,res)=>{
  console.log('这里是rq',req.body)
  let {bid,name,category,desc,price} = req.body 
  Book.update(bid,name,category,desc,price)
  .then((data)=>{res.send({err:0,msg:'修改ok'})})
  .catch((data)=>{res.send({err:-1,msg:'修改失败'})})
})
module.exports = router