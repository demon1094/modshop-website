import { Container } from './styles'
import { BiHeart } from 'react-icons/bi'

export function Mod({ img, title, price }) {
  return (
    <Container>
      <img src={img} alt="Imagem do produto" />

      <div className="title">
        <h2>{title}</h2>
        <BiHeart />
      </div>

      <span>{price}</span>
    </Container>
  )
}