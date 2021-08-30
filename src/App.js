import './App.css';
import Header from './components/Navbar'
import Footer from './components/footer';
import Detail from './components/Detail';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    BrowserRouter,
    Redirect
} from "react-router-dom";
import Home from './components/Home';

function App() {
    return (
  <>
  <BrowserRouter>
  
            
  <Header/>
  <Switch>
    
      <Route path="/" exact component={Home}/>
            <Route path="/hotels/:id" component={Detail}>
            </Route>
        <Redirect to= "/"/>
  <Footer />
          </Switch>
          </BrowserRouter>
  
<Footer/>
  </>
    );
  }

export default App;