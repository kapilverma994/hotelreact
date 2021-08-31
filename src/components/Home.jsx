import React from 'react'
import MenuCard from './Card'
import Slider from './Slider'
import Header from './Navbar'


export default function Home() {
    return (
        <div style={{minHeight:'400px'}}>
  
  <div className=" mt-3"><Slider /></div>
  <hr/>
  <h3 className="text-center">Discover Hot Deals</h3>
  <hr className="w-25"/>
  <br />
  <div className="container">
  <MenuCard/>
  </div>
        </div>
    )
}
