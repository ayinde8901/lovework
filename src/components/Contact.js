import React from 'react'

const Contact = () => {
  return (
    <div style={{display:'grid', justifyContent:'center', alignItems:'center', margin:'15px 0 ', height:'50vh'}}>
      <h2>Contact Support</h2>
      <div className='border'>
        <h3 style={{fontWeight:'700', marginTop:'20px'}}>Messages</h3>
        <hr/>
        <h6 style={{marginTop:'2px', fontWeight:'700', fontSize:'20px'}}>Help</h6>
      </div>
      <div className='border'>
        <h6 style={{fontSize:'20px', fontWeight:'700', marginTop:'20px'}}>Contact Support</h6>
        <h6 style={{fontSize:'15px', fontWeight:'700'}}>we typically reply in under a minute</h6>
      </div>
    </div>
  )
}

export default Contact
