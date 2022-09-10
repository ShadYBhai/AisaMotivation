import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Nav = () => {
  return (

        <StyledNav>
            <h1>
                <Link id='logo' to='/'>Aisa<span>Motivation</span></Link>
            </h1>
            <ul>

            <li>
                <Link to="/">About Us</Link>
            </li>

            <li>
                <Link to="/work">Gallery</Link>
            </li>

            <li>
                <Link to="/contact">Contact Us</Link>
            </li>

            </ul>
        </StyledNav>

    )
}
const StyledNav = styled.nav`
    min-height: 10vh;
    display : flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding:1rem 10rem;
    background:#282828;
    a{
        color : white;
        text-decoration:none;
    }
    ul {
        display:flex;
        list-style:none;
    }
    #logo{
        font-size : 1.5rem;
        font-family : "lobster",cursive;
    }
    span{
        color:red
    }
    li{
        padding-left:8rem;
        position : relative
    }
    @media (max-width: 1250px) {
        flex-direction: column;
        padding : 1.3rem 1rem;
        width: 100%;
        #logo{
            display: inline-block;
            margin:1rem;
        }

        ul{
            padding : 2rem;
            justify-content:space-around;
            width: 100%;
            li{
                padding: 0
            }
        }
}
`