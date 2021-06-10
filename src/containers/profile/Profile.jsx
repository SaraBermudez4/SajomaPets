import { Center } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'
import DatesProfile from '../../components/profile/DatesProfile'
import HeaderProfile from '../../components/profile/HeaderProfile'
import styled from 'styled-components'

const StyledDiv = styled.div`
    padding: 10%;
    text-align: center;
    display: flex;
`
const Profile = () => {
    return (
        <StyledDiv>
            {/* <Link to='/'>Volver</Link> */}
            <HeaderProfile />
            <DatesProfile />
        </StyledDiv>

    )
}

export default Profile
