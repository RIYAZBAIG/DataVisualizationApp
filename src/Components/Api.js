import React, { useState, useEffect } from "react";
import axios from "axios";

export const Api = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(result.data);
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      
      {data.map((item) => {
        return (

          
          <div>
            {/* <button type="button" class="btn">Basic</button> */}
            <button type="button" class="btn btn-info">
              Info
            </button>
            <button type="button" class="btn btn-warning">
              Warning
            </button>
            <h1>{item.id}</h1>
            <div class="card" style={{size:"100%"}} >
             <img src={item.image} alt="" height="500px" width="500px"/>
             <div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">DETAILS</a></li>
    <li><a class="dropdown-item" href="#">BOOKNOW</a></li>
    <li><a class="dropdown-item" href="#">CANCEL BOOKING</a></li>
  </ul>
</div>
             {/* <div class="card"> */}
  <div class="card-body" style={{width:"400px"}} >
    <h4 class="card-title">Card title</h4>
    <p class="card-text">{item.category}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
{/* </div> */}

           </div>
           <div class="row">
  <div class="col-sm">${item.price}</div>
  <div class="col-sm">2 of 4</div>
  <div class="col-sm">3 of 4</div>
  <div class="col-sm">4 of 4</div>
</div>


           
          </div>
          
          
        );
      })}
    </React.Fragment>
  );
};

export default Api;
