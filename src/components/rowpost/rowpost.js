/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import {imageUrl} from '../../constants/constants'
import React, { useEffect, useState } from "react";
import {} from '../../url'
import "./rowpost.css";
function rowpost(props) {
  const [movies,setMovies] = useState([])
  useEffect(() => {
    axios.get(
      props.url
    ).then((Response) => {
      setMovies(Response.data.results)
    }).catch(err=> {
      alert('network error')
    })
  
    
  }, [props.url])
  
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            className={props.isSmall ? 'smallPoster':'poster'}
            alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
          />
        ))}
      </div>
    </div>
  );
}

export default rowpost;
