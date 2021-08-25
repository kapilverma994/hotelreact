import React from 'react'

export default function navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg p-2 navbar-dark bg-dark">
  <a className="navbar-brand" href="#">     <img src="https://www.easyhireme.com/easyhire-updated/img/easyhrie1.png" height="80px"  /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
  
    </ul>
   
  </div>
</nav>
        </div>
    )
}
