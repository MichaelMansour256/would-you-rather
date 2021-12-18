import React, { Component , Fragment} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";

class App extends Component {
  render(){
  return (
    <Router>
    <Fragment>
      <Nav />
      <div className='container'>
           <div>
              <Route path='/' exact component={Dashboard} />
              <Route path='/add'  component={NewQuestion} />
              <Route path='/leaderboard'  component={Leaderboard} />
            </div>
      </div>
    </Fragment>
  </Router>
  )
  }
}

export default App;
