import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
//import LogIn from './LogIn'
//import { Redirect } from 'react-router-dom'
class Nav extends Component {
  state={
     disable:false
  }
  render(){
  
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leader board
          </NavLink>
        </li>
        {this.props.authedUser==="signedOut"? this.setState({
          disable:true
        }) : null
        }
        <li>
          <img src={this.props.avatar} alt='user_avatar' className='avatar' hidden={this.state.disable}/>
        </li>
        <li hidden={this.state.disable}>
          <Link to="/login" >logout ? </Link>
        </li>
      </ul>
    </nav>
  )
}
}
function mapStateToProps({users , authedUser}){
  return {
    avatar: users[authedUser] ? users[authedUser].avatarURL : null ,
    authedUser
  }
}
export default connect(mapStateToProps)(Nav)