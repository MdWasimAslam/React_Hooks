import React from 'react'
import UseStateHook from './Hooks/UseStateHook'
import UseEffectHook from './Hooks/UseEffectHook'
function App() {
  console.log('App rendered', Date.now())
  return (
    <div>
      <UseEffectHook />
    </div>
  )
}

export default App