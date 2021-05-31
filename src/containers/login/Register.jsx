import React, { useState } from 'react'
import { Input, FormControl, InputGroup, InputLeftElement, InputRightElement, Button, Center, Image, chakra, Box } from '@chakra-ui/react'
import { FaUserAlt, FaLock } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { AiFillTags } from "react-icons/ai"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { setError, removeError } from '../../actions/uiAction'
import { startRegisterUser } from '../../actions/authAction'

const DivRegistro = styled.div`
    padding: 40px;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    @media (min-width: 481px) {
        margin: 50px;
    }
`

const ImageMediaRegistro = styled(Image)`
    @media (min-width: 481px) {
        width: 50%;
    }
`

const Register = () => {

    const CFaUserAlt = chakra(FaUserAlt);
    const CFaLock = chakra(FaLock);
    const CMdEmail = chakra(MdEmail);
    const CAiFillTags = chakra(AiFillTags);


    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);

    const dispatch = useDispatch()

    const { msjError } = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        name: '',
        lastName: '',
        email: '',
        password: '',
    })

    const { name, lastName, email, password } = formValues

    const formValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('nombre requerido'))
            return false
        } else if (lastName.trim().length === 0) {
            dispatch(setError('apellido requerido'))
            return false
        } else if (!validator.isEmail(email)) {
            dispatch(setError('email requerido'))
            return false
        } else if (!validator.isStrongPassword(password)) {
            dispatch(setError('password no strong'))
            return false
        }

        dispatch(removeError())
        return true
    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (formValid()) {
            dispatch(startRegisterUser(name, lastName, email, password))
        }
    }

    return (
        <Center id='registro'>
            <DivRegistro>
                <ImageMediaRegistro src="https://i.ibb.co/VtFcZgM/LOGASO-NO-JODA-2.png" alt="LOGASO-NO-JODA-2" border="0" />
                <form onSubmit={handleRegister}>
                        {
                            msjError &&
                            (
                                <div className="auth_alert-error">
                                    {msjError}
                                </div>
                            )
                        }
                    <FormControl mt={7}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<CFaUserAlt color="gray.300" />}
                            />
                            <Input type="text" placeholder="Name" name='name' value={name} onChange={handleInputChange} />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt={7}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<CAiFillTags color="gray.300" />}
                            />
                            <Input type="text" placeholder="Last name" name='lastName' value={lastName} onChange={handleInputChange} />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt={7}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<CMdEmail color="gray.300" />}
                            />
                            <Input type="email" placeholder="Email address" name='email' value={email} onChange={handleInputChange} />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt={7}>
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
                    <Button type='submit' width='100%' mt={7} background='#49519a' color='white' _hover={{ color: 'white' }}>Register</Button>
                </form>
                <Box mt={3} mb={3}>
                    Already registered?{" "}
                    <Link to='/auth/login'>
                        Sign in
                    </Link>
                </Box>
            </DivRegistro>
        </Center>
    )
}

export default Register
