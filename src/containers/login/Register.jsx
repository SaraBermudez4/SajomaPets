import React, { useState } from 'react'
import { Input, FormControl, InputGroup, InputLeftElement, InputRightElement, Button, Center, Image, chakra, Box } from '@chakra-ui/react'
import { FaUserAlt, FaLock } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { AiFillTags } from "react-icons/ai"
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

    return (
        <Center id='registro'>
            <DivRegistro>
                <ImageMediaRegistro src="https://i.ibb.co/VtFcZgM/LOGASO-NO-JODA-2.png" alt="LOGASO-NO-JODA-2" border="0" />
                <form>
                <FormControl mt={7}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<CFaUserAlt color="gray.300" />}
                            />
                            <Input type="text" placeholder="Name" />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt={7}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<CFaUserAlt color="gray.300" />}
                            />
                            <Input type="text" placeholder="Last name" />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt={7}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<CAiFillTags color="gray.300" />}
                            />
                            <Input type="text" placeholder="Nick name" />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt={7}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<CMdEmail color="gray.300" />}
                            />
                            <Input type="email" placeholder="Email address" />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt={7}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                                children={<CFaLock color="gray.300" />}
                            />
                            <Input type={showPassword ? "text" : "password"} placeholder="Password" />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                    {showPassword ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Button width='100%' mt={7} background='#49519a' color='white' _hover={{ color: 'white' }}>Register</Button>
                </form>
                <Box mt={3} mb={3}>
                    Already registered?{" "}
                    <Link to='/login'>
                        Sign in 
                    </Link>
                </Box>
            </DivRegistro>
        </Center>
    )
}

export default Register
