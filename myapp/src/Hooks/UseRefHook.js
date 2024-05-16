import React from 'react'
import { useRef,useState,useEffect } from 'react'
import './styles.css'



const UseRefHook = () => {

    const [count, setcount] = useState(0)
    const ref = useRef(0)

    useEffect(() => {
     console.log('useEffect called')
    })

    function increment(){
        ref.current = ref.current + 1;
        console.log(ref.current)
    }
    

  return (
    <>
        <h1 className='h1Text' >{count}</h1>
        <button className='greenBtn' onClick={()=>setcount(count+1)}>Increment</button>
        <h1 className='h1Text' >{ref.current}</h1>
        <button className='blueBtn' onClick={increment}>Increment</button>
    </>
  )
}

export default UseRefHook