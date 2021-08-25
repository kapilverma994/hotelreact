import React from 'react'

export default function card() {
    const slider={
        width:'18 rem',
            }
  
    return (
        
      
     <div className="card mt-3  " >
  <img src="https://www.easyhireme.com/easyhire-updated/images/job-img3.png" className="card-img-top" alt="..." />
  <div className="card-body">
    <h6 className="card-title">Chennai | Novaotel Chenna.   </h6>
    <p className="card-text">Weekend breaks | Affordable Price</p>

  </div>
  <div class="card-footer">
    ₹ 2324 <del>₹ 3599</del> <span className="text-success float-right">Save 39%</span>
  </div>
</div>
     
    )
}
