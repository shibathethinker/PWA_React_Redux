export const dataLoaded=(data)=>{
    return {
        type:'full_data',
        payload:{gridData:data}
    }
}