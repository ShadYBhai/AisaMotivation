import styled from "styled-components"

export const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 7rem;
    color: #ffffff;
    @media (max-width: 1200px) {
        display: block;
        padding: 2rem 2rem;
        text-align:center;
}
`
export const Description = styled.div `
    flex: 1;
    padding-right: 5rem;
    z-index: 2;

    h2{
        font-weight: lighter;
    }
    @media (max-width: 1200px) {
        padding:0;
        button{
            margin:2rem 0rem 5rem 0rem
        } 
}
`
export const Image = styled.div`
    overflow: hidden;
    z-index: 2;
    img{
      width: 100%;
      height: 120vh;
      object-fit: cover;
      @media (max-width:1250px){
        width:260px;
        height:400px
      }
    }
`
export const Hide = styled.div `
    overflow: hidden;
`