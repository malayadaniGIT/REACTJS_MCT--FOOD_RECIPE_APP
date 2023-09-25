import React from 'react'
import "../Css/Home.css"
import video7 from "../../assets/video7.mp4"
import {Button, Heading } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'
function Home() {

    const Recipecompcall=useNavigate()
    

  return (
    <div>
      <div className='picc'>
        <video src={video7} muted autoPlay loop/>
      </div>
      <div className='undervideo'>
        <Heading size="4xl"  color="red.600">Amazing Recipes</Heading>
        <Heading size="md" textAlign="center" color="green.200">When you need to feed the family or kids, these are the easy dinner recipes you turn to time and time again. With lots of healthy, quick, vegetarian, chicken, and budget-friendly ideas, there’s something for everyone..</Heading>
        <Button onClick={()=>Recipecompcall("/Recipes")} fontWeight="600" colorScheme='red'>Search Recipes</Button>
      </div>
    </div>
  )
}

export default Home
