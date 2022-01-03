import React from 'react'
import { Badge } from 'react-bootstrap'
import PropTypes from 'prop-types'

function FavoriteCats({ total }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h5 className="d-inline">Favorite Cats</h5>
      <Badge pill bg="primary">{total}</Badge>
    </div>
  )
}

FavoriteCats.propTypes = {
  total: PropTypes.number.isRequired
}

FavoriteCats.defaultProps = {
  total: 0
}

export default FavoriteCats
