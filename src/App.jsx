import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reducer from './Reducer'
import Usememo from './Usememo'
import Usecallback from './Usecallback'
import UseRefHooks from './UseRefHooks'
import SimpleComponent from './SimpleComponent'
import WithExtraData from './WithExtraData'

const EnhacedComponent =WithExtraData(SimpleComponent)

function App() {


  return (
    <>
      {/* <Reducer /> */}
      {/* <Usememo/>
      <Usecallback/> */}
      {/* <UseRefHooks/> */}
      <EnhacedComponent/>
      
      
    </>
  )
}

export default App
