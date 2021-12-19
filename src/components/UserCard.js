import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
class UserCard extends Component {

    render() {

        return (
            <Card >
                <img src={this.props.u.avatar} alt='user_avatar'  />
                <Card.Content >
                    <Card.Header>{this.props.u.user}</Card.Header>
                    
                    <Card.Description>
                        <span >Question Asked:{this.props.u.asked_count}</span><br/>
                        <span >Question Answerd:{this.props.u.answerd_count}</span><br/>
                        <span >Score:{this.props.u.answerd_count+this.props.u.asked_count}</span>
                    </Card.Description>
                </Card.Content>

            </Card>
        )
    }
}

export default UserCard