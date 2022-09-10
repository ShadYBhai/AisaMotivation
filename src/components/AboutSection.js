import React from 'react';
import image1 from '../img/image1.jpeg'
import styled from 'styled-components'
import {About,Description,Image,Hide} from "../styles"
import { motion } from 'framer-motion'
import { titleAnim,fade, photoAnim } from '../Animation';
import Wave from './Wave';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

const AboutSection = () =>{
    const navigate = useNavigate();

    const navigateContact = () =>{
        navigate('/contact')
    }

    const titleAnim = {
        hidden:{opacity:0},
        show : {opacity:1, transition:{duration:2}}
    }

    const container = {
        hidden : {x:100},
        show:{x:0, transition:{duration:0.75,ease: "easeOut", staggerChildren:1}}
    }
    return(
        <About>
            <Description>
                <motion.div variants={container} initial="hidden" animate="show" className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work together</motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2 variants={titleAnim} >to make your <span>dream</span></motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2 variants={titleAnim}>true</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact Us for any fitness journey that you want to take. We are professional with amazing skills to help you achive it.
                <br/>We are available both <span>Online</span> and <span>Physcial.</span>
                </motion.p>
                <motion.button onClick={navigateContact} variants={fade}>Contact Us</motion.button>
            </Description>
            
            <Image>
                    <motion.img variants={photoAnim} src={image1} alt="" />
            </Image>
                <Wave/>
        </About>
    )
}

export default AboutSection