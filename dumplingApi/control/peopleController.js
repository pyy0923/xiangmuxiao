// 存放和违纪人员相关的 数据操作的相关信息 数据库的操作
const PeopleModel= require('../db/model/peopleModel')
async function  add(sid,name,fad,grade,time,num){
  // async 函数内部只要不出错 肯定走的是then 如果出错走的是catch
   let result =await PeopleModel.insertMany({sid,name,fad,grade,time,num})
   console.log(result)
}
async function get(page,pageSize){
  // 获取总的违纪人数据数组
  let allPeople =await PeopleModel.find()
  // 获取视食品数据 总数量
  let allCount =allPeople.length 
  let people = await PeopleModel.find().skip((page-1)*pageSize).limit(pageSize)
  return  {people,allCount}
}

// 分类查询+分页
async function getByType(sid,page,pageSize){
  let allPeople=await PeopleModel.find({sid})
  let allCount=allPeople.length 
  let  people=await PeopleModel.find({sid}).skip((page-1)*pageSize).limit(pageSize)
  return {people,allCount}
}
// 关键字查询+分页
async function getByKw(kw,page,pageSize){
 let regex=new RegExp(kw) //查询关键字的正则 
 let  allPeople=await PeopleModel.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]})
 let  allCount = allPeople.length
 let  people=await PeopleModel.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]}).skip((page-1)*pageSize).limit(pageSize)
 return {people,allCount}
}

// 删除
async function del(sid){
  console.log(sid)
  let result = await  PeopleModel.deleteOne({sid:sid})
  return result
}

// 修改
async function  update(sid,name,fad,grade,time,num){
  
  let result  = await PeopleModel.updateOne({sid:sid},{sid,name,fad,grade,time,num})
   console.log(result)
   return  result
}
module.exports={add,get,getByType,getByKw,del,update}