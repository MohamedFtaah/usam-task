'use client';

import img1 from '../../images/landingels-miguel-á-padriñán-1111367.jpg'
import img2 from '../../images/landingels-miguel-á-padriñán-1591060.jpg'
import img3 from '../../images/landingels-pixabay-270360.jpg'
import img4 from '../../images/landing.jpg'
import home from './home.css'

import { useState } from 'react';
import ImgInfo from './ImgInfo';

export default function Slider({ aspr = 18 / 9, info = 2 }) {

    const [state, setstate] = useState(0)

    return (

        <div className='landing ' style={{ aspectRatio: `${aspr}` }}>
            <i style={{ top: '50%', transform: 'translate(0, -50%)', right: ' 0' }} className="mr-2 fa-solid fa-angle-right absolute z-10 text-white  text-3xl hover:text-slate-400 cursor-pointer" onClick={() => { setstate(state - 100) }} ></i>
            <div style={{ left: `${state}%` }} className='img-col   '>

                <div className='slide  '><img src={img1} alt=''   ></img> {info ? <ImgInfo></ImgInfo> : null} </div>
                <div className='slide'><img src={img2} alt='' ></img>{info ? <ImgInfo></ImgInfo> : null}</div>
                <div className='slide'><img src={img3} alt='' ></img>{info ? <ImgInfo></ImgInfo> : null}</div>
                <div className='slide'><img src={img4} alt='' ></img>{info ? <ImgInfo></ImgInfo> : null}</div>
            </div>
            <i style={{ top: '50%', transform: 'translate(0, -50%)', left: ' 0' }} className="ml-2 fa-solid fa-angle-left absolute z-10 text-white  text-3xl hover:text-slate-400 cursor-pointer" onClick={() => { setstate(state === 0 ? 0 : state + 100) }} ></i>
        </div>
    )
};