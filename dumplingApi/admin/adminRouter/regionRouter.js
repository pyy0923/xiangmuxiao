const express = require('express')
const router = express.Router()
const Region = require('../../control/regionController')

//查询接口（分页查询  分类查询 关键字查询）
router.post('/getregion',(req,res)=>{
  let page=Number(req.body.page)||1
  let pageSize=Number(req.body.pageSize)||2
  Region.get(page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'查询失败'})})
})
// 分类查询
router.get('/getregionByType',(req,res)=>{
  let {mid} = req.query 
  let page=Number(req.query.page)||1
  let pageSize = Number(req.query.pageSize)||2
  Region.getByType(mid,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
})
// 关键字查询
router.post('/getregionsByKw',(req,res)=>{
  let page=Number(req.body.page)||1
  let pageSize = Number(req.body.pageSize)||2
  let kw = req.body.kw 
  Region.getByKw(kw,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'ok',list:data})
  })
})
//删除接口
router.post('/delregion',(req,res)=>{
  let  {rid}=req.body
  Region.del(rid)
  .then((data)=>{
    res.send({err:0,msg:'del ok'})
  })
  .catch((err)=>{ 
    res.send({err:-1,msg:'del no ok'})
  })
})
//添加数据
router.post('/addRegion',(req,res)=>{
  let {rid,name,desc,postal} = req.body 
  console.log('这里是',req.body)
  Region.add(rid,name,desc,postal)
  .then((data)=>{
    res.send({err:0,msg:'添加ok'})})
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'添加失败'})})
})
//修改 
router.post('/updateRegion',(req,res)=>{
  let {rid,name,desc,postal} = req.body 
  Region.update(rid,name,desc,postal)
  .then((data)=>{res.send({err:0,msg:'修改ok'})})
  .catch((data)=>{res.send({err:-1,msg:'修改失败'})})
})
module.exports = router