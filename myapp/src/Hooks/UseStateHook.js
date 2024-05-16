import React, { useState } from 'react'

const UseStateHook = () => {
 const [userDetails, setuserDetails] = useState({
  name:'',
  count:0
 })


 const addData =()=>{
  setuserDetails({
    ...userDetails,
    count:userDetails.count+1
    })
 }

  return (
    <>

      <h1> {userDetails.count}</h1>
      <button onClick={addData}>Add</button>

     

    </>
  )
}

export default UseStateHook