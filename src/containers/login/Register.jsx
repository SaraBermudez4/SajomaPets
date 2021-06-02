import React, { useState } from 'react'
import { Input, FormControl, InputGroup, InputLeftElement, InputRightElement, Button, Center, Image, chakra, Box, toast, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from '@chakra-ui/react'
import { FaUserAlt, FaLock } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { AiFillTags } from "react-icons/ai"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/uiError'
import { startRegisterWithEmailPasswordName } from '../../actions/authAction'

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

    const dispatch = useDispatch()

    const { msjError } = useSelector(state => state.error)

    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);

    const [values, handleInputChange] = useForm({
        name: "",
        lastname: "",
        nickName: "",
        email: "",
        password: ""
    })

    const { name, lastname, nickName, email, password } = values

    const formValid = () => {
        if (name.trim().length === 0 || lastname.trim().length === 0 || nickName.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0) {
            dispatch(setError("Todos los campos son requeridos"))
            console.log("Todos los campos son requeridos");
            return false
        } else if (!validator.isStrongPassword(password)) {
            dispatch(setError("La constraseña es muy debil mi so"))
            console.log("La constraseña es muy debil mi so");
            return false
        } else if (!validator.isEmail(email)) {
            dispatch(setError("Email requerido"))
            console.log("Email requerido");
            return false
        }
        dispatch(removeError())
        return true
    }

    const HandleRegister = (e) => {
        e.preventDefault()
        if (formValid()) {
            dispatch(startRegisterWithEmailPasswordName(name, lastname, nickName, email, password))
        }

    }

    return (
        <Center id='registro'>
            <DivRegistro>
                <ImageMediaRegistro src="https://i.ibb.co/VtFcZgM/LOGASO-NO-JODA-2.png" alt="LOGASO-NO-JODA-2" border="0" />
                <form onSubmit={HandleRegister}>
                    {
                        msjError &&
                        (
                            <Alert status="error">
                                <AlertIcon />
                                <AlertTitle mr={2}>Eror!!</AlertTitle>
                                <AlertDescription>{msjError}</AlertDescription>
                            </Alert>
                        )
                    }
                    <FormControl mt={7}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<CFaUserAlt color="gray.300" />}
                            />
                            <Input type="text" placeholder="Name" name="name" value={name} onChange={handleInputChange} />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt={7}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<CFaUserAlt color="gray.300" />}
                            />
                            <Input type="text" placeholder="Last name" name="lastname" value={lastname} onChange={handleInputChange} />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt={7}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<CAiFillTags color="gray.300" />}
                            />
                            <Input type="text" placeholder="Nick name" name="nickName" value={nickName} onChange={handleInputChange} />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt={7}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<CMdEmail color="gray.300" />}
                            />
                            <Input type="email" placeholder="Email address" name="email" value={email} onChange={handleInputChange} />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt={7}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                                children={<CFaLock color="gray.300" />}
                            />
                            <Input type={showPassword ? "text" : "password"} placeholder="Password" name="password" value={password} onChange={handleInputChange} />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                    {showPassword ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Button type="submit" width='100%' mt={7} background='#49519a' color='white' _hover={{ color: 'white' }}>Register</Button>
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
