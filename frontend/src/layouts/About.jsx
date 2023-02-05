import React from 'react'
import { TituloDev ,LinkSite,DivEstilizada,Centro} from '../styledComponents/styled'
function About() {
  return (
    <div>
      <TituloDev>JulioVianaDev</TituloDev>
      <Centro>
        <DivEstilizada>
          <LinkSite href="https://www.juliovianadev.com/" _blank >Ir para o meu site</LinkSite>
        </DivEstilizada>
      </Centro>
    </div>
  )
}

export default About