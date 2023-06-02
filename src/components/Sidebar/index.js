import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logon from '../../assets/images/logon.png';
import LogoSubitle from '../../assets/images/logoname.png';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)
  return(
    <div className="nav-bar">
      <Link className='logo' to='/'>
          <img src={Logon} alt="logo"/>
          <img className='sub-logo' src={LogoSubitle} alt="mathew"/>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active"      to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link"      to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link"      to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
          <li>
              <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/matei-nedelschi-1636831a7/" >
                  <FontAwesomeIcon icon={faLinkedin} className="anchor-icon" color="#4d4d4e" />
              </a>
          </li>
          <li>
              <a target='_blank' rel='noreferrer' href="https://github.com/NedelschiMatei17" >
                  <FontAwesomeIcon icon={faGithub} className="anchor-icon" color="#4d4d4e"/>
              </a>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar;