import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  
  handleLogOut = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    // to do change the user 
    dispatch(setAuthedUser("signedOut"))
    
  }

  render() {
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
          {this.props.authedUser === "signedOut" ? null :
            <span className='span_login'>
              <li className='span_login'>
                <img src={this.props.avatar} alt='user_avatar' className='avatar' />
              </li>

              <li >
                {/*<Link to="/login" >logout ? </Link>*/}
                <Button
                  color="red"
                  size="tiny"
                  fluid
                  negative
                  content="Log out ?"
                  onClick={this.handleLogOut}
                />
              </li></span>}
        </ul>
      </nav>
    )
  }
}


function mapStateToProps({ users, authedUser }) {
  return {
    avatar: users[authedUser] ? users[authedUser].avatarURL : null,
    authedUser
  }
}
export default connect(mapStateToProps)(Nav)