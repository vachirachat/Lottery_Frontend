import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import signin from './page/signin';
import lottery from './page/lottery';
import ticket from './page/ticket';
import createLottery from './page/createLottery';
import buyTicket from './page/buyTicket';
import announce from './page/announce';
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
              <Route path='/createlottery' component={createLottery} />
              <Route path='/buyTicket' component={buyTicket} />
              <Route path='/announce' component={announce} />
          </Switch>
        </Router>

    </div>
  );
}

export default App;
