import React from 'react'
import styles from './Home.module.css'

const Home4 = () => {
  return (
    <div className={`${styles.textpink} bg-white`}>
        <div className='flex justify-center'>
            <img src="/elysia13.jpg" alt="" className='[@media(max-width:400px)]:w-[200px] [@media(max-width:400px)]:h-[200px] w-[409px] h-[383px] mt-5 mb-5 rounded-[20px]'/>
        </div>
        <div className='[@media(max-width:400px)]:mt-[0px] text-center justify-center mt-[20px]'>
            <h1 className='[@media(max-width:400px)]:text-[32px] text-[64px] justify-center tracking-[0.1em]'>See You In Another World</h1>
            <p className='[@media(max-width:400px)]:text-[12px] text-[24px] justify-center tracking-[0.3em]'>Herrscher of Origin</p>
            <p className='[@media(max-width:400px)]:text-[12px] text-[24px] justify-center tracking-[0.3em]'>Elysia</p>
        </div>
        <div className='[@media(max-width:400px)]:mt-[-150px] flex justify-center mt-[-250px]'>
          <img 
              src="/signet.svg" 
              className='[@media(max-width:400px)]:h-[200px] [@media(max-width:400px)]:w-[200px] w-[400px] h-[400px] opacity-15' 
              alt=""
              style={{ 
                filter: 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(300%) hue-rotate(295deg) brightness(95%) contrast(85%)'
              }}
            />
        </div>
        <div className='pb-10'></div>
    </div>
  )
}

export default Home4