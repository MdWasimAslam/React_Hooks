import React, { useState, useMemo } from 'react'

const UseMemoHook = () => {
    const [countOne, setcountOne] = useState(0);
    const [countTwo, setcountTwo] = useState(0);

    const incrementOne = () => {
        setcountOne(countOne + 1);
    }

    const incrementTwo = () => {
        setcountTwo(countTwo + 1);
    }

    // const isEven = () => {
    //     console.log('Slow function called!')
    //     let i = 0;
    //     while(i < 2000000000) i++;
    //     return countOne % 2 === 0;
    // }

    const isEven = useMemo(() => {
        console.log('Slow function called!')
        let i = 0;
        while (i < 2000000000) i++;
        return countOne % 2 === 0;
    }, [countOne]) // This will only re-render when countOne changes


    return (
        <div>
            <span className='h1Text'>{isEven ? 'Even' : 'Odd'}</span>
            <button className='greenBtn' onClick={incrementOne}>Count One - {countOne}</button>
            <button className='blueBtn' onClick={incrementTwo}>Count Two - {countTwo}</button>

        </div>
    )
}

export default UseMemoHook