import { motion } from 'framer-motion'
import React from 'react'


const Projectsnippet = () => {
    return (
        <div
        className='projectsnippet'>
        <motion.div 
          initial={{opacity:0,y:85}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1.5}}
          className='projectsnippet'>
  
            <header><h1>My Projects</h1></header>
            <div 
            className=" myprojects">
                <ul>
                    <motion.li 
                        initial={{opacity:0,x:100}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:1}}
                    >Pizza Order System</motion.li>
                    <motion.li 
                        initial={{opacity:0,x:100}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:1}}
                    >React Contact book</motion.li>
                    <motion.li
                        initial={{opacity:0,x:100}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:1}}
                    >Weather Website</motion.li>
                    <motion.li
                        initial={{opacity:0,x:100}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:1,delay:0.4}}
                     >Creative--Agency website</motion.li>
                    <motion.li 
                        initial={{opacity:0,x:100}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:1,delay:0.4}}
                    >__</motion.li>
                    <motion.li
                        initial={{opacity:0,x:100}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:1,delay:0.4}}
                    >__</motion.li>
                </ul>
            </div>
        <div className='seemoreprojects'>
            <motion.button 
               whileHover={{backgroundColor: "rgba(255, 238, 142, 0.775)",color:"rgb(173, 40, 49)"}}>SEE MORE</motion.button>
        </div>
        </motion.div>
            
        </div>
    )
}

export default Projectsnippet
