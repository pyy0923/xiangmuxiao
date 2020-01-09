
const RegionModel= require('../db/model/regionModel')
async function  add(rid,name,desc,postal){
  // async 函数内部只要不出错 肯定走的是then 如果出错走的是catch
  console.log('添加',rid,name,desc,postal)
   let result =await RegionModel.insertMany({rid,name,desc,postal})
   console.log(result,'ss')
}
async function get(page,pageSize){
  console.log('查询',page,pageSize)
  let allRegion =await RegionModel.find()

  let allCount =allRegion.length 
  let region = await RegionModel.find().skip((page-1)*pageSize).limit(pageSize)
  return  {region,allCount}
}

// 分类查询+分页
async function getByType(rid,page,pageSize){
  let allRegion=await RegionModel.find({rid})
  let allCount=allRegion.length 
  let  region=await RegionModel.find({rid}).skip((page-1)*pageSize).limit(pageSize)
  return {region,allCount}
}
// 关键字查询+分页
async function getByKw(kw,page,pageSize){
 let regex=new RegExp(kw) //查询关键字的正则 
 let  allRegion=await RegionModel.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]})
 let  allCount = allRegion.length
 let  region=await RegionModel.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]}).skip((page-1)*pageSize).limit(pageSize)
 return {region,allCount}
}

// 删除
async function del(rid){
  console.log(rid)
  let result = await  RegionModel.deleteOne({rid:rid})
  return result
}

// 修改
async function  update(rid,name,desc,postal){
  
  let result  = await RegionModel.updateOne({rid:rid},{rid,name,desc,postal})
   console.log(result)
   return  result
}
module.exports={add,get,getByType,getByKw,del,update}