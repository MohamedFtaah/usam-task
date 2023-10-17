import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


export default function Navbar() {
    return (
        <header className=' py-4 w-full z-10' >
            <div className=' m-auto container flex justify-between'>
                <div className=' flex text-lg my-auto'>
                    <div className=' flex justify-around w-40'>
                        <div className='user-img h-7 w-7'>
                            <i class="fa-regular fa-user"></i>
                        </div>
                        <div className='h-7 w-7'>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
                            </svg>
                        </div>
                        <div className='h-7 w-7'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-magnifying-glass my-auto h-6 w-6"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" class=""></path></svg>
                        </div>
                    </div>
                    <ul className=' flex justify-around '>
                        <li className=' mr-10  '>الصفحة الرئيسية</li>
                        <li className=' mr-10'> الكورسات</li>
                        <li className=' mr-10'>المعلمبن</li>
                    </ul>
                </div>
                <div>
                    <h1>USAM</h1>
                </div>
            </div>
        </header>
    )
}

