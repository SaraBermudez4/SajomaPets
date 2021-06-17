import React, { useState } from 'react'
import { Input, FormControl, InputGroup, InputLeftElement, chakra, InputRightElement, Button, Image, Box, Grid, Alert, AlertIcon, Container } from '@chakra-ui/react'
import { FaUserAlt, FaLock } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { SiFacebook } from "react-icons/si"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startLoginGoogle, startGoogleLogin } from '../../actions/authAction'
import validator from 'validator'
import { removeError, setError } from '../../actions/uiAction'

const ContainerLogin = styled(Container)`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
`

const ImageMediaLogin = styled(Image)`
    width: 100%; 
    @media (min-width: 481px) {
        width: 65%;
    }
`

const Login = () => {

    const CFaUserAlt = chakra(FaUserAlt);
    const CFaLock = chakra(FaLock);
    const CFcGoogle = chakra(FcGoogle);
    const CSiFacebook = chakra(SiFacebook);

    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);

    const dispatch = useDispatch()

    const loading = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        user: '',
        password: ''
    })

    const { user, password } = formValues

    const { msjError } = useSelector(state => state.ui)

    const formValid = () => {
        if (!validator.isEmail(user)) {
            dispatch(setError('Email requerido'))
            return false
        }
        else if (!validator.isStrongPassword(password)) {
            dispatch(setError('La contraseña es incorecta'))
            return false
        }
        dispatch(removeError(''))
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValid()) {
            dispatch(startLoginGoogle(user, password))
        }
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    return (
        <div>
            <Link to='/' onClick={() => {
                setTimeout(() => {
                    window.location.reload()
                }, 500);
            }}>volver</Link>
            <ContainerLogin>
                <ImageMediaLogin src="https://i.ibb.co/VtFcZgM/LOGASO-NO-JODA-2.png" alt="LOGASO-NO-JODA-2" border="0" />
                <form onSubmit={handleSubmit}>
                    {
                        msjError &&
                        (
                            <Alert status="error" marginTop='5'>
                                <AlertIcon />
                                {msjError}
                            </Alert>
                        )
                    }
                    <FormControl mt={10}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<CFaUserAlt color="gray.300" />}
                            />
                            <Input type="email" placeholder="Email address" name='user' value={user} onChange={handleInputChange} />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt={10}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                                children={<CFaLock color="gray.300" />}
                            />
                            <Input type={showPassword ? "text" : "password"} placeholder="Password" name='password' value={password} onChange={handleInputChange} />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                    {showPassword ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Button type='submit' width='100%' mt={10} background='#49519a' color='white' _hover={{ color: 'white' }} disable={loading}>Login</Button>
                </form>
                <Box mt={3} mb={3}>
                    New to us?{" "}
                    <Link to='/auth/registro' onClick={() => {
                        dispatch(removeError())
                    }}>
                        Sign Up
                    </Link>
                </Box>
                <Grid templateColumns="repeat(3, 1fr)" gap={2} width='100%' mt='10px'>
                    <Box w="100%" h="10" mt='13px'><hr color='black' /></Box>
                    <Box w="100%" h="10" textAlign='center'>or</Box>
                    <Box w="100%" h="10" mt='13px'><hr color='black' /></Box>
                </Grid>
                <div>
                    <Button onClick={handleGoogleLogin} width='100%'  background='red.500' color='white' _hover={{ bg: "#f95f62" }}><CFcGoogle mr={2} />Sign in with google</Button>
                    <Button width='100%' mt={3} background='#3b5a9a' color='white' _hover={{ bg: "#4b6bad" }}><CSiFacebook mr={2} />Sign in with facebook</Button>
                </div>
                <div>
                </div>
            </ContainerLogin>
        </div>
    )
}

export default Login
