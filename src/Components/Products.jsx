import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Products = () => {
    const [data,setData] = useState([]);


    const getData =  async()=>{
        const result= await axios.get("https://fakestoreapi.com/products")
console.log(result.data)
setData(result.data)
    }
     useEffect(()=>{
        getData()
     },[])
  return (
   <React.Fragment>
    <h1>Hello Products List here...</h1>
    {
        data.map((item)=>{
            return(
                <div>
                    {/* <h1>{item.id}</h1> */}
                </div>
            )
        })
    }
   </React.Fragment>
  )
}

export default Products
