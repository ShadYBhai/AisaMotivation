import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { pageAnimation, titleAnim } from '../Animation'
import {useNavigate} from 'react-router-dom';

export const ContactUs = () => {
  const navigate = useNavigate();
  
  const handelSubmit =(e)=>{
    e.preventDefault()
    navigate('/contact')
  }

  return (
    <ContactStyle
    variants={pageAnimation} 
    exit="exit"
    initial="hidden"
    animate="show"
    sttle={{background: '#fff'}}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>
          <h3>Get in touch.</h3>
          </motion.h2>
        </Hide>
        
        <Social variants={titleAnim}>
        <img alt='i' src="data:image/png;base64,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"></img>
        <h4><span>Email</span> us on<br></br>
        <a href='/'>aisamotivation@gmail.com</a></h4>
        </Social>
        <Insta>
        <img alt='i' href='https://www.instagram.com/aisamotivation?r=nametag' src="data:image/png;base64,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"></img>
        <h4>Follow us on <a className='ela'href='https://www.instagram.com/aisamotivation?r=nametag'>Instagram!</a> 
          <br />
          <a alt='i' href='https://www.instagram.com/aisamotivation?r=nametag'>Aisamotivation</a></h4>
        </Insta>
        <Contact variants={titleAnim}>
          <img alt='i' src="data:image/png;base64,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"></img>
          <h4> <span>Contact</span> Number
          <br />
          <ul>+91 9607002346</ul>
          </h4>
      </Contact>
      </Title>
      <Form variants={titleAnim}>
      
      <form 
      netlify
      netlify-honeypot
      method="POST"
      name="contact"
      data-netlify="true"
      onSubmit='submit'
      action='/contact'
      >
      <input type="hidden" name='form-name' value='contact' />
      <motion.h2> <span>Write Us!</span></motion.h2>
      <ul>Full Name</ul>
      <input
        name='fullName'
        placeholder='Name'
      />
      <ul>Your Email</ul>
      <input
        name='email'
        placeholder='Email'
      />
      <ul>Contact Number</ul>
      <input
        name='contactNumber'
        placeholder='Phone Number'
      />
      <ul>Any Queries?</ul>
      <textarea className='.queries' rows = "5" cols = "60" name="description" placeholder='Enter details here...'>
         </textarea>
         <button className='btn' type="submit">Submit</button>
      </form>
      </Form>
    </ContactStyle>
  )
}
const Form = styled(motion.div)`
  form{    
    display: inline-block;
    width:100%;
    margin: 0rem 12rem;
    input{
      &:hover{
        cursor: pointer;
      }
    }
  }
  ul{
    margin: 1rem 0rem;
    text-decoration: none;
    color: white;
  }

  h2{
    color: white;
  }
  input{
  width: 80%;
  display: block;
  padding:0.7rem ;
  margin-bottom: 2rem;
  border-radius:2rem;
  border: none;
  background-color: #c5bdbd;
  }


  textarea{
    border-radius:1rem;
    background-color: #c5bdbd;
    display: block;
    width: 60%;
    margin-bottom: 2rem;
  }
  @media(max-width:1250px){
    form{
    margin: 0;
    padding: 0;
    }
    h2{
      font-size:17px;
    }

    input{
  width: 90%;
  display: block;
  padding:0.7em ;
  margin-bottom: 3rem;
  }
  }
`

const Contact = styled(motion.div)`
  display:flex;
  align-items: center;

  h4{
    color : white;
    ul{
    font-size: 19px;
    text-decoration:none;
    color : #ffffff
  }
  }
`

const Insta = styled(motion.div)`
align-items: center;
display:flex;
  h4{
    color : white;
  }
  .ela{
    font-size: 20px;
    color : red;
    &:hover{
      color :  #ff01cc;
      cursor:pointer
    }
  }
  a{
    font-size: 17px;
    text-decoration:none;
    color : #ff01cc;
    &:hover{
      color : red;
      cursor:pointer
    }
  }
`


const Social = styled(motion.div)`
  display:flex;
  align-items: center;
  h4{
    color: #ffffff;
  }
  h4{
    margin:2rem;
    span{
      color : #ff0000;
    }
    a{
      font-size: 20px;
      text-decoration: none;
    }
  }
`
const Hide = styled.div`
  overflow:hidden;
`
const ContactStyle =  styled.div`
    
    display : flex;
    flex-wrap:wrap;
    align-items: center;
    padding: 5rem 0rem;
    margin-left: 1.5rem;
    color: #353535;
    min-height:90vh;
    @media(max-width:1250px){
      align-items: center;
      overflow-x: hidden;
      font-size: 1rem;
    }
`
const Title = styled.div`
  margin-bottom:6rem;
  color:black;

`


