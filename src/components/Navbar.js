import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import cart from '../img/cart-logo.png'

function Navbar(props) {
  return(
    <div className='navbar'>
      <Link to='/'>
        <div className='logo'>
          Watch Store
        </div>
      </Link>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/store'>
          <li>Store</li>
        </Link>
        <Link to='/cart'>
          <img src={cart} />
        </Link>
      </ul>
    </div>
  )
}

export default Navbar