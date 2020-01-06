import axios from '../utils/axios'
// 获取商品列表

export const GetGoods = async (page,pageSize)=>{
  let url='/hehe/v1/admin/food/getFoods' 
  let result = await axios.post(url,{page,pageSize})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}


export const DelGood = async (foodId)=>{
    let url='/hehe/v1/admin/food/delFood' 
    let result = await axios.post(url,{foodId})
    if(result.err==0){
      return result
    }else{
      throw result
    }
  }
  //添加
  export const AddGood = async ({name,price,img,foodType,desc})=>{
    let url='/hehe/v1/admin/food/addFood' 
  
    let result = await axios.post(url,{name,price,img,foodType,desc})
    if(result.err==0){
      return result
    }else{
      throw result
    }
  }