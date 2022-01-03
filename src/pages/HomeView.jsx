import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CatCard from '../components/CatCard'
import FavoriteCats from '../components/FavoriteCats'
import GridCattImage from '../components/GridCattImage'

const apiKey= '926c5901-2dfc-4ebc-880e-70fe2b8b843b'
const url ='https://api.thecatapi.com/v1/images/search'

function HomeView() {
  const [catImage, setCatImage] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [dislikes, setDislikes] = React.useState(0)
  const [likes, setLikes] = React.useState(0)
  const [favoriteCats, setFavoriteCats] = React.useState([])
  

  React.useEffect(() => {
    setIsLoading(true)

    fetch(url,{
      
      headers:{

        'x-api-key':apiKey


    }}
      )
      .then(response => response.json())
      .then(catData => {
        const catUrl = catData[0].url
        setCatImage(catUrl)})
      

      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [likes, dislikes]);

  const dislikeHandler = () => {
    setCatImage('')
    setDislikes(dislikes + 1)
  }

  const likeHandler = () => {
    setLikes(likes + 1)
    setFavoriteCats([...favoriteCats, catImage])
  }

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Row>
        <Col sm>
          <FavoriteCats total={likes} />
          <CatCard
            isLoading={isLoading}
            catImage={catImage}
            dislike={dislikeHandler}
            like={likeHandler}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <GridCattImage favoriteImages={favoriteCats} />
      </Row>
    </Container>
  )
}

export default HomeView
