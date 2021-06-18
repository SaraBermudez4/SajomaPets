import { Avatar } from '@chakra-ui/avatar'
import { Heading } from '@chakra-ui/layout'
import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { AvatarBadge } from '@chakra-ui/avatar'
import { IoCamera } from "react-icons/io5";
import { Text } from '@chakra-ui/layout'

const HeaderProfile = () => {

    const { name, email, image } = useSelector(state => state.auth)

    return (
        <div style={{ marginRight: "100px" }}>
            <Avatar size="2xl" mb="20px" name={name} src={image} onClick={() => console.log("EditarFoto")}>
                <AvatarBadge borderColor="#eaecef" bg="#49519A" boxSize="50px" >
                    <IoCamera fontSize="18px" />
                </AvatarBadge>
            </Avatar>
            <Heading as="h4" size="md">{name}</Heading>
            <Text fontSize="xl">{email}</Text>
        </div>
    )
}

export default HeaderProfile
