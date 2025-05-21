import React, { useEffect, useState } from 'react'
import Card from '../Contextcom/Card'


function Github() {
  const [data,setdata] = useState([])
  const [amar,setamar] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then(responce => responce.json())
    .then(data=>{
    setdata(data)
    })
  }, [])
  
  useEffect(() => {
    fetch('https://api.github.com/users/amarshri')
    .then(responce => responce.json())
    .then(data=>{
setamar(data)
    })
  }, [])
  return (
    <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img className=' ml-[210px] m-[40px]' src={amar.avatar_url} alt="Git picture" width= {300}/>


    </div>
  )
 
 

}


export default Github


// function Card (){
// return (
//   <Card image={amar.avatar_url}/>
// )
// }
