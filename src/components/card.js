import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,

} from "react-router-dom";

const MenuCard = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const history = useHistory()
  const handleDetailPage = (curElem)=>{
    console.log(curElem)
    history.push(`/hotels/${curElem}`)
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/hotels")
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
    <>
      <section className="row ">
        

        
        {items.map((curElem) => {
          // const { id, title, description, image, price,discountprice,discountpercent } = curElem;

          return (
            <>
            <div className="col-md-3 mb-3">
                     <div className="card mt-3 h-100 " >
  <img src={curElem.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h6 className="card-title">{curElem.title}   </h6>
    <p className="card-text">{curElem.description}</p>
<button className="btn btn-primary" onClick={()=>handleDetailPage(curElem.id)}>Read More..</button>
  </div>
  <div class="card-footer">
    ₹ {curElem.discount_price} <del>₹{curElem.price}</del> <span className="text-success float-right">Save {curElem.discount_percent}%</span>
  </div>
</div>
</div>
            </>
          );
        })}
       
      </section>
    </>
  );
};

export default MenuCard;