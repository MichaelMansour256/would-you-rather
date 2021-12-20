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
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer(authedUser, qid, answer).then(()=>{
      dispatch(addAnswerToQuestion(authedUser, qid, answer))
      dispatch(addAnswerToUser(authedUser, qid, answer))
      dispatch(hideLoading())
    })
  };
}
