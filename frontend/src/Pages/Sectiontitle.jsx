import React from 'react'

const Sectiontitle = ({title}) => {
  return (
    <div className="
    relative w-fit mx-auto
    text-blue-600 text-3xl font-bold pb-5
    border-b border-blue-600
    before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2
    before:-bottom-[1px] before:w-1/3 before:h-[3px]
    before:bg-blue-600
  ">
    {title}
  </div>
  
  )
}

export default Sectiontitle