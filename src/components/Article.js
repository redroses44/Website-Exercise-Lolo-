import React, { useState } from 'react'
import Moment from 'react-moment'
import '../App.css'
import Modal from './Modal'

const Article = ({ article }) => {
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
        {link && (
          <img
            alt={enclosure.link}
            src={
              enclosure.link
                ? enclosure.link
                : 'https://makitweb.com/demo/broken_image/images/noimage.png'
            }
          />
        )}
      </div>
      <div className="center">
        <hr className="hide-sm" />
      </div>

      <div className="text hide-sm">
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
