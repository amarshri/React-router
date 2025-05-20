import React, { useState , useEffect} from 'react'
import { Themeprovider } from '../Contextcom/Theme'
import Themebutten from '../Contextcom/Themebutten'
import Card from '../Contextcom/Card'

function Contextapi() {

 const [thememode,setthememode]= useState("light")
 const lighttheme= ()=>{
  setthememode("light")
 }
 const darktheme= ()=>{
  setthememode("dark")
 }


// actual change in theme 

useEffect(() => {
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(thememode)
}, [thememode])



  return (


<Themeprovider value ={{thememode, lighttheme,darktheme}}>


<div className="flex flex-wrap min-h-screen items-center bg-blue-300 dark:bg-gray-900 ">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Themebutten/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

</Themeprovider>

  )
}

export default Contextapi