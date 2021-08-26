
import './App.css';
import Card from './components/card';
import Header from './components/navbar';
import Slider from './components/slider';
import Footer from './components/footer';
import Hotels from './components/HotelsCard';

function App() {
  return (
<>
<Header/>

<div className=" mt-3"><Slider/></div>
<hr/>
<h3 className="text-center">Discover Hot Deals</h3>
<hr className="w-25"/>
<br />

<Card menu={Hotels}/>




<Footer />


</>
  );
}

export default App;
  