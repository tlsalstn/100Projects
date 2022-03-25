import React from 'react'
import { LinkButton } from '../components/Button/LinkButton'
import { IntroLayout } from '../layouts'

function IntroPage() {
  return (
    <IntroLayout>
      <LinkButton to={'/generator'} background={'#00dd20'} bold color={'#fff'} fontSize={18} hover>
        Generate Meal!
      </LinkButton>
    </IntroLayout>
  )
}

export default IntroPage
