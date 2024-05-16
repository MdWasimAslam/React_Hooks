import React, { useState, useEffect } from 'react'
import "./styles.css";

const UseEffectHook = () => {
    const [count, setcount] = useState(0);
    const [useffectdependency, setuseffectdependency] = useState(0)
    const [screenSize, setscreenSize] = useState(window.screen.width)


    // When useffect is called without any dependency it will run in every render
    // useEffect(() => {
    //   console.log('useEffect called')
    // })


    // When useffect is called with empty array as dependency it will run only once
    // useEffect(() => {
    //     console.log('useEffect called')
    // }, [])


    // When useeffect is called with some dependency it will run when that dependency is changed
    // useEffect(() => {
    //     console.log('useEffect called')
    // }, [useffectdependency])


    //CleanUp Function
    // Example 1
    // useEffect(() => {
    //     console.log('useEffect called',count, 'times');

    //     return ()=>{
    //         console.log('CleanUp Function called',count, 'times')
    //     }
    // },[count])

    // Example 2


    function updateScreenSize() {
        setscreenSize(window.screen.width)
    }


    useEffect(() => {
        window.addEventListener('resize', updateScreenSize)

        return () => {
            window.removeEventListener('resize', updateScreenSize)
        }


    }, [screenSize])




    return (
        <div>
            <h1 className='h1Text'>useEffect Hook</h1>
            <h1 className='h1Text'>Screen Width: {screenSize}</h1>
            <h1 className='h1Text'>{count}</h1>
            <button className='greenBtn' onClick={() => setcount(count + 1)}>Add</button>
            <button className='blueBtn' onClick={() => setcount(0)}>Reset</button>
            <button className='redBtn' onClick={() => setuseffectdependency(useffectdependency + 1)}>useEffect Dependency</button>
        </div>
    )
}

export default UseEffectHook