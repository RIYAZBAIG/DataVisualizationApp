import { dark } from '@mui/material/styles/createPalette';
import React, { useEffect, useState } from 'react'

const ProductsList = () => {
    const [products,setProducts]= useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((response)=> response.json())
        .then((data)=>{
            setProducts(data)
        })
        .catch((error)=>{
            console.error("Error fetching data",console.error)
        
        })

    },[])
  return (
    <React.Fragment>
        <h1>Hello ProductLisr</h1>
        {
            products.data((item)=>{
                return(
                    <div>
                        <h1>{Item.id}</h1>
                    </div>
                )
            })
        }
    </React.Fragment>
  )
}

export default ProductsList
