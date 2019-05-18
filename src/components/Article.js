import React, { useState } from 'react'
import '../App.css'
import Moment from 'react-moment'
import Modal from './Modal'

const Article = ({ article }) => {
  console.log(article)
  const [showModal, setShowModal] = useState(false)

  const {
    author,
    enclosure,
    description,
    title,
    pubDate,
    categories,
    link
  } = article
  return (
    <div
      className="box"
      onClick={() => {
        setShowModal(!showModal)
      }}
    >
      {showModal && (
        <Modal
          title={title}
          author={author}
          description={description}
          pubDate={pubDate}
          categories={categories}
          link={link}
          img={enclosure.link}
        />
      )}
      <div className="header">
        <h4>{title && title}</h4>
        {link && <img src={enclosure.link} alt="Cant load" />}
      </div>
      <div className="center">
        <hr />
      </div>

      <div className="text">
        <p className="lead">{description && description}</p>
      </div>
      {author && (
        <div className="footer">
          <p>
            Posted by {author} <Moment fromNow>{pubDate}</Moment>
          </p>
        </div>
      )}
    </div>
  )
}

export default Article
