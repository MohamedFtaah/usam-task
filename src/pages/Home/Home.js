import React from 'react'
import Slider from '../../Components/Uitily/Slider'
import HomeCategorie from '../../Components/Home/HomeCategorie'
import ProductLists from '../../Components/Home/ProductLists'
import SearchSection from '../../Components/Home/SearchSection'

export default function Home() {
    return (
        <div>
            <Slider></Slider>
            <HomeCategorie></HomeCategorie>
            <ProductLists></ProductLists>
            <SearchSection></SearchSection>
        </div>
    )
}
