import React, { Component } from 'react'
import {connect} from 'react-redux'
class Question extends Component{
    render(){
        console.log(this.props)
        return (
            <div className='tweet'>
                <img className='avatar' src={this.props.avatar} alt='author avatar'/>
                <div>{this.props.question.optionOne.text }</div> 
                <div className='divider'> ---------OR-----------</div>
                <div>{this.props.question.optionTwo.text }</div> 
            </div>
        )
    }
}
function mapStateToProps ({authedUser, questions , users}, { id }) {
    const question = questions[id]
    const avatar = users[question.author].avatarURL
    return {
      avatar:avatar,
      question: question
    }
  }

export default connect(mapStateToProps)(Question)