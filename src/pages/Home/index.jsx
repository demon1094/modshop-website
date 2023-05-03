import { Container } from './styles'

import { Header } from '../../components/Header'
import { Carousel } from '../../components/Carousel'

export function Home() {
  return (
    <Container>
      <Header />
      
      <div className="carousel-wrapper">
        <Carousel />
      </div>
    </Container>
  )
}