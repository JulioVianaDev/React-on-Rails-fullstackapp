import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { AuthConsumer } from '../providers/authProvider'
function Navbar({user,handleLogout}) {
  const rightNavItems = () => {
    // links to show up if the user is logged in
    if (user) {
      return (
        <nav className="me-auto">
          <div onClick={() => handleLogout()}>
            Logout
          </div>
        </nav>
      )
    } else {
      // links to show up when they are not logged in
      return (
        <>
              <Link to='/login'>
                <div className='link'>
                  Login
                </div>
              </Link>
              <Link to='/register'>
                <div className='link'>
                  Register
                </div>
              </Link>

        </>
      )
    }
  }
  return (
    <nav className='navbar'>
      <Link to='/'>
        <div className='link'>
          Página inicial
        </div>
      </Link>
     <Link to='/cars'>
        <div className='link'>
          Verificar os carros
        </div>
      </Link>
     <Link to='/about'>
        <div className='link'>
          Desenvolvedor
        </div>
      </Link>
      { rightNavItems() }
    </nav>
  )
}
const ConnectedNavbar=  ( props)=>(
  <AuthConsumer>
    {value => <Navbar {...props} {...value}/>}
  </AuthConsumer>
)

export default ConnectedNavbar