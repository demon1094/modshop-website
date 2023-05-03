import { Container } from './styles'

import { BiCart, BiHeart, BiPlus } from 'react-icons/bi'
import Logo from '../../assets/logo.png'

import ReboqueIMG from '../../assets/reboque2.png'
import CombosIMG from '../../assets/combos.png'
import TruckIMG from '../../assets/truck.png'
import DlcIMG from '../../assets/dlc.png'
import BusIMG from '../../assets/bus.png'

import { useState } from 'react'

export function Header() {
  const [ open, setOpen ] = useState(false)
  const [ MenuOpen, setMenuOpen ] = useState(false)

  function toogleMenuMods() {
    if (!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  function toogleMenuOpen() {
    if (!MenuOpen) {
      setMenuOpen(true)
    } else {
      setMenuOpen(false)
    }
  }

  return (
    <Container>
      <nav>
        <ul>
          <div className="nav-links">
            <li onClick={toogleMenuMods}><a href="#">Nossos Mods</a></li>
            <li><a href="#">Seja um Afiliado</a></li>
          </div>

          <div className={`menu-btn-wrapper ${MenuOpen ? 'open' : 'close'}`}>
            <div className="menu-btn" onClick={toogleMenuOpen}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>

            <div className="menu">
              <ul>
                <li>Nossos Mods <BiPlus /></li>
                <li>Entrar</li>
                <li>Lista de Desejos</li>
                <li>Seja um Afiliado</li>
              </ul>
            </div>
          </div>

          <button>
            <img src={Logo} alt="Logo" />
          </button>

          <div className="nav-links">
            <li className="link-w-icon">
              <a className="hide-responsive" href="#">App ModShop Edit</a>
              <BiHeart className="hide-responsive" />
            </li>
            <li className="link-w-icon">
              <a className="hide-responsive" href="#">Entrar</a>
              <div>
                <BiCart />
                <span>0</span>
              </div>
            </li>
          </div>
        </ul>
      </nav>

      <div className={`mods-menu ${open ? 'active' : 'inactive'}`}>
        <ul>
          <li>
            <img src={BusIMG} alt="Bus" />
            <h3>Ônibus</h3>
          </li>

          <li>
            <img src={TruckIMG} alt="Truck" />
            <h3>Caminhões</h3>
          </li>

          <li>
            <img src={ReboqueIMG} alt="Reboque" />
            <h3>Reboques</h3>
          </li>

          <li>
            <img src={CombosIMG} alt="Combos" />
            <h3>Combos</h3>
          </li>

          <li>
            <img src={DlcIMG} alt="DLC - Bus" />
            <h3>DLC - Ônibus</h3>
          </li>
        </ul>
      </div>
    </Container>
  )
}