/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import "./banner.css"
import axios from '../../axios';
function banner() {
    const [movies,setMovies] = useState([])
    // useEffect(() => {
    //     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
    //         setMovie(response.data.results[0]);
    //         console.log(response.data.results[0]);
    //     })
    // },[])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovies(response.data.results[1])
            console.log(response.data.results[1]);
        })
    },[])
    return (
      <div
        style={{
          backgroundImage: `URL(${
            movies ? imageUrl + movies.backdrop_path : ""
          })`,
        }}
        className="banner"
      >
        <div className="content">
          <h1 className="title">
            {movies ? movies.name : ""} {movies ? movies.title : ""}
          </h1>
          <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">My list</button>
          </div>
          <h1 className="description">{movies ? movies.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>
    );
}

export default banner


useEffect(() => {
  
  
})