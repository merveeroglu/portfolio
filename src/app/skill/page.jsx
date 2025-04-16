import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='bg-amber-50 flex justify-center items-center flex-col w-fit max-w-[1200px] mx-auto gap-3 pt-5'>
        <h1 className='text-4xl font-bold text-gray-700 text-center '>SKILL</h1>
        <Image
          src="/skill.png"
          alt="Skill"
          width={840}
          height={800}
        /> 
    </div>
  )
}

export default Page