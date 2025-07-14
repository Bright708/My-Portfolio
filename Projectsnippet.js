import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'


const Projectsnippet = () => {
    return (
        <div>
        <motion.div 
          initial={{opacity:0,y:-85}}
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
                    ><header><h2>SHOPWICE</h2></header>
                    <p>En errant dans des espaces numériques silencieux, nous tombons parfois sur des idées inattendues qui façonnent l'avenir. Qu'il s'agisse d'une simple étincelle ou d'une étrange coïncidence, ces instants méritent une place. Cet espace contient des histoires encore non écrites, des pensées à moitié formées et des pages en attente d’être remplies. Pour l’instant, respirez, faites défiler, et laissez les pixels parler.</p></motion.li>
                      <div className="viewallpro">
                    <Link className='viewallprolink' to={"/projects"}>view all</Link>

                </div>
                    <motion.li 
                        initial={{opacity:0,x:100}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:1}}
                    ><header><h2>Creative Agency</h2></header>
                    <p>En errant dans des espaces numériques silencieux, nous tombons parfois sur des idées inattendues qui façonnent l'avenir. Qu'il s'agisse d'une simple étincelle ou d'une étrange coïncidence, ces instants méritent une place. Cet espace contient des histoires encore non écrites, des pensées à moitié formées et des pages en attente d’être remplies. Pour l’instant, respirez, faites défiler, et laissez les pixels parler.</p></motion.li>
                
                </ul>
              
            </div>
       
        </motion.div>
            
        </div>
    )
}

export default Projectsnippet
