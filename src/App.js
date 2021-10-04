import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Header></Header>
     <Switch>
     <Route exact path="/">
         <Home></Home>

       </Route>
       <Route exact path="/home">
         <Home></Home>

       </Route>

       <Route exact path="/courses">
         <Courses></Courses>

       </Route>
       
      
       
       <Route exact path="/about">
         <About></About>
       </Route>
      
       <Route exact path="/contact">
         <Contact></Contact>
       </Route>
       <Route path="*">
         <NotFound></NotFound>
       </Route>
     </Switch>
    
     
     <Footer></Footer>
    
    
    </BrowserRouter>
   
    </div>
  );
}

export default App;
