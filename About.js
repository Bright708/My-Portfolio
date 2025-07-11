import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import Aboutpagepfp from './images/Aboutpagepfp.jpg'


const About = () => {
    return (
        <main className='About'>
            <h1 className='header'>About Me</h1>
            <div className='aboutmeinfo'>
            <div className="aboutpfp">
                <img src={Aboutpagepfp}  />
            </div>
            <motion.section 
            initial={{opacity:0,y:85}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5}}
             className='aboutdetails'>
                <article className="aboutintro">
                <h2>👋 Hello! <span>I’m Bright</span> — a Software Engineering Student & Aspiring Frontend Developer.</h2>
                <p>I am an enthusiastic and driven software engineering student with an increasing fascination for frontend development. My exploration into technology started from a place of curiosity and rapidly developed into a strong dedication to crafting interactive, user-friendly web experiences.</p>
                </article>
                <article className="aboutstack">
                    <h2>What I Do</h2>
                    <p>Over time, I’ve built a solid foundation in:
                        <ul>
                            <li><span>HTML,CSS and JavaScript </span>- I use these core technologies to bring interfaces to life.</li>
                            <li><span>Responsive Design </span>- I ensure websites work well across different screen sizes and devices</li>
                            <li><span>Clean Code & Structure</span>-I prioritize readability and maintainability in every project I build.</li>
                    
                        </ul>
                    </p>
                    
                </article>
                <article className="aboutmyappr">
                    <h2>🎨 My Approach</h2>
                    <p>
                    I believe good frontend development goes beyond just visuals. I aim to:
                    <ul>
                        <li>Combine <span>functionality and aesthetics</span></li>
                        <li>Create intuitive user experience</li>
                        <li> Solve problems using <span>logical thinking and structured planning</span></li>
                    </ul>
                    Whether its building from scratch or iterating on feedback, I enjoy refining interfaces to better serve users.
                        
                    </p>
                </article>
                <article className="aboutBC">
                    <h2>Beyond Code</h2>
                    <p>I also explore other key areas of software development to grow as a well-rounded engineer:
                        <ul>
                            <li><span>Version Control</span>:I use Git to track changes and collaborate effectively</li>
                            <li><span>Debugging and Optimization</span>:I enjoy the challenge of identifying and fixing issues</li>
                        </ul>
                    </p>
                </article>
                <article className="aboutcollabo">
                    <h2> I Value Collaboration</h2>
                    <p>Some of my most rewarding moments have come from working with others—in school projects, pair programming, or discussing ideas to improve software solutions. I believe learning from peers and mentors is a powerful way to grow.</p>
                </article>
                <article className="aboutconnect">
                    <h2>📫 Let’s Connect</h2>
                    <p>If you're a fellow developer, a mentor, or just someone who loves tech, I’d love to connect! You can <Link className='Link' to={"/contact"}>reach out to me</Link> or explore the rest of my portfolio to see what I’ve been working on.</p>
                </article>
                
            </motion.section>
            </div>
        </main>
    )
}

export default About
