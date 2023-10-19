import React, { useState } from 'react'
import CustomButton from './customButton'

export default function SupCategoriesFiltr() {

    return (
        <div className=' justify-start flex  overflow-hidden'>
            <div className='mx-6 max-sm:mx-1' >
                <CustomButton Color='#1e1d22' changColor='red'>مشاهدة الان</CustomButton>

            </div>


            <div className='mx-6 max-sm:mx-1'>
                <CustomButton Color='#1e1d22' changColor='red'>مشاهدة الان</CustomButton>

            </div>
        </div>
    )
}
