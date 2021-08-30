import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Navbar';

export default function Detail() {
    const list={
        // listStyleType:'none',
     
    }
    const {id} = useParams()

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/gethotel/${id}`)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result.data);
              console.log(result)
            },
        
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
   
    return (
        <div>
       
        <div className="container">
            
         
         <div className="row m-2" >
             <div className="col-md-12">
             <h3 className="d-inline-block">{items.title}</h3> <i className="fa fa-star "></i>
            <i className="fa fa-star "></i>
            <i className="fa fa-star "></i>
            <i className="fa fa-star "></i>
            <i className="fa fa-star-o "></i>

             </div>
             
             <div className="col-md-5 ">
<img src={items.image}  width="100%" />
<div className="border border-dark  mt-2">
                 <ul style={list}>
                     <li>{items.title}</li>
                     <li>{items.description}</li>
                     <li>₹{items.discount_price} <del>{items.price} </del></li>
                     <li className="text-danger">Discount {items.discount_percent} %</li>

                 </ul>
          
             </div>
             </div>
             <div className="col-md-5">
             <img src={items.image} width="100%" />
         
      

</div>

         </div>
        
        </div>
        <hr className="bg-dark"/>  
        </div>
   
    )
}
