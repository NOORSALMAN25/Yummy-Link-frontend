import { NavLink } from 'react-router-dom'
import '../../public/styleSheets/home-style.css'

const Header = () => {
  return (
    <div className="header-container">
      <img src="../../images/logo.png" alt="logo-yummy-link" />
      <nav>
        <NavLink to={'/'}>🏠 Home</NavLink>
        <NavLink to={'/About'}>ℹ️ About</NavLink>
      </nav>
    </div>
  )
}

export default Header
