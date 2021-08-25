import React from 'react'

export default function footer() {
    const mystyle={
margin:'40px',
    }
    const list={
        listStyleType:'none'
    }
    return (
      
        <div>
            <footer className="bg-dark text-white mt-3 ">
                <div className="mx-5 ">

             
		<div className="row container  ">
            <div className="col-md-3">
                <img src="https://www.easyhireme.com/easyhire-updated/img/easyhrie1.png" height="100px" style={mystyle}  />

            </div>
            <div className="col-md-3">
                <h4>Company</h4>
<ul style={list}>
    <li>Home</li>
    <li>About</li>
    <li>Register Your Company</li>

    <li>Membership</li>
    <li>Banner</li>






</ul>
            </div>
            <div className="col-md-3">
            <h4>Hot Links</h4>
            <ul style={list}>
    <li>Terms & Conditions</li>
    <li>Privacy Policy</li>
    <li>Disclaimer</li>
    <li>API Policy</li>
    <li>Security</li>
    <li>Sitemap</li>
</ul>







</div>
<div className="col-md-3">
<h4>Country</h4>
<ul style={list}>
    <li>India</li>
    <li>United Arab Emirates</li>
    <li>United Kingdom</li>
    <li>United Sates of America</li>
    <li>
China</li>
    <li>
Australia</li>
</ul>





</div>


        </div>
        </div>
	
	</footer>
            
        </div>
    )
}
