
import './App.css';
import Card from './components/Card';
import Header from './components/navbar';
import Slider from './components/Slider';
import Footer from './components/footer';
import Hotels from './components/HotelsCard';
import bannerapi from './components/sliderapi';

function App() {
  return (
<>
<Header/>

<div className=" mt-3"><Slider /></div>
<hr/>
<h3 className="text-center">Discover Hot Deals</h3>
<hr className="w-25"/>
<br />
<div className="container">
<Card/>

</div>

<Footer />


</>
  );
}

export default App;
  