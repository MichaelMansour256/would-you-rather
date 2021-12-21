import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Radio, Form, FormField, Button } from 'semantic-ui-react'
import QuestionResult from './QuestionResult'
import { handleSaveQuestionAnswer } from '../actions/shared'
import { Redirect } from 'react-router-dom'
class AnswerQuestion extends Component {
    state = {
        value: "1"
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        console.log("hiiii")
        const {dispatch}=this.props
        const answer = this.state.value ==="1"? "optionOne" :"optionTwo" 
        dispatch(handleSaveQuestionAnswer(this.props.authedUser, this.props.question.id,answer ));
    }
    handleChange = (e, { value }) => {
        e.preventDefault()

        this.setState({
            value
        })
    }
    render() {
        if(this.props.question===undefined){
            return <Redirect to='/404' />
        }
        const { optionOne, optionTwo } = this.props.question
        const { authedUser } = this.props 
        const votes = optionTwo.votes.concat(optionOne.votes)
        
        return (
            votes.includes(authedUser) ? (<div> <QuestionResult id={this.props.id} optionOneVotes={optionOne.votes} optionTwoVotes={optionTwo.votes}/> </div>)
                :
                <div className='card'>
                    <Form size='large' onSubmit={this.handleSubmit}>
                        <FormField widths='equal'>
                            <h3 className='center'>Would You Rather ...</h3>
                            <Radio
                                label={optionOne.text}
                                name='Answer'
                                value="1"
                                checked={this.state.value === "1"}
                                onChange={this.handleChange}
                            /><br />
                            <Radio
                                label={optionTwo.text}
                                name='Answer'
                                value="2"
                                checked={this.state.value === "2"}
                                onChange={this.handleChange}
                            />
                        </FormField>
                        <Button
                            color="green"
                            size="tiny"
                            fluid
                            positive
                            content="Submit"
                        />
                    </Form>

                </div>

        )
    }
}
function mapStateToProps({ questions, authedUser }, props) {
    const { id } = props.match.params
    const question = questions[id]

    return {
        question,
        authedUser,
        id
    }
}
export default connect(mapStateToProps)(AnswerQuestion)