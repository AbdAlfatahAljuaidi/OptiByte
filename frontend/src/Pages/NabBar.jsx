import React from 'react'
import Logo from '../components/NavBar/Logo'
import Menu from '../components/NavBar/Menu'

const NabBar = () => {
  return (
    <div className='flex justify-between items-center py-5 bg-[#37517E]'>
        <Logo />
        <Menu />
    </div>
  )
}

export default NabBar