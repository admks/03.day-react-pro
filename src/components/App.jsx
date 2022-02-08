import React from 'react'
import MyPoems from "./MyPoems";
import {styleSheet}  from "../styles.js";


export default function App() {
  return (
    <div style={{background:styleSheet.background, color:styleSheet.color}}>
        <h1>Welcome To My Page</h1>

        <MyPoems data={styleSheet} /> 

        <footer style={{fontSize:styleSheet.fontSize}}>Thank You Visiting My Page!</footer>
    </div>
  )
}
