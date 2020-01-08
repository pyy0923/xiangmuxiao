// 存放和违纪人员相关的 数据操作的相关信息 数据库的操作
const MenuModel= require('../db/model/menusModel')
async function  add(mid,name,caixi,miaoshu,price){
  // async 函数内部只要不出错 肯定走的是then 如果出错走的是catch
   let result =await MenuModel.insertMany({mid,name,caixi,miaoshu,price})
   console.log(result)
}
async function get(page,pageSize){
  // 获取总的违纪人数据数组
  let allMenu =await MenuModel.find()
  // 获取视食品数据 总数量
  let allCount =allMenu.length 
  let menu = await MenuModel.find().skip((page-1)*pageSize).limit(pageSize)
  return  {menu,allCount}
}

// 分类查询+分页
async function getByType(mid,page,pageSize){
  let allMenu=await MenuModel.find({mid})
  let allCount=allMenu.length 
  let  menu=await MenuModel.find({mid}).skip((page-1)*pageSize).limit(pageSize)
  return {menu,allCount}
}
// 关键字查询+分页
async function getByKw(kw,page,pageSize){
 let regex=new RegExp(kw) //查询关键字的正则 
 let  allMenu=await MenuModel.find({$or:[{name:{$regex:regex}},{miaoshu:{$regex:regex}}]})
 let  allCount = allMenu.length
 let  menu=await MenuModel.find({$or:[{name:{$regex:regex}},{miaoshu:{$regex:regex}}]}).skip((page-1)*pageSize).limit(pageSize)
 return {menu,allCount}
}

// 删除
async function del(mid){
  console.log(mid)
  let result = await  MenuModel.deleteOne({mid:mid})
  return result
}

// 修改
async function  update(mid,name,caixi,miaoshu,price){
  
  let result  = await MenuModel.updateOne({mid:mid},{mid,name,caixi,miaoshu,price})
   console.log(result)
   return  result
}
module.exports={add,get,getByType,getByKw,del,update}