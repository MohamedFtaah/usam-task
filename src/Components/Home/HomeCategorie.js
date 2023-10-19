import React from 'react'

export default function HomeCategorie() {
    return (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between text-white">
                <div className=' justify-start flex'>
                    <div className=' lg:w-52 max-lg:px-3  border-l border-l-50 cursor-pointer '>
                        <h4 className=' hover:font-bold' >
                            الاكثر انتشارا
                        </h4>
                    </div>
                    <div className=' lg:w-52 max-lg:px-3  border-l border-l-50 cursor-pointer'>
                        <h4 className=' hover:font-bold'>
                            الاكثر انتشارا
                        </h4>
                    </div>
                </div>
                <div className=' justify-self-end  cursor-pointer flex '>
                    <p className=' max-sm:hidden'>جميع التصنيفات </p>{'>'}
                </div>
            </div>

        </div>
    )
}
