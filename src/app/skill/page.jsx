import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className="bg-amber-50 flex justify-center items-center flex-col w-full max-w-[1200px] mx-auto gap-3 pt-5 px-4">
      <h1 className="text-4xl font-bold text-gray-700 text-center">SKILL</h1>
      <div className="w-full flex justify-center">
        <Image
          src="/skill.png"
          alt="Skill"
          width={840}
          height={800}
          className="w-full h-auto max-h-[calc(100vh-150px)] object-contain"
        />
      </div>
    </div>
  )
}

export default Page
