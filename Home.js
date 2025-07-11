import { motion } from 'framer-motion'
import React from 'react'
import Header from './Header'
import Mypic from './Mypic'


const Home = () => {
    return (
        <main className='home'>
        <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
    rel="stylesheet"
/>
     <Header />
     <div className='myprofile'>
     <h1><span>Hi,I'm </span> Frimpong Bright Adjei <span>-- building creative web systems </span> <p>Turning coffee ☕ into code 💻 one bug at a time.
     Frontend Engineer crafting slick, responsive UIs with React.</p>
     <div className='mystack'>
        <h2>My Tech Stack</h2>
     
        <div>
       <i 
       initial={{}}
        animate={{}}
        id='html' class="ri-html5-fill">
        </i>
        <i id='css' class="ri-css3-fill"></i>
        <i id='js' class="ri-javascript-fill"></i>
        <i id='react' class="ri-reactjs-fill"></i>
    
        </div>
        
     </div></h1>
     <Mypic />
     </div>
     <div className='myrespro'>
        <motion.button 
        whileHover={{backgroundColor: "rgba(255, 238, 142, 0.775)",color:"rgb(173, 40, 49)"}}
        className="myprojects">
            My Projects
        </motion.button>
        <motion.button 
          whileHover={{backgroundColor: "rgba(255, 238, 142, 0.775)",color:"rgb(173, 40, 49)"}} className="myresume">
            My Resume
        </motion.button>
     </div>
   
    
        </main>
    )
}

export default Home
