import { getInitialData } from '../utils/api'
import { receiveUsers, addAnswerToUser } from '../actions/users'
import { receiveQuestions, addAnswerToQuestion } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestionAnswer } from './../utils/api'

const AUTHED_ID = 'signedOut'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
  console.log("1" , authedUser,qid,answer)
  return dispatch => {
    //console.log("2" , authedUser,qid,answer) 
    dispatch(showLoading())
    //console.log("3" , authedUser,qid,answer)
    return saveQuestionAnswer(authedUser, qid, answer).then(()=>{
      //console.log("4" , authedUser,qid,answer)
      dispatch(addAnswerToQuestion)
      dispatch(addAnswerToUser)
      dispatch(hideLoading())
    })
  };
}
