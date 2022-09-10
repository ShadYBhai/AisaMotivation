import React from 'react'
import styled from 'styled-components'
import athlete from '../img/athlete-small.png'
import boxing from '../img/1.jpeg'
import jumping from '../img/2.jpeg'
import img6 from '../img/img6.jpeg'
import {motion} from 'framer-motion'
import {sliderContainer, slider,pageAnimation,fade,photoAnim, lineAnim} from '../Animation'

const Ourwork = () => {
  return (
    <Work variants={pageAnimation} exit="exit" initial="hidden" animate="show"
    sttle={{background: '#fff'}}>

    <motion.div variants={sliderContainer}>
    <Frame1 variants={slider}></Frame1>
    <Frame2 variants={slider}></Frame2>
    <Frame3 variants={slider}></Frame3>
    <Frame4 variants={slider}></Frame4>      
    </motion.div>

      <Movie>
        <motion.h2>Warrior</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Hide>
        <img className='ath' src={athlete} alt="boxing" />
        </Hide>
      </Movie>

      <Movie>
        <motion.h2>Animal Flow</motion.h2>
        <motion.div variants={lineAnim} className="line" ></motion.div>
        <motion.img className='box' src={img6} alt="athlete"/>       
      </Movie>

      <Movie>
        <motion.h2 variants={fade}>Calesthenics</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>        
          <motion.img className='jump' variant={photoAnim}src={jumping} alt="jumping" />
      </Movie>

      <Movie>
        <motion.h2>Marial-Arts</motion.h2>
        <motion.div variants={lineAnim} className="line" ></motion.div>
        <motion.img className='box' src={boxing} alt="athlete"/>       
      </Movie>


    </Work>

  )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding : 5rem 10rem;
    @media(max-width:1250px){
      padding:2rem 2rem
    }
`
const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
      height : 0.2rem;
      background: #cccccc;
      margin-bottom: 3rem;
    }
    img{
      width: 100%;
      height: 100vh;
      object-fit: cover;
      @media (max-width:1250px){
        width:370px;
        height: 220px;
        object-fit: cover;
      }
    }
    h2{
      color: #ff1b1b;
      font-weight:600;
    }
`
const Hide = styled.div`
  overflow: hidden;

`

const Frame1 = styled(motion.div)`
  position: fixed;
  left:0;
  top:10%;
  width:100%;
  height: 100vh;
  background: #fffebf;
  z-index:2;
`
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`
const Frame3 = styled(Frame1)`
  background : #9ed2ff;
`
const Frame4 = styled(Frame1)`
  background: #8effa0;

`

export default Ourwork