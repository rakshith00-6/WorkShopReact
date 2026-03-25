import React, { useEffect, useState } from 'react'

function App() {
  const[data, setData] = useState();
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json)=> setData(json))
    .catch((error)=>console.log("Error fetching the API"))
  },[])
  console.log(data, ' data')
  return (
    <>
   {data ? <div>{data[0].title}</div> : <p>No data found</p> }
    </>
  )
}


export default App