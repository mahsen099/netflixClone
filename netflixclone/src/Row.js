import React, { useState,useEffect } from 'react'
import  './Row.css';
import axios from "./axios";

function Row({title, fetchUrl}) {
    const [movies, setMovies]= useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    return (
        <div>
         <h1>{title}</h1>   
        </div>
    )
}
export default Row;
