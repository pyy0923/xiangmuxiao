import axios from '../utils/axios'
// 获取违纪人列表

export const GetPeople = async (page,pageSize)=>{
  let url='/hehe/v1/admin/people/getpeople' 
  let result = await axios.post(url,{page,pageSize})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}


export const DelPeople = async (sid)=>{
    let url='/hehe/v1/admin/people/delPeople' 
    let result = await axios.post(url,{sid})
    if(result.err==0){
      return result
    }else{
      throw result
    }
  }
  //添加
  export const AddPeople = async ({sid,name,fad,grade,time,num})=>{
    let url='/hehe/v1/admin/people/addPeople' 
  
    let result = await axios.post(url,{sid,name,fad,grade,time,num})
    if(result.err==0){
      return result
    }else{
      throw result
    }
  }


  //修改数据 
export const UpdatePeople = async ({sid,name,fad,grade,time,num})=>{
  let url='/hehe/v1/admin/people/updatePeople' 
  let result = await axios.post(url,{sid,name,fad,grade,time,num})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}

// 关键字查询
export const chaPeople = async ({page,pageSize,kw})=>{
  let url='/hehe/v1/admin/people/updatePeople'
  let result = await axios.post(url,{page,pageSize,kw})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}