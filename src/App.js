import './App.css';
import Featured from './Featured';
import Header from './Header';
import Recomended from './Recomended';
import Footer from './Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Flower from './Flower'
import Home from './Home'

function App() {
  return (
        <div className="app">
          <Router>
        <Switch>
        <Route path="/home"><Home /> 
        </Route>
        <Route path="/flower">
            <Flower  />
          </Route>
       <Route path="/">
          <Header />
        <Recomended />
        <Featured />
        <Footer />
        </Route>
       
          </Switch>
    </Router>
    </div>

  );
}

export default App;
