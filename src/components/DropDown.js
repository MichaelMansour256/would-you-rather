import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown,Form , Divider , Segment} from 'semantic-ui-react'
import {setAuthedUser} from './../actions/authedUser'
import {Redirect} from 'react-router-dom'
class DropdownExampleSelection extends Component {
  state={
    value:"signedOut",
    toHome: false
  }
  getUser=(e,{value})=>{
    console.log(value);
    this.setState({
      value
    })
  }
  handleLogin=(e)=>{
    
    const {dispatch}=this.props
    // to do change the user 
    dispatch(setAuthedUser(this.state.value))
    this.setState({
      toHome: true
    })
  }
  render() {
    const {toHome} = this.state
        if (toHome === true) {
            return <Redirect to='/' />
        }

    return (
      <div>
        <Form onSubmit={this.handleLogin}> 
        <Dropdown
          placeholder='Choose User'
          fluid
          selection
          options={this.props.users}
          onChange={this.getUser}
          //defaultValue={this.props.users[0].value}
        />
        <Segment basic textAlign='center'>

          <Divider horizontal></Divider>


        </Segment>

        <Form.Button positive className='container' >LOG IN</Form.Button>
        </Form>
      </div>
    )
  }
}
function mapStateToProps({ users }) {
  const usersArray = []
  Object.keys(users).map((k) => {
    usersArray.push({
      key: users[k].id,
      text: users[k].name,
      value: users[k].id,
      image: { avatar: true, src: users[k].avatarURL }
    })
    return k
  })


  return {
    users: usersArray
  }
}
export default connect(mapStateToProps)(DropdownExampleSelection)
