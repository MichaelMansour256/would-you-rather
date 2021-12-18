import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
class UserCard extends Component {

    render() {

        return (
            <Card className='card'>
                <img src='https://react.semantic-ui.com/images/avatar/large/matthew.png' alt='user_avatar' height={100} />
                <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                        Matthew is a musician living in Nashville.
                    </Card.Description>
                </Card.Content>
                
            </Card>
        )
    }
}

export default UserCard