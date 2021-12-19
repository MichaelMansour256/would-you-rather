import { showLoading, hideLoading } from "react-redux-loading"
import { saveQuestion } from "../utils/api"
import { addQuestionToUser } from "./users"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion (optionOne, optionTwo , authedUser) {
  return (dispatch) => {
    

    dispatch(showLoading())

    return saveQuestion({
      optionOne, optionTwo , authedUser
    })
      .then((question) => dispatch(addQuestion(question)))
      .then((question) => dispatch(addQuestionToUser(question)))
      .then(hideLoading())
      
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}