import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './App.css';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home'
import Services from './componants/Services/Services';
import Service from './componants/Service/Service';
import About from './componants/About/About';
import Contact from './componants/Contact/Contact';
import NotFound from './componants/NotFound/NotFound';
import Footer from './componants/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>

        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/services/:serviceId">
            <Service></Service>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
