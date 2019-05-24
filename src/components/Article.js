import React, { useState, useEffect } from 'react'
import '../App.css'
import Moment from 'react-moment'
import Modal from './Modal'

const Article = ({ article }) => {
  const [showModal, setShowModal] = useState(false)

  function resizeMasonryItem(item) {
    var grid = document.getElementsByClassName('masonry')[0],
      rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
      ),
      rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
      )
    function resizeAllMasonryItems() {
      // Get all item class objects in one list
      var allItems = document.getElementsByClassName('masonry-brick')

      /*
       * Loop through the above list and execute the spanning function to
       * each list-item (i.e. each masonry item)
       */
      for (var i = 0; i < allItems.length; i++) {
        resizeMasonryItem(allItems[i])
      }
    }

    /*
     * Spanning for any brick = S
     * Grid's row-gap = G
     * Size of grid's implicitly create row-track = R
     * Height of item content = H
     * Net height of the item = H1 = H + G
     * Net height of the implicit row-track = T = G + R
     * S = H1 / T
     */
    var rowSpan = Math.ceil(
      (item.querySelector('.masonry-content').getBoundingClientRect().height +
        rowGap) /
        (rowHeight + rowGap)
    )

    /* Set the spanning as calculated above (S) */
    item.style.gridRowEnd = 'span ' + rowSpan
  }

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
