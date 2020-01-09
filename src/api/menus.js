import axios from '../utils/axios'
// 获取菜单列表

export const GetMenus = async (page,pageSize)=>{
  let url='/hehe/v1/admin/menu/getMenu' 
  let result = await axios.post(url,{page,pageSize})
  if(result.err==0){
    console.log(result)
    return result
  }else{
    throw result
  }
}


export const DelMenus = async (mid)=>{
    let url='/hehe/v1/admin/menu/delMenu' 
    let result = await axios.post(url,{mid})
    if(result.err==0){
      return result
    }else{
      throw result
    }
  }
  //添加
  export const AddMenus = async ({mid,name,caixi,miaoshu,price})=>{
    let url='/hehe/v1/admin/menu/addMenu' 
  
    let result = await axios.post(url,{mid,name,caixi,miaoshu,price})
    if(result.err==0){
      return result
    }else{
      throw result
    }
  }


  //修改数据 
export const UpdateMenus = async ({mid,name,caixi,miaoshu,price})=>{
  let url='/hehe/v1/admin/menu/updateMenu' 
  let result = await axios.post(url,{mid,name,caixi,miaoshu,price})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}

// 关键字查询
export const chaMenus = async ({page,pageSize,kw})=>{
  let url='/hehe/v1/admin/menu/getMenusByKw'
  let result = await axios.post(url,{page,pageSize,kw})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}