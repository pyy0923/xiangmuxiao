const express = require('express')
const router = express.Router()
const People = require('../../control/peopleController')

//查询接口（分页查询  分类查询 关键字查询）
router.post('/getpeople',(req,res)=>{
  let page=Number(req.body.page)||1
  let pageSize=Number(req.body.pageSize)||2
  People.get(page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'查询失败'})})
})
// 分类查询
router.get('/getpeopleByType',(req,res)=>{
  let {sid} = req.query 
  let page=Number(req.query.page)||1
  let pageSize = Number(req.query.pageSize)||2
  People.getByType(sid,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
})
// 关键字查询
router.post('/getPeoplesByKw',(req,res)=>{
  let page=Number(req.body.page)||1
  let pageSize = Number(req.body.pageSize)||2
  let kw = req.body.kw 
  People.getByKw(kw,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'ok',list:data})
  })
})
//删除接口
router.post('/delPeople',(req,res)=>{
  let  {sid}=req.body
  People.del(sid)
  .then((data)=>{
    res.send({err:0,msg:'del ok'})
  })
  .catch((err)=>{ 
    res.send({err:-1,msg:'del no ok'})
  })
})
//添加数据
router.post('/addPeople',(req,res)=>{
  let {sid,name,fad,grade,time,num} = req.body 
  People.add(sid,name,fad,grade,time,num)
  .then((data)=>{
    res.send({err:0,msg:'添加ok'})})
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'添加失败'})})
})
//修改 
router.post('/updatePeople',(req,res)=>{
  let {sid,name,fad,grade,time,num} = req.body 
  People.update(sid,name,fad,grade,time,num)
  .then((data)=>{res.send({err:0,msg:'修改ok'})})
  .catch((data)=>{res.send({err:-1,msg:'修改失败'})})
})
module.exports = router