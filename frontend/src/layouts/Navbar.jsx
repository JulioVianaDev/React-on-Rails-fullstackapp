import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { AuthConsumer } from '../providers/authProvider'
import { LinkEstilizado,NavbarEstilizada } from '../styledComponents/styled'
function Navbar({user,handleLogout}) {
  const rightNavItems = () => {
    // links to show up if the user is logged in
    if (user) {
      return (
          <div onClick={() => handleLogout()}>
            <LinkEstilizado>Deslogar</LinkEstilizado>
          </div>
      )
    } else {
      // links to show up when they are not logged in
      return (
        <>
              <Link to='/login'>
                <LinkEstilizado>Logar</LinkEstilizado>
              </Link>
              <Link to='/register'>
                <LinkEstilizado>Registre-se</LinkEstilizado>
              </Link>

        </>
      )
    }
  }
  return (
    <NavbarEstilizada>
      <Link to='/'>
        <LinkEstilizado> Página inicial</LinkEstilizado>
      </Link>
      <Link to='/galeria'>
        <LinkEstilizado>Galeria de imagens</LinkEstilizado>
      </Link>
     <Link to='/cars'>
       <LinkEstilizado>Cadastro de carros</LinkEstilizado>
      </Link>
     <Link to='/about'>
       <LinkEstilizado>Desenvolvedor</LinkEstilizado>
      </Link>
      { rightNavItems() }
    </NavbarEstilizada>
  )
}
const ConnectedNavbar=  ( props)=>(
  <AuthConsumer>
    {value => <Navbar {...props} {...value}/>}
  </AuthConsumer>
)

export default ConnectedNavbar