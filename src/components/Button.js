import styled from 'styled-components'

export const Button = styled.button`
cursor: pointer;
margin: .2rem .5rem .2rem 0;
padding: .2rem .5rem;
border: .05rem solid var(--lightBlue);
border-color: ${props => props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
border-radius: .5rem;
color: ${props => props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
background-color: transparent;
font-size: 1.4rem;
text-transform: capitalize;

transition: background-color .5s ease-in-out, color .5s ease-in-out;

&:hover{
    background-color: ${props => props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
    color: var(--mainBlue);
}

&:focus{
    outline: none;
}
`