import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar  from 'react-redux-loading'
import AnswerQuestion from './AnswerQuestion';
import LogIn from './LogIn'
import { Redirect } from 'react-router-dom';

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
          this.props.authedUser==="signedOut"? <Redirect to='login'/>:
          <div className='container'>
            {this.props.loading === true
              ? null
              :
               
              <div>
                
                <Route path='/' exact component={Dashboard} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/question/:id' component={AnswerQuestion} />
                <Route path='/login' component={LogIn} />
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
