import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import TeamDetails from './Components/LeagueDetails/TeamDetails';


function App() {
  return (
    <div>
      <div>
      <Router>
        <Switch>
        <Route exact path="/" >
       <Home></Home>
      </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/teamDetails/:idTeam"> 
          <TeamDetails></TeamDetails>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>

      </div>
    </div>
  );
}

export default App;
