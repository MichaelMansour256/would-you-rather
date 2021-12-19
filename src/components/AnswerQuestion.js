import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Divider, Form , Segment} from 'semantic-ui-react'
import QuestionResult from './QuestionResult'
class AnswerQuestion extends Component {
    state={
        value:"1"
    }
    handleChange=(e,{value})=>{
        e.preventDefault()
        //const choose=e.target.value
        
        this.setState({
            value
        })
    }
    render() {
        
        //console.log("question answerd", this.props.question)
        const { optionOne,optionTwo  } = this.props.question
        const {authedUser}=this.props
        const votes= optionTwo.votes.concat(optionOne.votes)
        return (
            votes.includes(authedUser) ?(<div> <QuestionResult/> </div> )
                :
            <div className='card'>
                <Form size='large'>
                    <Form.Group widths='equal'>
                        <h3 className='center'>Would You Rather ...</h3>
                        <Segment><Form.Radio
                            label={optionOne.text}
                            value="1"
                            checked={this.state.value==="1"}
                            onChange={this.handleChange}
                        /></Segment>
                        <Divider></Divider>
                        <Segment><Form.Radio
                            label={optionTwo.text}
                            value="2"
                            checked={this.state.value==="2"}
                            onChange={this.handleChange}
                        /></Segment>                
                    </Form.Group>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </div>
                
        )
    }
}
function mapStateToProps({ questions ,authedUser}, props) {
    const { id } = props.match.params
    const question = questions[id]

    return {
        question,
        authedUser
    }
}
export default connect(mapStateToProps)(AnswerQuestion)