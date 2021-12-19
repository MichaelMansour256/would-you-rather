import { showLoading, hideLoading } from "react-redux-loading"
import { saveQuestion } from "../utils/api"

import { addQuestionToUser } from "./users"
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';

export function addAnswerToQuestion(authedUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authedUser,
    qid,
    answer
  };
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion (optionOneText, optionTwoText , author) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestion({
      optionOneText, optionTwoText , author
    })
      .then((question) => dispatch(addQuestion(question)))
      .then((question) => dispatch(addQuestionToUser(question)))
      .then(dispatch(hideLoading()))
      
  }
}
/*
export function handleSaveAnswer(authedUser, qid, answer){
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer(authedUser, qid, answer)
    .then(dispatch(addAnswerToUser(authedUser, qid, answer)))
    .then(dispatch(addAnswerToQuestion(authedUser, qid, answer)))
    .then(dispatch(hideLoading()))
  };
}*/
export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}