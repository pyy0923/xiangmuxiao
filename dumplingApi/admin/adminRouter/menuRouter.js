const express = require('express')
const router = express.Router()
const Menu = require('../../control/menuController')

//查询接口（分页查询  分类查询 关键字查询）
router.post('/getmenu',(req,res)=>{
  let page=Number(req.body.page)||1
  let pageSize=Number(req.body.pageSize)||2
  Menu.get(page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'查询失败'})})
})
// 分类查询
router.get('/getmenuByType',(req,res)=>{
  let {mid} = req.query 
  let page=Number(req.query.page)||1
  let pageSize = Number(req.query.pageSize)||2
  Menu.getByType(mid,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
})
// 关键字查询
router.post('/getMenusByKw',(req,res)=>{
  let page=Number(req.body.page)||1
  let pageSize = Number(req.body.pageSize)||2
  let kw = req.body.kw 
  Menu.getByKw(kw,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'ok',list:data})
  })
})
//删除接口
router.post('/delMenu',(req,res)=>{
  let  {mid}=req.body
  Menu.del(mid)
  .then((data)=>{
    res.send({err:0,msg:'del ok'})
  })
  .catch((err)=>{ 
    res.send({err:-1,msg:'del no ok'})
  })
})
//添加数据
router.post('/addMenu',(req,res)=>{
  let {mid,name,caixi,miaoshu,price} = req.body 
  Menu.add(mid,name,caixi,miaoshu,price)
  .then((data)=>{
    res.send({err:0,msg:'添加ok'})})
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'添加失败'})})
})
//修改 
router.post('/updateMenu',(req,res)=>{
  let {mid,name,caixi,miaoshu,price} = req.body 
  Menu.update(mid,name,caixi,miaoshu,price)
  .then((data)=>{res.send({err:0,msg:'修改ok'})})
  .catch((data)=>{res.send({err:-1,msg:'修改失败'})})
})
module.exports = router