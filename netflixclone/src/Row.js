import React from 'react'
import  './Row.css';
import axios from "./axios";
function Row({title, fetchUrl}) {
    return (
        <div>
         <h1>{title}</h1>   
        </div>
    )
}
export default Row;
