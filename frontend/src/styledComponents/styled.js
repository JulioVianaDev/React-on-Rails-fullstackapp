import styled from 'styled-components'

export const LinkEstilizado = styled.div`
  color: aliceblue;
  &:hover{
    color:aqua;
  }
`;
export const NavbarEstilizada = styled.nav`
  width: 100%;
  height:50px;
  background-color: rgb(1, 11, 87);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color:antiquewhite;
`;

export const TituloDev = styled.h1`
  font-size:3rem;
  color:white;
  text-align:center;
`;

export const LinkSite= styled.a`
  color:aqua;
`;
export const Centro=styled.div`
  height:200px;
  display:flex;
  justidy-content:center;
  align-items:center;
  padding-left:40%;
`;
export const DivEstilizada= styled.div`
  background-color:  #34024e;
  width: 250px;
  height:50px;
  font-size:1.5rem;
  display:flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  border-radius:20px;
`;
