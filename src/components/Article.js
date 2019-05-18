import React, { useState } from 'react'
import '../App.css'
import Moment from 'react-moment'
import Modal from './Modal'

const Article = ({ article }) => {
  const [showModal, setShowModal] = useState(false)

  const {
    author,
    enclosure: { link },
    description,
    title,
    pubDate
  } = article
  return (
    <div
      className="box"
      onClick={() => {
        setShowModal(!showModal)
      }}
    >
      {showModal && <Modal />}
      <div className="header">
        <h4>{title ? title : 'No title'}</h4>
        {link && <img src={link} alt="" />}
      </div>
      <div className="text">
        <p className="lead">{description}</p>
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
