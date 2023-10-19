import React from 'react'
import Dropdown from './Dropdown'
import ReactStars from 'react-stars'

export default function headerFiltr() {
    const ratingChanged = () => { }
    return (
        <div className=' flex justify-between mx-auto max-w-2xl items-center max-sm:flex-col   pt-6 px-4 sm:px-6 lg:px-8  lg:max-w-7xl text-white'>
            <div className=' flex flex-wrap items-center'>
                <p className=' max-sm:text-sm'>فلتر بواسطه :</p>
                <Dropdown></Dropdown>
                <Dropdown></Dropdown>
            </div>
            <div>

                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={'#ffd700'} />
            </div>
        </div>
    )
}
