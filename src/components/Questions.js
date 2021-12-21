import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Question from './Question'
class Questions extends Component {

    render() {
        const panes = [
            {
                menuItem: 'UnAnswerd Question ', render: () => {
                    return (
                        <div className="qust_tab">
                            {this.props.unanswerd.map(
                                (a) => (<Question id={a} key={a}/>)
                            )}
                        </div>
                    )
                }
            },
            {
                menuItem: ' Answerd Question', render: () => {
                    return (
                        <div className="qust_tab">
                            {this.props.answerd.map(
                                (a) => (<Question id={a} key={a}/>)
                            )}
                        </div>
                    )
                }
            },
        ]
        return (
            <div>
                <Tab panes={panes} />
            </div>
        )
    }
}
function mapStateToProps({ questions, users, authedUser }) {
    const answerd = Object.keys(questions)
                    .sort((a,b)=>questions[b].timestamp - questions[a].timestamp)
                    .filter((k) => (questions[k].optionOne.votes.includes(authedUser))|| questions[k].optionTwo.votes.includes(authedUser))
    const unanswerd = Object.keys(questions)
                    .sort((a,b)=>questions[b].timestamp - questions[a].timestamp)
                    .filter((k) => !(questions[k].optionOne.votes.includes(authedUser)) && !questions[k].optionTwo.votes.includes(authedUser))
    return {
        unanswerd: unanswerd,
        answerd: answerd
    }
}
export default connect(mapStateToProps)(Questions)