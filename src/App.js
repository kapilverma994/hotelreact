
import './App.css';
import Card from './components/card';
import Header from './components/navbar';
import Slider from './components/slider';
import Footer from './components/footer';

function App() {
  return (
<>
<Header/>
<div>

</div>
<div className=" mt-3"><Slider/></div>
<hr/>
<h3 className="text-center">Discover Hot Deals</h3>
<hr className="w-25"/>
<br />
<div className="row">
  <div className="col-md-3">
<Card/>
  </div>
  <div className="col-md-3">
  <Card/>
  </div>
  <div className="col-md-3">
  <Card/>
  </div>
  <div className="col-md-3">
  <Card/>
  </div>

</div>
<div className="row">
  <div className="col-md-3">
  <Card/>
  </div>
  <div className="col-md-3">
  <Card/>
  </div>
  <div className="col-md-3">
  <Card/>
  </div>
  <div className="col-md-3">
  <Card/>
  </div>

</div>
<div className="row">
  <div className="col-md-3">
  <Card/>
  </div>
  <div className="col-md-3">
  <Card/>
  </div>
  <div className="col-md-3">
  <Card/>
  </div>
  <div className="col-md-3">
  <Card/>
  </div>

</div>
<Footer />


</>
  );
}

export default App;
