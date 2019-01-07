
const  posts= [
      { "id": 1, "Name": "pen", "Stock": "100" },
      { "id": 2, "Name": "pencil", "Stock": "150" }
    ]
  

export default  function FetchService(url){
  //const json = () => Promise.resolve( posts );
  //return  new Promise( resolve => resolve({ json }));


return  new Promise((resolve)=>{
  const json=()=>posts;
return  resolve({json})

})

}