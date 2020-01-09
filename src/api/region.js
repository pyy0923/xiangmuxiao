import axios from '../utils/axios'
// 获取违纪人列表

export const GetRegion = async (page,pageSize)=>{
  let url='/hehe/v1/admin/region/getregion' 
  let result = await axios.post(url,{page,pageSize})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}


export const DelRegion = async (rid)=>{
    let url='/hehe/v1/admin/region/delRegion' 
    let result = await axios.post(url,{rid})
    if(result.err==0){
      return result
    }else{
      throw result
    }
  }
  //添加
  export const AddRegions = async ({rid,name,desc,postal})=>{
    let url='/hehe/v1/admin/region/addRegion' 
  
    let result = await axios.post(url,{rid,name,desc,postal})
    if(result.err==0){
      return result
    }else{
      throw result
    }
  }


  //修改数据 
export const UpdateRegion = async ({rid,name,desc,postal})=>{
  let url='/hehe/v1/admin/region/updateRegion' 
  let result = await axios.post(url,{rid,name,desc,postal})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}

// 关键字查询
export const chaRegion = async ({page,pageSize,kw})=>{
  let url='/hehe/v1/admin/region/getregionsByKw'
  let result = await axios.post(url,{page,pageSize,kw})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}