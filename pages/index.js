import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import pic6 from '@/public/Assets/pic/pic6.png'
import pic3 from '@/public/Assets/pic/pic3.png'
import p1 from '@/public/Assets/pic/p1.png'
import p2 from '@/public/Assets/pic/p2.png'
import p3 from '@/public/Assets/pic/p3.png'
import p4 from '@/public/Assets/pic/p4.png'
import p5 from '@/public/Assets/pic/p5.png'
import { FaCompass } from 'react-icons/fa'
import { BiSolidStar } from 'react-icons/bi'
import { BiSolidMessageRoundedDots } from 'react-icons/bi'
import { FiTrendingUp } from 'react-icons/fi'
import { ImEarth } from 'react-icons/im'
import Dashboard from '@/components/Dashboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='md:min-h-[1000px] min-h-[3000xp] '>
      <Navbar />
      <div className='flex flex-row bg-[#F7F8FA] '>


        <div className='relative h-[1030px] top-[-1px] hidden md:flex flex-col justify-between border border-t-0 py-8 px-4'>
          <div className='flex py-4 flex-col '>
            <button className="p-2 mx-1 border m-1 shadow-sm justify-center flex items-center bg-white rounded-full text-gray-700 outline-none border-none focus:border-none">

              <FaCompass className='text-[18px] border-none text-[#3361FF] fill-[#3361FF] ' />

            </button>
            <button className="p-2 mx-1 border m-1 shadow-sm justify-center flex items-center bg-white rounded-full text-gray-700 outline-none border-none focus:border-none">

              <BiSolidStar className='text-[18px] border-none text-[#C3CAD9] fill-[#C3CAD9] ' />

            </button>

            <div className='flex flex-row'>
              <button className="p-2 mx-1 border m-1 shadow-sm justify-center flex items-center bg-white rounded-full text-gray-700 outline-none border-none focus:border-none">

                <Image src={pic3} width={20} height={20} alt='c' />

              </button>
              <div className='absolute right-0 w-2 h-2 mr-6 rounded-lg bg-[#3361FF]'></div>
            </div>

            <button className="p-2 mx-1 border m-1 shadow-sm justify-center flex items-center bg-white rounded-full text-gray-700 outline-none border-none focus:border-none">

              <FiTrendingUp className='text-[18px] border-none text-[#C3CAD9] fill-[#C3CAD9] ' />

            </button>
            <button className="p-2 mx-1 border m-1 shadow-sm justify-center flex items-center bg-white rounded-full text-gray-700 outline-none border-none focus:border-none">

              <ImEarth className='text-[18px] border-none text-[#C3CAD9] fill-[#C3CAD9] ' />

            </button>
            <button className="p-2 mx-1 border m-1 shadow-sm justify-center flex items-center bg-white rounded-full text-gray-700 outline-none border-none focus:border-none">

              <Image src={pic6} width={20} height={20} alt='c' />

            </button>
          </div>
          <div className='flex flex-col '>
            <div className='flex flex-row'>
              <button className="p-0 mx-1 border m-1 shadow-sm justify-center flex items-center  rounded-full text-gray-700 outline-none border-none focus:border-none">

                <Image src={p1} width={35} height={20} alt='c' />

              </button>
              <div className='absolute right-0 w-2 h-2 mr-6 rounded-lg bg-[#3361FF]'></div>
            </div>
            
            <button className="p-0 mx-1 border m-1 shadow-sm justify-center flex items-center  rounded-full text-gray-700 outline-none border-none focus:border-none">

              <Image src={p2} width={35} height={20} alt='c' />

            </button>
            <button className="p-0 mx-1 border m-1 shadow-sm justify-center flex items-center  rounded-full text-gray-700 outline-none border-none focus:border-none">

              <Image src={p3} width={35} height={20} alt='c' />

            </button>
            <button className="p-0 mx-1 border m-1 shadow-sm justify-center flex items-center  rounded-full text-gray-700 outline-none border-none focus:border-none">

              <Image src={p4} width={35} height={20} alt='c' />
            </button>
            <button className="p-0 mx-1 border m-1 shadow-sm justify-center flex items-center  rounded-full text-gray-700 outline-none border-none focus:border-none">

              <Image src={p5} width={35} height={20} alt='c' />

            </button>
          </div>
        </div>


        <div className='min-h-[1000px] w-full'>
          <Dashboard />
        </div>
      </div>

    </div>
  )
}
