import { Center } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/layout'
import React from 'react'
import DatesProfile from '../../components/profile/DatesProfile'
import HeaderProfile from '../../components/profile/HeaderProfile'

const Profile = () => {
    return (
        <Container>
            <Center>
                <HeaderProfile />
            </Center>
            <Center>
                <DatesProfile />
            </Center>
        </Container>
    )
}

export default Profile
