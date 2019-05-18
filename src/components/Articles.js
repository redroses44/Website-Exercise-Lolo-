import React, { useEffect, useState } from 'react'
import Article from './Article'
import { connect } from 'react-redux'
import { getArticles } from '../actions/articles'
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
