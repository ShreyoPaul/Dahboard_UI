import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { BiMenu, BiSearch, BiSolidUserCircle } from 'react-icons/bi'
import { TfiMoreAlt } from 'react-icons/tfi'
import { IoMdNotifications } from 'react-icons/io'
import { MdCancel } from 'react-icons/md'


export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div className='w-full text-gray-900 flex flex-row items-center justify-between px-5 py-4 bg-[#F7F8FA] border border-t-0 border-b-1'>
            <div className=' text-gray-900 flex flex-row justify-start  bg-[#F7F8FA]'>

                <div className="flex flex-row pr-12 items-center justify-between  ">

                    <div className="pr-3 ">
                        <button className="p-2 border bg-white rounded-full text-gray-700 outline-none border-none focus:border-none"
                            onClick={() => setNavbar(!navbar)}>

                            <BiMenu className=' border-none text-[#C3CAD9] fill-[#C3CAD9] ' />

                        </button>
                    </div>

                    <div className='relative'>
                        <h2 className="text-[18px] text-[#4D5E80] font-bold">Constructor</h2>
                    </div>
                </div>
                <div className=' flex-col hidden md:flex'>
                    <ul className="items-center text-[12px] text-[#7D8FB3] justify-start space-y-6 md:flex md:space-x-4 md:space-y-0">
                        <li className="">
                            <Link href="/dashboard">
                                Dashboard
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/about">
                                About US
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/news">
                                News
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/userpolicy">
                                User Policy
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/contact">
                                Contacts
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/">
                                <TfiMoreAlt />
                            </Link>
                        </li>
                        <li className=''>
                            <div className='hidden lg:flex  md:flex-row md:pl-6 items-center'>


                                <button className=" z-10 border text-[20px] bg-[#ffffff] rounded-full text-gray-700 outline-none border-none focus:border-none h-6"
                                    onClick={() => setNavbar(!navbar)}>

                                    <BiSearch className=' border-none text-[#C3CAD9] fill-[#C3CAD9] ' />

                                </button>
                                <input className=" relative left-[-35px]  lg:min-w-[200px] rounded-full border py-3 text-[11px] pl-10 px-5 outline-none text-[#7D8FB3] " placeholder='Search Products, Orders and Clients' />
                            </div>

                            <button className=" lg:hidden p-2 border bg-white text-[20px] rounded-full text-gray-700 border-none outline-none focus:border-none"
                            >

                                <BiSearch className=' border-none text-[#C3CAD9] fill-[#C3CAD9] ' />

                            </button>
                        </li>
                    </ul>
                </div>
                <div className={`lg:hidden md:hidden absolute left-0 top-16 px-8 bg-[#F7F8FA] w-full ${navbar ? 'flex flex-col ' : 'hidden'}`}>
                    <ul className="items-center text-[13px] text-[#7D8FB3] justify-start space-y-6 md:flex md:space-x-5 md:space-y-0 pb-5">
                        <li className="">
                            <Link href="/dashboard">
                                Dashboard
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/about">
                                About US
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/news">
                                News
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/userpolicy">
                                User Policy
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/contact">
                                Contacts
                            </Link>
                        </li>
                        <li className="">
                            <Link href="/">
                                <TfiMoreAlt />
                            </Link>
                        </li>
                        <li >
                            <div className=' flex flex-row items-center '>


                                <button className=" relative z-10 border text-[20px] bg-[#ffffff] rounded-full text-gray-700 outline-none border-none focus:border-none h-6"
                                    onClick={() => setNavbar(!navbar)}>

                                    <BiSearch className='z-10 border-none text-[#C3CAD9] fill-[#C3CAD9] ' />

                                </button>
                                <input className=" z-1 relative left-[-30px]  min-w-[40%] rounded-full border py-3 text-[11px] pl-8 px-5 outline-none text-[#7D8FB3] " placeholder='Search Products, Orders and Clients' />
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='flex flex-row w-auto justify-center items-center mr-6'>
                <button className="text-[25px] mx-1 border  rounded-full text-gray-700 outline-none border-none focus:border-none"
                    onClick={() => setNavbar(!navbar)}>

                    <BiSolidUserCircle className=' border-none text-[#C3CAD9] fill-[#C3CAD9] ' />

                </button>
                <span className='text-[13px] mx-1 hidden lg:flex'>Clayton Santos</span>
                <div className=' flex-row hidden lg:flex'>
                    <button className="p-2 mx-1 hidden lg:flex border bg-white rounded-full text-gray-700 outline-none border-none focus:border-none"
                        onClick={() => setNavbar(!navbar)}>

                        <IoMdNotifications className='text-[18px] border-none text-[#C3CAD9] fill-[#C3CAD9] ' />

                    </button>
                    <div className='absolute right-[10vh] w-2 h-2 mr-6 rounded-lg bg-[#3361FF]'></div>
                </div>

                <button className="p-2 mx-1 border hidden lg:flex bg-white rounded-full text-gray-700 outline-none border-none focus:border-none"
                    onClick={() => setNavbar(!navbar)}>

                    <MdCancel className='text-[18px] border-none text-[#C3CAD9] fill-[#C3CAD9] ' />

                </button>
            </div>

        </div>




    );
}