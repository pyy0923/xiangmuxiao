import allList from './rootAllList'
export const filterRootList=(ids)=>{
    let result=[]
    for(let index=0;index<allList.length;index++){
        let id=allList[index].id
        if(ids.indexOf(id)!==-1){
            result.push(allList[index])
        }else if(ids.indexOf(id)===-1 && allList[index].children){
            let state=false
            let tmp=[]
            for(let i=0;i<allList[index].children.length;i++){
                let childrenId=allList[index].children[i].id
                if(ids.indexOf(childrenId)!==-1){
                    tmp.push(allList[index].children[i])
                    state=true
                }
            }
            if(state){
                allList[index].children=tmp
                result.push(allList[index])
            }
        }
    }
    return result
}