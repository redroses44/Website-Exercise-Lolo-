import axios from 'axios'
import { GET_ARTICLES } from './types'

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

    /* response.data.items.map(item =>
      Mercury.parse(item.link).then(result => console.log(result))
    ) */

    //console.log(response.data.items)

    setTimeout(() => {
      dispatch({
        type: GET_ARTICLES,
        payload: response.data.items
      })
    }, 500)
  } catch (error) {
    console.error(error)
  }
}
