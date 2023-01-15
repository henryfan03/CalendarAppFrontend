import {} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>Calendar App</Link>
        </div>
        
    </header>
  )
}

export default Header