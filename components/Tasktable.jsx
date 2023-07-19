import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import tt4 from '@/public/Assets/pic/4.png'
import t3 from '@/public/Assets/pic/7.png'
import t1 from '@/public/Assets/pic/3.png'
import t2 from '@/public/Assets/pic/1.png'
import t4 from '@/public/Assets/pic/t4.png'
import t5 from '@/public/Assets/pic/t5.png'
import t6 from '@/public/Assets/pic/t6.png'
import a1 from '@/public/Assets/pic/a1.png'
import a2 from '@/public/Assets/pic/a2.png'
import b1 from '@/public/Assets/pic/b1.png'
import c1 from '@/public/Assets/pic/c1.png'
import b2 from '@/public/Assets/pic/b2.png'
import b3 from '@/public/Assets/pic/b3.png'
import b4 from '@/public/Assets/pic/b4.png'
import b5 from '@/public/Assets/pic/b5.png'
import av1 from '@/public/Assets/pic/av1.png'
import av2 from '@/public/Assets/pic/av2.png'
import av3 from '@/public/Assets/pic/av3.png'
import av4 from '@/public/Assets/pic/av4.png'
import av5 from '@/public/Assets/pic/av5.png'
import av6 from '@/public/Assets/pic/av6.png'
import av7 from '@/public/Assets/pic/av7.png'
import av8 from '@/public/Assets/pic/av8.png'
import av9 from '@/public/Assets/pic/v9.png'
import av10 from '@/public/Assets/pic/av10.png'
import av11 from '@/public/Assets/pic/av11.png'
import av12 from '@/public/Assets/pic/av12.png'
import av13 from '@/public/Assets/pic/av13.png'
import av14 from '@/public/Assets/pic/av14.png'
import q1 from '@/public/Assets/pic/q1.png'
import q2 from '@/public/Assets/pic/q2.png'
import q from '@/public/Assets/pic/q.png'
import p from '@/public/Assets/pic/p.png'
import q3 from '@/public/Assets/pic/q3.png'
import x1 from '@/public/Assets/pic/x1.png'
import x2 from '@/public/Assets/pic/x2.png'
import Image from 'next/image'
import { TfiMoreAlt } from 'react-icons/tfi'
import { BsPlusLg } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'

const Tasktable = () => {
    const [arr, setArr] = useState(2)
    const [arr1, setArr1] = useState()

    const handleBar2 = () => {
        if (arr == 1) {
            setArr(6)
        }
        else {
            setArr(arr - 1)
        }
    }

    const handleBar1 = () => {
        if (arr == 6) {
            setArr(1)
        }
        else {
            setArr(arr + 1)
        }
    }

    return (
        <>
            <div className='hidden md:flex flex-row lg:justify-start justify-center items-center bg-[#F7F8FA] w-full lg:pr-8 pb-16 no-scrollbar'>
                <div className='border rounded-xl lg:w-full'>
                    <nav className='w-full z-1 flex flex-row border-t-0 border-r-0 border-l-0 border  justify-around'>
                        <div className='flex flex-row text-[#7D8FB3] text-[11px]   justify-center items-center '>

                            <div className='py-6 px-2 md:px-4 flex  border-t-0 border-r-0 border-l-0 border  hover:text-[#3361FF] hover:border-b-2 hover:border-b-[#3361FF] hover:font-semibold hover:border-b-1 ' onClick={() => {
                                setArr(1)
                            }} >
                                <Image src={t1} alt='t1' width={20} height={20} />
                                <div className='pl-1'>
                                    ListTasks
                                </div>
                            </div>

                            <div className='py-6 px-2 md:px-4 flex  border-t-0 border-r-0 border-l-0 border  hover:text-[#3361FF] hover:border-b-2 hover:border-b-[#3361FF] hover:font-semibold hover:border-b-1' onClick={() => {
                                setArr(2)
                            }} >
                                <Image src={t2} alt='t2' width={20} height={20} />
                                <div className='pl-1'>
                                    Boards
                                </div>
                            </div>

                            <div className='py-6 px-2 md:px-4 flex  border-t-0 border-r-0 border-l-0 border  hover:text-[#3361FF] hover:border-b-2 hover:border-b-[#3361FF] hover:font-semibold hover:border-b-1' onClick={() => {
                                setArr(3)
                            }} >
                                <Image src={t3} alt='t3' width={20} height={20} />
                                <div className='pl-1'>
                                    Calender
                                </div>
                            </div>

                            <div className='py-6 px-2 md:px-4 flex  border-t-0 border-r-0 border-l-0 border  hover:text-[#3361FF] hover:border-b-2 hover:border-b-[#3361FF] hover:font-semibold hover:border-b-1' onClick={() => {
                                setArr(4)
                            }} >
                                <Image src={t4} alt='t4' width={20} height={20} />
                                <div className='pl-1'>
                                    Gantt
                                </div>
                            </div>

                            <div className='py-6 px-2 md:px-4 flex  border-t-0 border-r-0 border-l-0 border  hover:text-[#3361FF] hover:border-b-2 hover:border-b-[#3361FF] hover:font-semibold hover:border-b-1' onClick={() => {
                                setArr(5)
                            }} >
                                <Image src={t5} alt='t5' width={20} height={20} />
                                <div className='pl-1'>
                                    Timeline
                                </div>
                            </div>

                            <div className='py-6 px-2 md:px-4 flex  border-t-0 border-r-0 border-l-0 border  hover:text-[#3361FF] hover:border-b-2 hover:border-b-[#3361FF] hover:font-semibold hover:border-b-1' onClick={() => {
                                setArr(6)
                            }} >
                                <Image src={t6} alt='t6' width={20} height={20} />
                                <div className='pl-1'>
                                    Activity
                                </div>
                            </div>

                        </div>
                        <div className='py-3  '>
                            <div className='hidden lg:flex  md:flex-row md:pl-3 w-[10vw] items-center'>


                                <button className=" z-10 border text-[20px] bg-[#ffffff] rounded-full text-gray-700 outline-none border-none focus:border-none h-6"
                                >

                                    <BiSearch className=' border-none text-[#C3CAD9] fill-[#C3CAD9] ' />

                                </button>
                                <input className=" relative left-[-35px]  lg:max-w-[10vw] rounded-full border py-3 text-[11px] pl-10 px-5 outline-none text-[#7D8FB3] " placeholder='Search Tasks' />
                            </div>

                            <button className=" lg:hidden p-2 border bg-white text-[20px] rounded-full text-gray-700 border-none outline-none focus:border-none"
                            >

                                <BiSearch className=' border-none text-[#C3CAD9] fill-[#C3CAD9] ' />

                            </button>
                        </div>

                    </nav>


                    {/* //Boards */}
                    {
                        arr === 2 &&
                        (<div className='hidden md:flex flex-row p-5'>

                            <div className='flex flex-col py-2 px-2'>

                                <div className='my-3 py-4 w-[200px] shadow-sm flex flex-row justify-start items-center bg-white  rounded-md'>
                                    <b className='text-[12px]  border-l-[3px] border-[#8833FF] border-t-0 border-b-0 border-r-0 border rounded-sm py-1 px-3'>
                                        TO DO
                                    </b>
                                    <div className=' p-3 text-[10px] border-[0.5px] rounded-full w-[30px] h-[30px] flex justify-center items-center shadow-sm mr-12'>5</div>
                                    <div className='text-[#C3CAD9] px-2'> <TfiMoreAlt /></div>
                                    <div className='text-[#acb3c0]'> <BsPlusLg /></div>
                                </div>

                                <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                    <Image src={a1} alt='a1' width={230} height={170} />
                                    <div className=' p-3'>
                                        <div className='flex flex-row justify-between'>
                                            <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                            <Image src={av1} alt='av1' width={20} height={20} />
                                        </div>
                                        <b className='text-[12px]  text-[#6B7A99] '>Make Money Online Through</b>
                                        <div className='pt-2 px-1 text-[#6B7A99] text-[11px] flex flex-row justify-start'>
                                            <div className='flex flex-row justify-center items-center pr-1'>
                                                <div className='pr-1'><Image src={b1} alt='b1' width={25} /></div>
                                                <div>4</div>
                                            </div>
                                            <div className='flex flex-row justify-center items-center pr-1'>
                                                <div className='pr-1'><Image src={b2} alt='b2' width={25} /></div>
                                                <div>2</div>
                                            </div>
                                            <div className='flex flex-row justify-center items-center pr-1'>
                                                <div className='pr-1'><Image src={b3} alt='b3' width={25} /></div>
                                                <div>6 Days Left</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                    <div className=' p-3'>
                                        <div className='flex flex-row justify-between'>
                                            <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                            <div class=" flex -space-x-1 overflow-hidden">
                                                <Image class="inline-block rounded-full ring-2 ring-white" src={av2} width={20} alt="" />
                                                <Image class="inline-block rounded-full ring-2 ring-white" src={av3} width={20} alt="" />

                                            </div>
                                        </div>
                                        <b className='text-[12px]  text-[#6B7A99] '>Make Money Online Through</b>
                                    </div>
                                </div>

                                <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                    <div className=' p-3'>
                                        <div className='flex flex-row justify-between'>
                                            <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                            <div class=" flex -space-x-1 overflow-hidden">

                                                <Image class="inline-block rounded-full ring-2 ring-white" src={av4} width={20} alt="" />
                                                <Image class="inline-block rounded-full ring-2 ring-white" src={av5} width={20} alt="" />
                                                <Image class="inline-block rounded-full ring-2 ring-white" src={av6} width={20} alt="" />
                                            </div>
                                        </div>
                                        <b className='text-[12px]  text-[#6B7A99] '>Search Engine Optimization ...</b>
                                    </div>
                                </div>

                                <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                    <div className=' p-3'>
                                        <div className='flex flex-row justify-between'>
                                            <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                            <div class=" flex -space-x-1 overflow-hidden">
                                                <Image class="inline-block rounded-full ring-2 ring-white" src={av7} width={20} alt="" />


                                            </div>
                                        </div>
                                        <b className='text-[12px]  text-[#6B7A99] '>Characteristics Of A Successful</b>
                                    </div>
                                </div>

                                <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                    <div className=' p-3'>
                                        <div className='flex flex-row justify-between'>
                                            <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                            <div class=" flex -space-x-1 overflow-hidden">
                                                <Image class="inline-block rounded-full ring-2 ring-white" src={av8} width={20} alt="" />


                                            </div>
                                        </div>
                                        <b className='text-[12px]  text-[#6B7A99] '>Getting Free Publicity</b>
                                    </div>
                                </div>

                                <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                    <div className=' p-3'>
                                        <div className='flex flex-row justify-between'>
                                            <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                            <div class=" flex -space-x-1 overflow-hidden">
                                                <Image class="inline-block rounded-full ring-2 ring-white" src={av9} width={20} alt="" />


                                            </div>
                                        </div>
                                        <b className='text-[12px]  text-[#6B7A99] '>Importance Of The Custom ...</b>
                                    </div>
                                </div>
                            </div>


                            <div className='flex flex-col py-2 px-2'>

                                <div className='my-3 py-4 w-[200px] shadow-sm flex flex-row justify-start items-center bg-white  rounded-md'>
                                    <b className='text-[12px] w-[80px] border-l-[3px] border-[#33BFFF] border-t-0 border-b-0 border-r-0 border rounded-sm py-1 pl-3'>
                                        IN WORK
                                    </b>
                                    <div className=' p-3 text-[10px] border-[0.5px] rounded-full w-[30px] h-[30px] flex justify-center items-center shadow-sm mr-8'>5</div>
                                    <div className='text-[#C3CAD9] px-2'> <TfiMoreAlt /></div>
                                    <div className='text-[#acb3c0]'> <BsPlusLg /></div>
                                </div>

                                <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                    <div className=' p-3'>
                                        <div className='flex flex-row justify-between'>
                                            <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                            <div class=" flex -space-x-1 overflow-hidden">
                                                <Image class="inline-block rounded-full ring-2 ring-white" src={av10} width={20} alt="" />


                                            </div>
                                        </div>
                                        <b className='text-[12px]  text-[#6B7A99] '>Types Of Paper In Catalog</b>
                                    </div>
                                </div>

                                <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                    <Image src={a2} alt='a2' width={230} height={170} />
                                    <div className=' p-3'>
                                        <div className='flex flex-row justify-between'>
                                            <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                            <Image src={av11} alt='av11' width={20} height={20} />
                                        </div>
                                        <b className='text-[12px]  text-[#6B7A99] '>Global Resorts Network</b>
                                        <div className='pt-2 px-1 text-[#6B7A99] text-[11px] flex flex-row justify-start'>
                                            <div className='flex flex-row justify-center items-center pr-1'>
                                                <div className='pr-1'><Image src={b1} alt='b1' width={25} /></div>
                                                <div>4</div>
                                            </div>
                                            <div className='flex flex-row justify-center items-center pr-1'>
                                                <div className='pr-1'><Image src={b2} alt='b2' width={25} /></div>
                                                <div>2</div>
                                            </div>
                                            <div className='flex flex-row justify-center items-center pr-1'>
                                                <div className='pr-1'><Image src={b3} alt='b3' width={25} /></div>
                                                <div>6 Days Left</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white border-2 border-[#FF6633] rounded-md'>
                                    <div className=' p-3'>
                                        <div className='flex flex-row justify-between'>
                                            <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                            <div class=" flex -space-x-1 overflow-hidden">
                                                <Image class="inline-block rounded-full ring-2 ring-white" src={av12} width={20} alt="" />


                                            </div>
                                        </div>
                                        <b className='text-[12px]  text-[#6B7A99] '> Development Apps</b>
                                    </div>
                                </div>

                                <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                    <div className=' p-3'>
                                        <div className='flex flex-row justify-between'>
                                            <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                            <div class=" flex -space-x-1 overflow-hidden">
                                                <Image class="inline-block rounded-full ring-2 ring-white" src={av9} width={20} alt="" />


                                            </div>
                                        </div>
                                        <b className='text-[12px]  text-[#6B7A99] '>Copper Canyon</b>
                                        <div className='pt-2 px-1 text-[#6B7A99] text-[11px] flex flex-row justify-start'>
                                            <div className='flex flex-row justify-center items-center pr-1'>
                                                <div className='pr-1'><Image src={b1} alt='b1' width={25} /></div>
                                                <div>4</div>
                                            </div>
                                            <div className='flex flex-row justify-center items-center pr-1'>
                                                <div className='pr-1'><Image src={b2} alt='b2' width={25} /></div>
                                                <div>2</div>
                                            </div>
                                            <div className='text-[#E62E2E] flex flex-row justify-center items-center pr-1'>
                                                <div className=''><Image src={c1} alt='b3' width={25} /></div>
                                                <b>1 Days Left</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-col py-2 px-2'>

                                <div className='my-3 py-4 w-[200px] shadow-sm flex flex-row justify-start items-center bg-white  rounded-md'>
                                    <b className='text-[12px]  border-l-[3px] border-[#FFCB33] border-t-0 border-b-0 border-r-0 border rounded-sm py-1 px-3'>
                                        REVIEW
                                    </b>
                                    <div className=' p-3 text-[10px] border-[0.5px] rounded-full w-[30px] h-[30px] flex justify-center items-center shadow-sm mr-10'>5</div>
                                    <div className='text-[#C3CAD9] px-2'> <TfiMoreAlt /></div>
                                    <div className='text-[#acb3c0]'> <BsPlusLg /></div>
                                </div>


                                <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                    <div className=' p-3'>
                                        <div className='flex flex-row justify-between'>
                                            <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                            <div class=" flex -space-x-1 overflow-hidden">

                                                <Image class="inline-block rounded-full ring-2 ring-white" src={av13} width={20} alt="" />

                                            </div>
                                        </div>
                                        <b className='text-[12px]  text-[#6B7A99] '>Astronomy Or Astrolo</b>
                                    </div>
                                </div>

                                <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                    <div className=' p-3'>
                                        <div className='flex flex-row justify-between'>
                                            <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                            <div class=" flex -space-x-1 overflow-hidden">

                                                <Image class="inline-block rounded-full ring-2 ring-white" src={av12} width={20} alt="" />

                                            </div>
                                        </div>
                                        <b className='text-[12px]  text-[#6B7A99] '>Astronomy Binoculars A Great</b>
                                    </div>
                                </div>

                                <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                    <div className=' p-3'>
                                        <div className='flex flex-row justify-between items-center'>
                                            <RxCross2 />
                                            <div className='text-[13px] font-semibold text-[#6B7A99]'>Task name or type</div>
                                            <div class=" flex -space-x-1 overflow-hidden">
                                                <Image class="inline-block rounded-full ring-2 ring-white" src={av9} width={20} alt="" />
                                            </div>

                                        </div>
                                        <div className='flex pt-6 flex-row justify-between'>
                                            <div className='flex flex-row justify-between '>
                                                <div className='py-1 pr-1
                                    '><Image class="inline-block rounded-full ring-2 ring-white" src={b4} width={28} alt="" /></div>
                                                <div className='py-1 pr-1
                                    '><Image class="inline-block rounded-full ring-2 ring-white" src={b2} width={28} alt="" /></div>
                                                <div className='py-1 pr-1
                                    '><Image class="inline-block rounded-full ring-2 ring-white" src={b5} width={28} alt="" /></div>
                                            </div>
                                            <div className='text-white cursor-pointer px-2 text-[12px] rounded-md bg-[#3361FF] flex items-center'>Save</div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='flex flex-col py-2 px-2'>

                                <div className='my-3 py-4 w-[200px] shadow-sm flex flex-row justify-start items-center bg-white  rounded-md'>
                                    <b className='text-[12px]  border-l-[3px] border-[#29CC39] border-t-0 border-b-0 border-r-0 border rounded-sm py-1 px-3'>
                                        DONE
                                    </b>
                                    <div className=' p-3 text-[10px] border-[0.5px] rounded-full w-[30px] h-[30px] flex justify-center items-center shadow-sm mr-12'>5</div>
                                    <div className='text-[#C3CAD9] px-2'> <TfiMoreAlt /></div>
                                    <div className='text-[#acb3c0]'> <BsPlusLg /></div>
                                </div>


                                <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                    <div className=' p-3'>
                                        <div className='flex flex-row justify-between'>
                                            <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                            <div class=" flex -space-x-1 overflow-hidden">
                                                <Image class="inline-block rounded-full ring-2 ring-white" src={av12} width={20} alt="" />


                                            </div>
                                        </div>
                                        <b className='text-[12px]  text-[#6B7A99] '>Copper Canyon</b>
                                    </div>
                                </div>
                            </div>


                            <div className='border  rounded-md  absolute md:bottom-[-210vh] md:right-24 lg:right-12 lg:bottom-[-60vh] shadow-sm bg-white '>
                                <div className=' border border-b-1 border-t-0 border-l-0 border-r-0 p-6 pb-0 w-[420px] '>
                                    <div className='flex flex-row justify-start  items-center'>
                                        <div className=' w-2 h-2 mr-6 rounded-lg bg-[#33BFFF]'></div>

                                        <div className='font-bold text-[16px] px-3'>Development Apps </div>
                                        <div className='pr-32'>
                                            <Image classname="inline-block rounded-full " src={q1} width={25} alt="" />
                                        </div>
                                        <RxCross2 />

                                    </div>
                                    <div className='flex flex-row text-[13px]  py-4 flex-wrap justify-start  px-6'>
                                        <div className='w-[150px] text-[13px] justify-start items-center flex flex-row px-3 py-2 '>
                                            <div>
                                                <Image classname="inline-block rounded-full " src={q2} width={25} alt="" />
                                            </div>
                                            <div className='pl-2'>4 subtasks</div>
                                        </div>
                                        <div className='w-[150px] justify-start items-center flex flex-row px-3 py-2 '>
                                            <div>
                                                <Image classname="inline-block rounded-full " src={b4} width={25} alt="" />
                                            </div>
                                            <div className='pl-2'>Priority Enabled</div>
                                        </div>
                                        <div className='w-[150px] justify-start items-center flex flex-row px-3 py-2 '>
                                            <div>
                                                <Image classname="inline-block rounded-full " src={tt4} width={25} alt="" />
                                            </div>
                                            <div className='pl-2'>3 Files</div>
                                        </div>
                                        <div className='w-[150px] justify-start items-center flex flex-row px-3 py-2 '>
                                            <div>
                                                <Image classname="inline-block rounded-full " src={q3} width={25} alt="" />
                                            </div>
                                            <div className='pl-2'>7 Comments</div>
                                        </div>
                                        <div className='w-[150px] justify-start items-center flex flex-row px-3 py-2 '>
                                            <div>
                                                <Image classname="inline-block rounded-full " src={av14} width={25} alt="" />
                                            </div>
                                            <div className='pl-2'>Tyler Norman</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row p-8 px-12 text-[12px] items-center'>
                                    <div className='px-3'>
                                        <b>START DATE</b>
                                        <div>Sep 3, 9:00 pm</div>
                                    </div>
                                    <div>
                                        <Image class="inline-block rounded-full ring-2 ring-white" src={q} width={28} alt="" />
                                    </div>
                                    <div className='px-3'>
                                        <b>DUE DATE</b>
                                        <div>Sep 4, 9:00 pm</div>
                                    </div>
                                    <div className='relative top-2 flex flex-row '>
                                        <Image class="inline-block rounded-full ring-2 ring-white" src={p} width={60} alt="" />
                                        <b className='relative top-3 right-2'>0:00</b>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>

            <div className='flex md:hidden flex-row lg:justify-start justify-center items-center bg-[#F7F8FA]  mx-3 pb-16'>
                <div className='border rounded-xl w-[350px] '>
                    <nav className=' z-1 flex flex-row border-t-0 border-r-0 border-l-0 border items-center px-4  justify-around'>

                        <button className=" mx-1 border m-1 shadow-sm justify-center w-[30px] h-[30px] flex items-center bg-white rounded-full text-gray-700 outline-none border-none focus:border-none" onClick={handleBar2}>

                            <Image src={x2} width={30} height={30} alt='user' />

                        </button>

                        <div className='flex flex-row text-[#7D8FB3] text-[13px]   justify-center items-center px-2'>

                            <div className={`py-6 px-2 md:px-4 flex  border-t-0 border-r-0 border-l-0 border text-[#3361FF] border-b-2 border-b-[#3361FF] font-semibold border-b-1 ${arr == 1 ? "" : "hidden"}`} onClick={() => {
                                setArr(1)
                            }} >
                                <Image src={t1} alt='t1' width={20} height={20} />
                                <div className='pl-1'>
                                    ListTasks
                                </div>
                            </div>

                            <div className={`py-6 px-2 md:px-4 flex  border-t-0 border-r-0 border-l-0 border text-[#3361FF] border-b-2 border-b-[#3361FF] font-semibold border-b-1 ${arr == 2 ? "" : "hidden"}`} onClick={() => {
                                setArr(2)
                            }} >
                                <Image src={t2} alt='t2' width={20} height={20} />
                                <div className='pl-1'>
                                    Boards
                                </div>
                            </div>

                            <div className={`py-6 px-2 md:px-4 flex  border-t-0 border-r-0 border-l-0 border text-[#3361FF] border-b-2 border-b-[#3361FF] font-semibold border-b-1 ${arr == 3 ? "" : "hidden"}`} onClick={() => {
                                setArr(3)
                            }} >
                                <Image src={t3} alt='t3' width={20} height={20} />
                                <div className='pl-1'>
                                    Calender
                                </div>
                            </div>

                            <div className={`py-6 px-2 md:px-4 flex  border-t-0 border-r-0 border-l-0 border text-[#3361FF] border-b-2 border-b-[#3361FF] font-semibold border-b-1 ${arr == 4 ? "" : "hidden"}`} onClick={() => {
                                setArr(4)
                            }} >
                                <Image src={t4} alt='t4' width={20} height={20} />
                                <div className='pl-1'>
                                    Gantt
                                </div>
                            </div>

                            <div className={`py-6 px-2 md:px-4 flex  border-t-0 border-r-0 border-l-0 border text-[#3361FF] border-b-2 border-b-[#3361FF] font-semibold border-b-1 ${arr == 5 ? "" : "hidden"}`} onClick={() => {
                                setArr(5)
                            }} >
                                <Image src={t5} alt='t5' width={20} height={20} />
                                <div className='pl-1'>
                                    Timeline
                                </div>
                            </div>

                            <div className={`py-6 px-2 md:px-4 flex  border-t-0 border-r-0 border-l-0 border text-[#3361FF] border-b-2 border-b-[#3361FF] font-semibold border-b-1 ${arr == 6 ? "" : "hidden"}`} onClick={() => {
                                setArr(6)
                            }} >
                                <Image src={t6} alt='t6' width={20} height={20} />
                                <div className='pl-1'>
                                    Activity
                                </div>
                            </div>

                        </div>

                        <button className=" mx-1 border m-1 shadow-sm justify-center w-[30px] h-[30px] flex items-center bg-white rounded-full text-gray-700 outline-none border-none focus:border-none" onClick={handleBar1}>

                            <Image src={x1} width={30} height={20} alt='user' />

                        </button>

                        <div className='py-3 pl-4 '>
                            <div className='hidden lg:flex  md:flex-row md:pl-3 w-[10vw] items-center'>


                                <button className=" z-10 border text-[22px] bg-[#ffffff] rounded-full text-gray-700 outline-none border-none focus:border-none h-6"
                                >

                                    <BiSearch className=' border-none text-[#C3CAD9] fill-[#C3CAD9] ' />

                                </button>
                                <input className=" relative left-[-35px]  lg:max-w-[10vw] rounded-full border py-3 text-[11px] pl-10 px-5 outline-none text-[#7D8FB3] " placeholder='Search Tasks' />
                            </div>

                            <button className=" lg:hidden p-2 border bg-white text-[20px] rounded-full text-gray-700 border-none outline-none focus:border-none"
                            >

                                <BiSearch className=' border-none text-[#C3CAD9] fill-[#C3CAD9] ' />

                            </button>
                        </div>

                    </nav>

                    <div className=' '>
                        {
                            arr === 2 &&
                            (<div className='flex flex-row p-5 overflow-x-scroll no-scrollbar'>

                                <div className='flex flex-col py-2 px-2'>

                                    <div className='my-3 py-4 w-[200px] shadow-sm flex flex-row justify-start items-center bg-white  rounded-md'>
                                        <b className='text-[12px]  border-l-[3px] border-[#8833FF] border-t-0 border-b-0 border-r-0 border rounded-sm py-1 px-3'>
                                            TO DO
                                        </b>
                                        <div className=' p-3 text-[10px] border-[0.5px] rounded-full w-[30px] h-[30px] flex justify-center items-center shadow-sm mr-12'>5</div>
                                        <div className='text-[#C3CAD9] px-2'> <TfiMoreAlt /></div>
                                        <div className='text-[#acb3c0]'> <BsPlusLg /></div>
                                    </div>

                                    <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                        <Image src={a1} alt='a1' width={230} height={170} />
                                        <div className=' p-3'>
                                            <div className='flex flex-row justify-between'>
                                                <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                                <Image src={av1} alt='av1' width={20} height={20} />
                                            </div>
                                            <b className='text-[12px]  text-[#6B7A99] '>Make Money Online Through</b>
                                            <div className='pt-2 px-1 text-[#6B7A99] text-[11px] flex flex-row justify-start'>
                                                <div className='flex flex-row justify-center items-center pr-1'>
                                                    <div className='pr-1'><Image src={b1} alt='b1' width={25} /></div>
                                                    <div>4</div>
                                                </div>
                                                <div className='flex flex-row justify-center items-center pr-1'>
                                                    <div className='pr-1'><Image src={b2} alt='b2' width={25} /></div>
                                                    <div>2</div>
                                                </div>
                                                <div className='flex flex-row justify-center items-center pr-1'>
                                                    <div className='pr-1'><Image src={b3} alt='b3' width={25} /></div>
                                                    <div>6 Days Left</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                        <div className=' p-3'>
                                            <div className='flex flex-row justify-between'>
                                                <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                                <div class=" flex -space-x-1 overflow-hidden">
                                                    <Image class="inline-block rounded-full ring-2 ring-white" src={av2} width={20} alt="" />
                                                    <Image class="inline-block rounded-full ring-2 ring-white" src={av3} width={20} alt="" />

                                                </div>
                                            </div>
                                            <b className='text-[12px]  text-[#6B7A99] '>Make Money Online Through</b>
                                        </div>
                                    </div>

                                    <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                        <div className=' p-3'>
                                            <div className='flex flex-row justify-between'>
                                                <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                                <div class=" flex -space-x-1 overflow-hidden">

                                                    <Image class="inline-block rounded-full ring-2 ring-white" src={av4} width={20} alt="" />
                                                    <Image class="inline-block rounded-full ring-2 ring-white" src={av5} width={20} alt="" />
                                                    <Image class="inline-block rounded-full ring-2 ring-white" src={av6} width={20} alt="" />
                                                </div>
                                            </div>
                                            <b className='text-[12px]  text-[#6B7A99] '>Search Engine Optimization ...</b>
                                        </div>
                                    </div>

                                    <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                        <div className=' p-3'>
                                            <div className='flex flex-row justify-between'>
                                                <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                                <div class=" flex -space-x-1 overflow-hidden">
                                                    <Image class="inline-block rounded-full ring-2 ring-white" src={av7} width={20} alt="" />


                                                </div>
                                            </div>
                                            <b className='text-[12px]  text-[#6B7A99] '>Characteristics Of A Successful</b>
                                        </div>
                                    </div>

                                    <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                        <div className=' p-3'>
                                            <div className='flex flex-row justify-between'>
                                                <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                                <div class=" flex -space-x-1 overflow-hidden">
                                                    <Image class="inline-block rounded-full ring-2 ring-white" src={av8} width={20} alt="" />


                                                </div>
                                            </div>
                                            <b className='text-[12px]  text-[#6B7A99] '>Getting Free Publicity</b>
                                        </div>
                                    </div>

                                    <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                        <div className=' p-3'>
                                            <div className='flex flex-row justify-between'>
                                                <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                                <div class=" flex -space-x-1 overflow-hidden">
                                                    <Image class="inline-block rounded-full ring-2 ring-white" src={av9} width={20} alt="" />


                                                </div>
                                            </div>
                                            <b className='text-[12px]  text-[#6B7A99] '>Importance Of The Custom ...</b>
                                        </div>
                                    </div>
                                </div>
                                

                                    <div className='flex flex-col py-2 px-2'>

                                        <div className='my-3 py-4 w-[200px] shadow-sm flex flex-row justify-start items-center bg-white  rounded-md'>
                                            <b className='text-[12px] w-[80px] border-l-[3px] border-[#33BFFF] border-t-0 border-b-0 border-r-0 border rounded-sm py-1 pl-3'>
                                                IN WORK
                                            </b>
                                            <div className=' p-3 text-[10px] border-[0.5px] rounded-full w-[30px] h-[30px] flex justify-center items-center shadow-sm mr-8'>5</div>
                                            <div className='text-[#C3CAD9] px-2'> <TfiMoreAlt /></div>
                                            <div className='text-[#acb3c0]'> <BsPlusLg /></div>
                                        </div>

                                        <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                            <div className=' p-3'>
                                                <div className='flex flex-row justify-between'>
                                                    <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                                    <div class=" flex -space-x-1 overflow-hidden">
                                                        <Image class="inline-block rounded-full ring-2 ring-white" src={av10} width={20} alt="" />


                                                    </div>
                                                </div>
                                                <b className='text-[12px]  text-[#6B7A99] '>Types Of Paper In Catalog</b>
                                            </div>
                                        </div>

                                        <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                            <Image src={a2} alt='a2' width={230} height={170} />
                                            <div className=' p-3'>
                                                <div className='flex flex-row justify-between'>
                                                    <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                                    <Image src={av11} alt='av11' width={20} height={20} />
                                                </div>
                                                <b className='text-[12px]  text-[#6B7A99] '>Global Resorts Network</b>
                                                <div className='pt-2 px-1 text-[#6B7A99] text-[11px] flex flex-row justify-start'>
                                                    <div className='flex flex-row justify-center items-center pr-1'>
                                                        <div className='pr-1'><Image src={b1} alt='b1' width={25} /></div>
                                                        <div>4</div>
                                                    </div>
                                                    <div className='flex flex-row justify-center items-center pr-1'>
                                                        <div className='pr-1'><Image src={b2} alt='b2' width={25} /></div>
                                                        <div>2</div>
                                                    </div>
                                                    <div className='flex flex-row justify-center items-center pr-1'>
                                                        <div className='pr-1'><Image src={b3} alt='b3' width={25} /></div>
                                                        <div>6 Days Left</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white border-2 border-[#FF6633] rounded-md'>
                                            <div className=' p-3'>
                                                <div className='flex flex-row justify-between'>
                                                    <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                                    <div class=" flex -space-x-1 overflow-hidden">
                                                        <Image class="inline-block rounded-full ring-2 ring-white" src={av12} width={20} alt="" />


                                                    </div>
                                                </div>
                                                <b className='text-[12px]  text-[#6B7A99] '> Development Apps</b>
                                            </div>
                                        </div>

                                        <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                            <div className=' p-3'>
                                                <div className='flex flex-row justify-between'>
                                                    <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                                    <div class=" flex -space-x-1 overflow-hidden">
                                                        <Image class="inline-block rounded-full ring-2 ring-white" src={av9} width={20} alt="" />


                                                    </div>
                                                </div>
                                                <b className='text-[12px]  text-[#6B7A99] '>Copper Canyon</b>
                                                <div className='pt-2 px-1 text-[#6B7A99] text-[11px] flex flex-row justify-start'>
                                                    <div className='flex flex-row justify-center items-center pr-1'>
                                                        <div className='pr-1'><Image src={b1} alt='b1' width={25} /></div>
                                                        <div>4</div>
                                                    </div>
                                                    <div className='flex flex-row justify-center items-center pr-1'>
                                                        <div className='pr-1'><Image src={b2} alt='b2' width={25} /></div>
                                                        <div>2</div>
                                                    </div>
                                                    <div className='text-[#E62E2E] flex flex-row justify-center items-center pr-1'>
                                                        <div className=''><Image src={c1} alt='b3' width={25} /></div>
                                                        <b>1 Days Left</b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='flex flex-col py-2 px-2'>

                                        <div className='my-3 py-4 w-[200px] shadow-sm flex flex-row justify-start items-center bg-white  rounded-md'>
                                            <b className='text-[12px]  border-l-[3px] border-[#FFCB33] border-t-0 border-b-0 border-r-0 border rounded-sm py-1 px-3'>
                                                REVIEW
                                            </b>
                                            <div className=' p-3 text-[10px] border-[0.5px] rounded-full w-[30px] h-[30px] flex justify-center items-center shadow-sm mr-10'>5</div>
                                            <div className='text-[#C3CAD9] px-2'> <TfiMoreAlt /></div>
                                            <div className='text-[#acb3c0]'> <BsPlusLg /></div>
                                        </div>


                                        <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                            <div className=' p-3'>
                                                <div className='flex flex-row justify-between'>
                                                    <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                                    <div class=" flex -space-x-1 overflow-hidden">

                                                        <Image class="inline-block rounded-full ring-2 ring-white" src={av13} width={20} alt="" />

                                                    </div>
                                                </div>
                                                <b className='text-[12px]  text-[#6B7A99] '>Astronomy Or Astrolo</b>
                                            </div>
                                        </div>

                                        <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                            <div className=' p-3'>
                                                <div className='flex flex-row justify-between'>
                                                    <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                                    <div class=" flex -space-x-1 overflow-hidden">

                                                        <Image class="inline-block rounded-full ring-2 ring-white" src={av12} width={20} alt="" />

                                                    </div>
                                                </div>
                                                <b className='text-[12px]  text-[#6B7A99] '>Astronomy Binoculars A Great</b>
                                            </div>
                                        </div>

                                        <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                            <div className=' p-3'>
                                                <div className='flex flex-row justify-between items-center'>
                                                    <RxCross2 />
                                                    <div className='text-[13px] font-semibold text-[#6B7A99]'>Task name or type</div>
                                                    <div class=" flex -space-x-1 overflow-hidden">
                                                        <Image class="inline-block rounded-full ring-2 ring-white" src={av9} width={20} alt="" />
                                                    </div>

                                                </div>
                                                <div className='flex pt-6 flex-row justify-between'>
                                                    <div className='flex flex-row justify-between '>
                                                        <div className='py-1 pr-1
                                    '><Image class="inline-block rounded-full ring-2 ring-white" src={b4} width={28} alt="" /></div>
                                                        <div className='py-1 pr-1
                                    '><Image class="inline-block rounded-full ring-2 ring-white" src={b2} width={28} alt="" /></div>
                                                        <div className='py-1 pr-1
                                    '><Image class="inline-block rounded-full ring-2 ring-white" src={b5} width={28} alt="" /></div>
                                                    </div>
                                                    <div className='text-white cursor-pointer px-2 text-[12px] rounded-md bg-[#3361FF] flex items-center'>Save</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='flex flex-col py-2 px-2'>

                                        <div className='my-3 py-4 w-[200px] shadow-sm flex flex-row justify-start items-center bg-white  rounded-md'>
                                            <b className='text-[12px]  border-l-[3px] border-[#29CC39] border-t-0 border-b-0 border-r-0 border rounded-sm py-1 px-3'>
                                                DONE
                                            </b>
                                            <div className=' p-3 text-[10px] border-[0.5px] rounded-full w-[30px] h-[30px] flex justify-center items-center shadow-sm mr-12'>5</div>
                                            <div className='text-[#C3CAD9] px-2'> <TfiMoreAlt /></div>
                                            <div className='text-[#acb3c0]'> <BsPlusLg /></div>
                                        </div>


                                        <div className='my-3 w-[200px] shadow-sm flex flex-col justify-star bg-white  rounded-md'>
                                            <div className=' p-3'>
                                                <div className='flex flex-row justify-between'>
                                                    <div className='text-[11px] text-[#6B7A99]'>Space Tasks 2</div>
                                                    <div class=" flex -space-x-1 overflow-hidden">
                                                        <Image class="inline-block rounded-full ring-2 ring-white" src={av12} width={20} alt="" />


                                                    </div>
                                                </div>
                                                <b className='text-[12px]  text-[#6B7A99] '>Copper Canyon</b>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='border  rounded-md  relative bottom-[-70vh] right-[55vh] shadow-sm bg-white h-[350px]'>
                                        <div className=' border border-b-1 border-t-0 border-l-0 border-r-0 p-6 pb-0 w-[400px]  '>
                                            <div className='flex flex-row justify-start  items-center'>
                                                <div className=' w-2 h-2 mr-6 rounded-lg bg-[#33BFFF]'></div>

                                                <div className='font-bold text-[16px] px-3'>Development Apps </div>
                                                <div className='pr-32'>
                                                    <Image classname="inline-block rounded-full " src={q1} width={25} alt="" />
                                                </div>
                                                <RxCross2 />

                                            </div>
                                            <div className='flex flex-row text-[13px]  py-4 flex-wrap justify-start  px-6'>
                                                <div className='w-[150px] text-[13px] justify-start items-center flex flex-row px-3 py-2 '>
                                                    <div>
                                                        <Image classname="inline-block rounded-full " src={q2} width={25} alt="" />
                                                    </div>
                                                    <div className='pl-2'>4 subtasks</div>
                                                </div>
                                                <div className='w-[150px] justify-start items-center flex flex-row px-3 py-2 '>
                                                    <div>
                                                        <Image classname="inline-block rounded-full " src={b4} width={25} alt="" />
                                                    </div>
                                                    <div className='pl-2'>Priority Enabled</div>
                                                </div>
                                                <div className='w-[150px] justify-start items-center flex flex-row px-3 py-2 '>
                                                    <div>
                                                        <Image classname="inline-block rounded-full " src={tt4} width={25} alt="" />
                                                    </div>
                                                    <div className='pl-2'>3 Files</div>
                                                </div>
                                                <div className='w-[150px] justify-start items-center flex flex-row px-3 py-2 '>
                                                    <div>
                                                        <Image classname="inline-block rounded-full " src={q3} width={25} alt="" />
                                                    </div>
                                                    <div className='pl-2'>7 Comments</div>
                                                </div>
                                                <div className='w-[150px] justify-start items-center flex flex-row px-3 py-2 '>
                                                    <div>
                                                        <Image classname="inline-block rounded-full " src={av14} width={25} alt="" />
                                                    </div>
                                                    <div className='pl-2'>Tyler Norman</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-row p-8 px-12 text-[12px] items-center'>
                                            <div className='px-3'>
                                                <b>START DATE</b>
                                                <div>Sep 3, 9:00 pm</div>
                                            </div>
                                            <div>
                                                <Image class="inline-block rounded-full ring-2 ring-white" src={q} width={28} alt="" />
                                            </div>
                                            <div className='px-3'>
                                                <b>DUE DATE</b>
                                                <div>Sep 4, 9:00 pm</div>
                                            </div>
                                            <div className='relative top-2 flex flex-row '>
                                                <Image class="inline-block rounded-full ring-2 ring-white" src={p} width={60} alt="" />
                                                <b className='relative top-3 right-2'>0:00</b>
                                            </div>
                                        </div>
                                    </div>

                                
                            </div>)
                        }
                        {
                            arr!==2 &&
                            (
                                <div className='w-[350px] p-8'>
                                    Sample data 
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default Tasktable