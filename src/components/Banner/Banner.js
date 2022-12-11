import React, { useEffect, useState } from 'react'
import './Banner.css'
import { API_KEY,ImageUrl } from '../../constants/constants'
import axios from '../../axios'
function Banner() {
    const [state,setState] = useState([])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
            // console.log(res.data.results[0])
            setState(res.data.results[0])
        })
    },[])
  return (
    <div 
    style={{backgroundImage:`url(${state?ImageUrl+state.backdrop_path:''})`}}
    className='banner'>
      <div className='content'>
        <h1 className='title'>{state?state.original_name:''}</h1>
        <div className='bannerButtons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className='description'>{state.overview} </h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
