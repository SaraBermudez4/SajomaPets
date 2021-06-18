import React from 'react'
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
            <HeaderProfile />
            <DatesProfile />
        </StyledDiv>

    )
}

export default Profile
