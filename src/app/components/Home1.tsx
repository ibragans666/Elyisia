import React from 'react'
import styles from './Home.module.css'

const Home1 = () => {
  return (
    <div className={`${styles.bgpink} flex`}>
        <div className='basis-1/2 text-center ml-[35px] mt-[30px]'>
            <div>
                <ul className='flex space-x-[25px] space-y-[25px]'>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                </ul>
                <ul className='flex space-x-[25px] space-y-[25px]'>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                </ul>
                <ul className='flex space-x-[25px] space-y-[25px]'>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                </ul>
                <ul className='flex space-x-[25px] space-y-[25px]'>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                    <li className='border w-[10px] h-[10px] bg-white'></li>
                </ul>
            </div>
            <div className='flex'>
                <div className='basis1/5 mt-[20px]'>
                    <ul className='space-y-[10px] items-center [@media(max-width:400px)]:hidden'>
                        <li className=' border-[3px] h-[60px] w-[60px] text-[30px]'>1</li>
                        <li className=' border-[3px] h-[60px] w-[60px] text-[30px]'>2</li>
                        <li className=' border-[3px] h-[60px] w-[60px] text-[30px]'>3</li>
                        <li className=' border-[3px] h-[60px] w-[60px] text-[30px]'>4</li>
                    </ul>
                </div>
                <div className='basis-4/5'>
                    <div className='[@media(max-width:400px)]:ml-0 text-left ml-[40px] mt-[30px]'>
                        <p className='[@media(max-width:400px)]:text-[20px] text-[40px] mb-0 ml-[2px]'>Herrscher of Human: Ego</p>
                        <h1 className='[@media(max-width:400px)]:text-[80px] tracking-[0.16em] text-[128px] mt-[-0.3em]'>ELYSIA</h1>
                        <div className='flex [@media(max-width:400px)]:w-[60px] [@media(max-width:400px)]:h-[60px] [@media(max-width:400px)]:space-x-[20px] [@media(max-width:400px)]:mt-[-10px] w-[100px] h-[100px] ml-[15px] space-x-[40px] mt-[-1.7em]'>
                            <img src="/elysia7.jpg" alt="" className='rounded-lg'/>
                            <img src="/elysia4.jpg" alt="" className='rounded-lg'/>
                            <img src="/elysia6.jpg" alt="" className='rounded-lg'/>
                            <img src="/elysia3.jpg" alt="" className='rounded-lg'/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="/signet.svg" className='w-[577px] h-[577px] ml-[-100px] mt-[-170px] opacity-15' alt="" style={{filter: 'brightness(0) saturate(100%) invert(100%)'}}/>
            </div>
        </div>
        <div className='basis-1/2 '>
            <img src="/image.png" alt="" className=' ml-auto h-[684px] mt-10 transform scale-x-[-1] sm:block' />
        </div>
    </div>
  )
}

export default Home1