import React from "react";

const MenuCard = ({ menu }) => {
   console.log(menu);

  return (
    <>
      <section className="row">
        

        
        {menu.map((curElem) => {
          const { id, title, description, image, price,discountprice,discountpercent } = curElem;

          return (
            <>
            <div className="col-md-3">
                     <div className="card mt-3 " >
  <img src={image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h6 className="card-title">{title}   </h6>
    <p className="card-text">{description}</p>

  </div>
  <div class="card-footer">
    ₹ {discountprice}<del>₹{[price]}</del> <span className="text-success float-right">Save {discountpercent}</span>
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

