import React from 'react'
import { BeatLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <BeatLoader color="blue" />
    </div>
  )
}

export default Loading