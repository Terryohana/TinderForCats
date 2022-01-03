import React from 'react'
import PropTypes from 'prop-types'
import { Col, Image } from 'react-bootstrap'


function GridCattImage({ favoriteImages }) {
  return (
    <>
      {favoriteImages.length === 0
        ? 'Check Out Tinder For CATS MIYAWWW'
        : (favoriteImages.map((image, index) => (
          <Col md={2} sm={3} xs={6}>
            <a href={image} target="_blank" rel="noreferrer" key={index}>
              <Image src={image} fluid />
            </a>
          </Col>
        )))
      }
    </>
  )
}

GridCattImage.propTypes = {
  favoriteImages: PropTypes.array.isRequired
}

export default GridCattImage

