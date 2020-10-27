import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import signin from './page/signin';
import lottery from './page/lottery';
import ticket from './page/ticket';
import foutyPage from './page/foutypage';
import fivePage from './page/fivepage';
import sixPage from './page/sixpage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Navbar />
        <Router>
          <Switch>
              <Route path='/signin' component={signin} />
              <Route path='/lottery' component={lottery} />
              <Route path='/ticket' component={ticket} />
              <Route path='/foutypage' component={foutyPage} />
              <Route path='/fivepage' component={fivePage} />
              <Route path='/sixpage' component={sixPage} />
          </Switch>
        </Router>

    </div>
  );
}

export default App;
