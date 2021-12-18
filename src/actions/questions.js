export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    tweet,
  }
}

export function handleAddQuestion (text) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveTweet({
      text,
      author: authedUser,
    })
      .then((tweet) => dispatch(addTweet(tweet)))
      
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  }
}