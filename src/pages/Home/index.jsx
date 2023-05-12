import { Container, ModsList } from './styles'

import { Carousel } from '../../components/Carousel'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Mod } from '../../components/Mod'

import { BiPlus } from 'react-icons/bi'

import ModIMG1 from '../../assets/mod1.jpg'
import ModIMG2 from '../../assets/mod2.jpg'
import ModIMG3 from '../../assets/mod3.jpg'
import ModIMG4 from '../../assets/mod4.jpg'
import ModIMG5 from '../../assets/mod5.jpg'
import ModIMG6 from '../../assets/mod6.jpg'
import ModIMG7 from '../../assets/mod7.png'
import ModIMG8 from '../../assets/mod8.jpg'
import ModIMG9 from '../../assets/mod9.png'
import ModIMG10 from '../../assets/mod10.jpg'
import ModIMG11 from '../../assets/mod11.jpg'
import ModIMG12 from '../../assets/mod12.png'

export function Home() {
  return (
    <Container>
      <Header />
      
      <div className="carousel-wrapper">
        <Carousel />
      </div>

      <ModsList>
        <nav>
          <ul>
            <li><a href="#">Todos</a></li>
            <span>/</span>
            <li><a href="#">Ônibus</a></li>
            <span>/</span>
            <li><a href="#">Combos</a></li>
            <span>/</span>
            <li><a href="#">Caminhões</a></li>
            <span>/</span>
            <li><a href="#">DLC - Ônibus</a></li>
            <span>/</span>
            <li><a href="#">Reboques</a></li>
          </ul>
        </nav>

        <div className="mods">
          <Mod
            img={ModIMG1}
            title="DLC - G8 1800 DD 0500RSDD"
            price="R$16,99"
          />

          <Mod
            img={ModIMG2}
            title="PARADISO G8 1800 DD - SCANIA 15M"
            price="R$24,99"
          />

          <Mod
            img={ModIMG3}
            title="DLC – G7 1350 MB O500RSD"
            price="R$14,99"
          />

          <Mod
            img={ModIMG4}
            title="COMBO 5 – G7 1200 O500 + DLC SCANIA"
            price="R$28,99"
          />
          
          <Mod
            img={ModIMG5}
            title="COMBO 4 – G6 1200 O500 + DLC SCANIA K124"
            price="R$28,99"
          />

          <Mod
            img={ModIMG6}
            title="DLC – G6 1200 SCANIA K124"
            price="R$14,99"
          />

          <Mod
            img={ModIMG7}
            title="CAMPIONE 3.65 O500RSD"
            price="R$19,99"
          />

          <Mod
            img={ModIMG8}
            title="DLC – G7 1200 6×2 – SCANIA"
            price="R$14,99"
          />

          <Mod
            img={ModIMG9}
            title="VISSTA BUSS DD 8×2 – 15M"
            price="R$23,99"
          />

          <Mod
            img={ModIMG10}
            title="INVICTUS DD 6X2/8X2 VOLVO"
            price="R$22,99"
          />

          <Mod
            img={ModIMG11}
            title="VW TITAN MULTICHASSI"
            price="R$17,90"
          />

          <Mod
            img={ModIMG12}
            title="PARADISO G7 1350 VOLVO B420R"
            price="R$18,99"
          />
        </div>
      </ModsList>

      <button className="show-more">
        Carregar Mais
        <BiPlus />
      </button>

      <Footer />
    </Container>
  )
}