import { motion } from 'framer-motion'
import React from 'react'


const Aboutsnippet = () => {
    return (
        <main 
       
        className='aboutsnippet'>
            <motion.div 
             initial={{opacity: 0,scaleX:0}}
             whileInView={{opacity:1,scaleX:1}}
             transition={{duration:1.5}}
             className="aboutsnippetinfo">
            <h1>
                About Me
            </h1>
            <p>
            I’m a passionate and self-driven software engineering student with a strong interest in frontend development. Over time, I’ve developed solid skills in HTML, CSS, and JavaScript, allowing me to build responsive, user-focused web interfaces. My approach combines clean design with functional code, and I enjoy solving problems through logical thinking and structured planning.

Beyond coding, I’ve explored various aspects of software engineering, including UI/UX principles, version control, and debugging techniques. I also enjoy collaborating with others, whether it’s on school projects or brainstorming ideas to improve tech solutions.

Currently, I’m focused on deepening my understanding of modern development practices and expanding my skill set with tools like Git, frameworks like React, and concepts like API integration. I’m always eager to learn and open to feedback as I continue growing in the tech space.

            </p>
        <div className="readabout">
            <motion.button
                  whileHover={{backgroundColor: "rgba(255, 238, 142, 0.775)",color:"rgb(173, 40, 49)"}}
                  onClick={() => window.location.href = '/about'}
            >

                Read More
            </motion.button>
        </div>
        </motion.div>
             
        </main>
    )
}

export default Aboutsnippet
