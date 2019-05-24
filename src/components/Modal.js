import React from 'react'
import '../App.css'

const Modal = ({
  title,
  author,
  link,
  description,
  pubDate,
  categories,
  img
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button">&times;</span>
        <h3>
          {title} {author && <span> by {author}</span>}
        </h3>
        <hr />
        <img src={img} className="image" alt="" />
        <div className="text">
          <p>{description}</p>
        </div>
        <div className="footer">
          <p>{pubDate}</p>
        </div>
        {categories.map(category => (
          <li>{category}</li>
        ))}
        <a target="_blank" rel="noopener noreferrer" href={link}>
          See more
        </a>
      </div>
    </div>
  )
}

export default Modal
