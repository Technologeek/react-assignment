import React from 'react'
import { LoaderContainer } from './style'

const Loader = () => {
  return (
    <LoaderContainer>
      <div className="lds-hourglass" />
    </LoaderContainer>
  )
}
export default Loader
