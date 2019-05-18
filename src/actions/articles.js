import { GET_ARTICLES } from './types'
import axios from 'axios'
export const getArticles = () => async dispatch => {
  try {
    const config = {
      api_key: 'b7q66uq8nhpnas8endeaoadalgwafdbmj1fcdcpg',
      count: 100
    }
    const parseUrl = 'https://api.rss2json.com/v1/api.json?rss_url='
    const rssUrl = 'https://flipboard.com/@raimoseero/feed-nii8kd0sz.rss'
    const response = await axios.get(parseUrl + rssUrl, {
      params: config
    })

    dispatch({
      type: GET_ARTICLES,
      payload: response.data.items
    })
  } catch (error) {
    console.error(error)
  }
}
