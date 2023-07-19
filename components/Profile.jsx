import React from 'react'
import Image from 'next/image'
import user from '@/public/Assets/pic/user.png'
import p44 from '@/public/Assets/pic/p44.png'
import { TfiMoreAlt } from 'react-icons/tfi'
import pc1 from '@/public/Assets/pic/1.png'
import pc2 from '@/public/Assets/pic/2.png'
import pc3 from '@/public/Assets/pic/3.png'
import pc4 from '@/public/Assets/pic/4.png'
import pc5 from '@/public/Assets/pic/5.png'
import pc6 from '@/public/Assets/pic/6.png'
import pc7 from '@/public/Assets/pic/7.png'
import pc8 from '@/public/Assets/pic/8.png'
import d1 from '@/public/Assets/pic/d1.png'
import d2 from '@/public/Assets/pic/d2.png'
import d3 from '@/public/Assets/pic/d3.png'
import d4 from '@/public/Assets/pic/d4.png'
import d5 from '@/public/Assets/pic/d5.png'


const Profile = () => {
    return (
        <div className='md:min-w-[350px] min-w-[350px]  mx-auto flex flex-col '>
            <div className='pt-8 pb-5 px-16 flex'>
                <div className='w-full flex flex-row justify-between items-start'>
                    <button className=" mx-1 border m-1 shadow-sm justify-center flex items-center bg-white rounded-full text-gray-700 outline-none border-none focus:border-none">

                        <Image src={user} width={30} height={20} alt='user' />

                    </button>
                    <button className=" p-2 mx-1 border m-1 shadow-sm justify-center flex items-center text-[#7D8FB3] rounded-full bg-white outline-none border-none focus:border-none">

                        <TfiMoreAlt />

                    </button>
                </div>
            </div>

            <div className='flex flex-row w-full justify-center items-center'>
                <div className='flex relative left-2 '>
                    <p className='p-2 rounded-full border-t-[#3361FF] border-b-[#3361FF] border-l-[#3361FF] border-2 rotate-[-45deg]'>
                        <Image src={p44} width={130} height={130} alt='c' className=' rotate-[45deg]' />
                    </p>

                </div>
                <b className='relative right-2 text-white bg-[#3361FF] p-2 rounded-full text-[11px] flex flex-col h-[30px] w-[30px]  justify-center items-center'>2</b>
            </div>

            <div className='mt-8 flex flex-col justify-center '>
                <b className='  text-[#4D5E80] text-[16px] text-center'>
                    Hello Alfred Bryant
                </b>
                <p className=' text-[#ADB8CC] text-[14px] text-center mt-3'>adrain.nader@yahoo.com</p>
            </div>


            <div className='flex flex-row  flex-wrap justify-center  pt-12 w-[250px] mx-auto'>
                <div className='w-[120px] h-[120px] flex flex-col z-10 rounded-tl-xl border-l border-b border-t border-1 justify-center items-center hover:rounded-xl hover:bg-white hover:scale-110 hover:z-20 hover:text-[#3361FF] text-[#ADB8CC] hover:border-0 hover:shadow-sm ease-in-out duration-150 transform'>
                    <Image src={pc1} alt='pc1' width={20} height={20} />
                    <p className='  text-[14px] text-center'>Dashboard</p>
                </div>
                <div className='w-[120px] h-[120px] flex flex-col hover:rounded-xl hover:bg-white hover:scale-110 hover:z-20 hover:text-[#3361FF] text-[#ADB8CC] z-1 hover:border-0 hover:shadow-sm ease-in-out duration-150 transform rounded-tr-xl border-b border-r border-l border-t border-1 justify-center items-center'>
                    <Image src={pc2} alt='pc2' width={20} height={20} />
                    <p className='  text-[14px] text-center'>Notes</p>
                    <p className=' w-2 h-2 absolute top-6 right-8 rounded-lg bg-[#3361FF]'></p>
                </div>
                <div className='w-[120px] h-[120px] flex flex-col z-10 hover:rounded-xl hover:bg-white hover:scale-110 hover:z-20 hover:text-[#3361FF] text-[#ADB8CC] hover:border-0 hover:shadow-sm ease-in-out duration-150 transform border-l border-b border-1 justify-center items-center'>
                    <Image src={pc3} alt='pc3' width={20} height={20} />
                    <p className='  text-[14px] text-center'>Tasks</p>
                </div>
                <div className='w-[120px] h-[120px] flex flex-col hover:rounded-xl hover:bg-white hover:scale-110 hover:z-20 hover:text-[#3361FF] text-[#ADB8CC] hover:border-0 hover:shadow-sm ease-in-out duration-150 transform border-b border-r border-l border-1 justify-center items-center'>
                    <Image src={pc4} alt='pc4' width={20} height={20} />
                    <p className='  text-[14px] text-center'>Files</p>
                </div>
                <div className='w-[120px] h-[120px] flex flex-col z-10 hover:rounded-xl hover:bg-white hover:scale-110 hover:z-20 hover:text-[#3361FF] text-[#ADB8CC] hover:border-0 hover:shadow-sm ease-in-out duration-150 transform border-l border-b border-1 justify-center items-center'>
                    <Image src={pc5} alt='pc5' width={20} height={20} />
                    <p className='  text-[14px] text-center'>Emails</p>
                </div>
                <div className='w-[120px] h-[120px] flex flex-col hover:rounded-xl hover:bg-white hover:scale-110 hover:z-20 hover:text-[#3361FF] text-[#ADB8CC] hover:border-0 hover:shadow-sm ease-in-out duration-150 transform border-b border-r border-l border-1 justify-center items-center'>
                    <Image src={pc6} alt='pc6' width={20} height={20} />
                    <p className='  text-[14px] text-center'>Clients</p>
                </div>
                <div className='w-[120px] h-[120px] flex flex-col z-10 hover:rounded-xl hover:bg-white hover:scale-110 hover:z-20 hover:text-[#3361FF] text-[#ADB8CC] hover:border-0 hover:shadow-sm ease-in-out duration-150 transform rounded-bl-xl border-l border-b border-1 justify-center items-center'>
                    <Image src={pc7} alt='pc7' width={20} height={20} />
                    <p className='  text-[14px] text-center'>Calenders</p>
                </div>
                <div className='w-[120px] h-[120px] flex flex-col hover:rounded-xl hover:bg-white hover:scale-110 hover:z-20 hover:text-[#3361FF] text-[#ADB8CC] hover:border-0 hover:shadow-sm ease-in-out duration-150 transform rounded-br-xl border-b border-r border-l border-1 justify-center items-center'>
                    <Image src={pc8} alt='pc8' width={20} height={20} />
                    <p className='  text-[14px] text-center'>Settings</p>
                </div>

            </div>




            <div className=' border rounded-full mt-16 py-3 px-4 flex flex-row justify-center items-center w-[250px] mx-auto'>
                <Image src={d1} alt='d1' width={40} height={30} className=' px-1' />
                <Image src={d2} alt='d2' width={40} height={30} className=' px-1' />
                <Image src={d3} alt='d3' width={40} height={30} className=' px-1' />
                <Image src={d4} alt='d4' width={40} height={30} className=' px-1' />
                <Image src={d5} alt='d5' width={40} height={30} className=' px-1' />
            </div>

        </div>
    )
}

export default Profile