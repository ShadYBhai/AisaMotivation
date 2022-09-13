import React from 'react'
import styled from 'styled-components'
import { About } from '../styles'
import Toggle from './Toggle'

export const FaqSection = () => {

    return (
        <Faq>
        <h2>Any Questions? <span>FAQ</span></h2>
        <Toggle className='question' title={'How Do We Provide Training'}>
                <div className="answer">
                <p>We are Available Online and Physically</p>
                </div>
        </Toggle>
            
            <Toggle title='Timings'>
                <div className="answer">
                <p>Anytime! We have a time for you.</p>
                </div>
            </Toggle>

            <Toggle title='What Trainings do we offer?'>
           
                <div className="answer">
                <p>Warrior Training</p>
                <p>MMA Traning</p>
                <p>Calesthenics</p>
                <p>Animal Flow</p>
                <p>Movement Flow</p>
                </div>

            </Toggle>
        </Faq>
    )
}

const Faq = styled(About)`

    margin-top: 3rem;

    display : block;
    span{
        display:block;
    }
    h2{
        padding-bottom : 2rem;
        font-weight : lighter
    }
    .faq-line{
        background : #cccccc;
        height : 0.2rem;
        margin:2rem 0rem;
        width:100%;
    }
    .question{
        padding:3rem 0rem;  
        p{
            padding:1rem 0rem;
        } 
}
`
