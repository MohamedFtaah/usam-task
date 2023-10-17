import React from 'react'

export default function ImgInfo() {
    return (
        <div className='container  m-auto'>
            <div style={{ top: '50%', transform: 'translate(0, -50%)' }} className=' w-1/2 text-start  absolute   text-white z-10 '>
                <div >
                    <p className='mb-3 '>
                        مدة الكورس: {'ساعه'}
                    </p>
                    <p className='mb-3'>
                        تقيم المتعلمين: {'8.2'}

                    </p>
                </div>

                <div>
                    <h2 className=' pr-6 font-extrabold text-7xl mb-6'>{'الغه الانجليزية'}</h2>
                    <p className='mb-12'>{
                        'الغهالغهالغهالغهالغهيبلبببببببببببب بببببب ببببيسشييييييييييييي ييييييييييييي يالغهالغه'
                    }</p>
                </div>




                <div>
                    <button className=' w-32 h-10 rounded-3xl bg-red-600 ml-6'> مشاهدة الان</button>
                    <button className=' w-32 h-10 rounded-3xl bg-black'>اضافه للقائمة</button>

                </div>
            </div>

        </div>
    )
}
