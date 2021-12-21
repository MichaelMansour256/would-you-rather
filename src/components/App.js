import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch , Redirect} from 'react-router-dom'
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar  from 'react-redux-loading'
import AnswerQuestion from './AnswerQuestion';
import LogIn from './LogIn'

import NotFound from './NotFound';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
        <LoadingBar />
        <Nav />
          {   
          this.props.authedUser==="signedOut"? <LogIn/>:
          <div className='container'>
            {this.props.loading === true
              ? null
              :
               
              <div>
                <Switch>
                <Route path='/' exact component={Dashboard} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/questions/:id' component={AnswerQuestion} />
                <Route path='/login' exact component={LogIn} />
                <Route path='/404' component={NotFound}/>
                <Redirect to="/404" />
                </Switch>
              </div>
            }
          </div>
          }
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(App);
