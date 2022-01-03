import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button, ButtonGroup, Spinner } from 'react-bootstrap'
import { BiLike, BiDislike } from 'react-icons/bi';

function CatCard({ isLoading, catImage, like, dislike }) {
  return (
    <Card style={{ width: '18rem' }}>
      {isLoading
        ? (<Spinner className="my-2 mx-auto" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>)
        : (<Card.Img variant="top" src={catImage} />)}
      <Card.Body>
        <ButtonGroup className="d-flex">
          <Button
            variant="danger"
            disabled={isLoading}
            onClick={dislike}
          >
            <BiDislike />
          </Button>
          <Button
            variant="success"
            disabled={isLoading}
            onClick={like}
          >
            <BiLike />
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  )
}

CatCard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  catImage: PropTypes.string.isRequired
}

export default CatCard


