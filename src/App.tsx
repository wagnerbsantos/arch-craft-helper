import './App.css'
import React from 'react'
import { VFlow } from 'bold-ui'
import { Title } from './components/Title'

import { Body } from './components/Body'

export const App = () => {
  return (
    <div>
      <VFlow alignItems='center'>
        <Title />
        <Body />
      </VFlow>
    </div>
  )
}
