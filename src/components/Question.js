import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Segment,Divider} from 'semantic-ui-react'
class Question extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='card_q'>
                <Link to={`/question/${this.props.id}`} >
                    
                    <img className='avatar' src={this.props.avatar} alt='author avatar' />
                    <Segment ><div>{this.props.question.optionOne.text}</div></Segment>
                    <Segment basic textAlign='center'>

                        <Divider horizontal>OR</Divider>


                    </Segment>
                    <Segment><div>{this.props.question.optionTwo.text}</div></Segment>
                </Link>
            </div>
        )
    }
}
function mapStateToProps({ authedUser, questions, users }, { id }) {
    const question = questions[id]
    const avatar = users[question.author].avatarURL
    return {
        avatar: avatar,
        question: question
    }
}

export default connect(mapStateToProps)(Question)