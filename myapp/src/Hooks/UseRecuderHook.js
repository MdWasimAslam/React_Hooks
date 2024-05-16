import React, { useReducer } from 'react'


const reducer = (state, action) => {
    console.log(state, action)

    if(action.type === 'INCREMENT'){
        state = state + 1
        return state;
    }
}



const UseRecuderHook = () => {

  const [state , dispatch]= useReducer(reducer, 0)

  return (
    <>
        <h1 className='h1Text' >{state}</h1>
        <button className='greenBtn' onClick={()=>{dispatch({ type:'INCREMENT' })}} >Add</button>
    </>
  )
}

export default UseRecuderHook