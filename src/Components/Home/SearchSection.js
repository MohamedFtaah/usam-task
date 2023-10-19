import React from 'react'
import SupCategoriesFiltr from '../Uitily/supCategoriesFiltr'
import AllProductLists from '../product/Allproduct'
import HeaderFiltr from './../Uitily/headerFiltr';

export default function SearchSection() {
    return (
        <div className='mx-auto max-w-2xl  py-8 px-4 sm:px-6 lg:px-8 sm:py-12 lg:max-w-7xl text-white'>
            <div className=' flex justify-between mb-8'>
                <div><p className=' border-b border-b-red-600 pb-4'>جميع الكورسات</p></div>
                <input type='text' placeholder='بحث' className=' w-36 h-8 rounded-full border bg-inherit p-4'></input>
            </div>
            <SupCategoriesFiltr></SupCategoriesFiltr>
            <HeaderFiltr></HeaderFiltr>
            <AllProductLists></AllProductLists>
        </div>
    )
}
