//it's a style so it's stateless, goes off the props it's given
import React from 'react'
import styled from 'styled-components'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'

const StayVisible = styled.div`
position: absolute;
margin-left: ${(props)=>(props.open)? `${props.width}`: null};
transition: margin .2s;
`

export const NavToggleButton = (props) =>{
    return(
        <StayVisible {...props}>
            <FloatingActionButton
            onTouchTap={props.toggle}>
                <Menu/>
            </FloatingActionButton>
        </StayVisible>
    )
};


