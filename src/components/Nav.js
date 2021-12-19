import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
class Nav extends Component {
  render(){
    console.log("aaaaaaaaaaaaa",this.props.authedUser)
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
        <li>
          <img src={this.props.avatar} alt='user_avatar' className='avatar' />
        </li>
        <li>
          <Link to="/login">logout ? </Link>
        </li>
      </ul>
    </nav>
  )
}
}
function mapStateToProps({users , authedUser}){
  return {avatar:users[authedUser].avatarURL}
}
export default connect(mapStateToProps)(Nav)