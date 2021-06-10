import { Center } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'
import DatesProfile from '../../components/profile/DatesProfile'
import HeaderProfile from '../../components/profile/HeaderProfile'

const Profile = () => {
    return (
        <Container>
            <Link to='/'>Volver</Link>
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
