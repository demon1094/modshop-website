import { Container } from './styles'
import FooterIMG from '../../assets/logorodape.png'

import { FiYoutube, FiFacebook, FiInstagram } from 'react-icons/fi'

export function Footer() {
  return (
    <Container>
      <div className="logo">
        <img src={FooterIMG} />
        <span>© 2023 Todos os direitos reservados a ModShop.</span>
      </div>

      <nav>
        <ul>
          <li><a href="#">Sobre nós</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>

      <nav>
        <ul>
          <li>
            <FiYoutube />
          </li>
          <li>
            <FiFacebook />
          </li>
          <li>
            <FiInstagram />
          </li>
        </ul>
      </nav>
    </Container>
  )
}