import React from 'react'
import CallImg from '../../assets/Call To Action/Call.jpg'

const Call = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat py-24 px-6"
      style={{ backgroundImage: `url(${CallImg})` }}
    >

      {/* Overlay عشان تخفيف الصورة */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* المحتوى */}
      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Call To Action</h1>

        <p className="text-lg leading-relaxed mb-8">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <button className=" text-white border border-white font-semibold rounded-2xl px-8 py-3">
          Call To Action
        </button>
      </div>

    </div>
  )
}

export default Call
