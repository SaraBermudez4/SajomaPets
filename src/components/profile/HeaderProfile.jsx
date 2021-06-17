import { Avatar } from '@chakra-ui/avatar'
import { Heading } from '@chakra-ui/layout'
import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { MdEdit } from "react-icons/md";
import { AvatarBadge } from '@chakra-ui/avatar'
import { IoCamera } from "react-icons/io5";
import { Text } from '@chakra-ui/layout'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const HeaderProfile = () => {

    const classes = useStyles();

    const { name, email, image, phone } = useSelector(state => state.auth)

    return (
        <div style={{ marginRight: "100px" }}>
            <Avatar size="2xl" mb="20px" name={name} src={image} onClick={() => console.log("EditarFoto")}>
                <AvatarBadge borderColor="#eaecef" bg="#49519A" boxSize="50px" >
                    <IoCamera fontSize="18px" />
                </AvatarBadge>
            </Avatar>
            <Heading as="h4" size="md">{name}</Heading>
            <Text fontSize="xl">{email}</Text>
            <Button
                variant="outlined" color="primary"
                className={classes.button}
                startIcon={<MdEdit />}
            >
                Edit
            </Button>

        </div>
    )
}

export default HeaderProfile
