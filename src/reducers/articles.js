import { GET_ARTICLES } from '../actions/types'

const initialState = {
  articles: [],
  article: null,
  loading: true
}

export default function(state = initialState, action) {
  const { payload, type } = action

  switch (type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: payload,
        loading: false
      }
    default:
      return state
  }
}
