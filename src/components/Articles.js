import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getArticles } from '../actions/articles'
import Article from './Article'
import Spinner from './Spinner'

const Articles = ({ getArticles, articles: { loading, articles } }) => {
  useEffect(() => {
    getArticles()
  }, [getArticles])
  return (
    <div className="gridContainer">
      {!loading ? (
        articles.map(article => (
          <Article key={article.guid} article={article} />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  articles: state.articles
})

export default connect(
  mapStateToProps,
  { getArticles }
)(Articles)
