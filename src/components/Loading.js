import React from 'react'
import loading from '../loading.gif'
const Loading =()=> {
    return (
      <div className='text-center  my-3'>
        <img src={loading} alt="loading" style={{width:"30px",height:"30px"}} />
      </div>
    )
  
}
export default Loading
