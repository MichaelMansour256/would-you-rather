import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown, Button, Divider , Segment} from 'semantic-ui-react'


class DropdownExampleSelection extends Component {
  render() {

    return (
      <div>
        <Dropdown
          placeholder='Choose User'
          fluid
          selection
          options={this.props.users}
          defaultValue={this.props.users[0].value}
        />
        <Segment basic textAlign='center'>

          <Divider horizontal></Divider>


        </Segment>

        <Button positive className='container'>LOG IN</Button>
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
      value: users[k].name,
      image: { avatar: true, src: users[k].avatarURL }
    })
    return k
  })


  return {
    users: usersArray
  }
}
export default connect(mapStateToProps)(DropdownExampleSelection)
