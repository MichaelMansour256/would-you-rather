import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {Segment,Divider} from 'semantic-ui-react'

class QuestionResult extends Component{
    render(){
        const countOfOptionOne=this.props.question.optionOne.votes.length
        const countOfOptionTwo=this.props.question.optionTwo.votes.length
        const totalVotesCount=(countOfOptionOne+countOfOptionTwo)
        const percentOfOptionOne=countOfOptionOne / totalVotesCount
        const percentOfOptionTwo=countOfOptionTwo / totalVotesCount
        return (
            <div >
                <div className='card_q'>
                
                    
                    <img className='avatar' src={this.props.avatar} alt='author avatar' />
                    <Segment >
                        {this.props.authedUserChoose===1 && <div className='tweet-length'>Your Choice</div>}
                        <div>{this.props.question.optionOne.text}</div>
                        <div>percentage:{percentOfOptionOne*100} %</div>
                    </Segment>
                    <Segment basic textAlign='center'>

                        <Divider horizontal>OR</Divider>


                    </Segment>
                    <Segment>
                    {this.props.authedUserChoose===2 && <div className='tweet-length'>Your Choice</div>}
                        <div>{this.props.question.optionTwo.text}</div>
                        <div>percentage:{percentOfOptionTwo*100} %</div>
                    </Segment>
                
            </div>
            </div>
        )
    }
}
function mapStateToProps({questions,users,authedUser},{id,optionOneVotes,optionTwoVotes}){
    const question=questions[id]
    const avatar = users[question.author].avatarURL
    const authedUserChoose= optionOneVotes.includes(authedUser) ? 1 : 2
    return {
        question,authedUser,avatar,authedUserChoose
    }
}
export default connect(mapStateToProps)(QuestionResult)