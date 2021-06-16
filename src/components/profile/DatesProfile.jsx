import React, { useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';

import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, Grid, Typography } from '@material-ui/core';

import styled from 'styled-components'
import { useDisclosure } from '@chakra-ui/hooks';

import { RiArrowDownSLine } from "react-icons/ri";
import { FaRegCreditCard, FaCcMastercard, FaCcVisa, FaCcPaypal, FaMapMarkerAlt } from 'react-icons/fa'
import { MdAddCircle } from 'react-icons/md'
import { BsHouseDoor, BsBuilding } from 'react-icons/bs'
import CreditCardModal from './CreditCardModal';
import { Modal } from '@chakra-ui/react';
import { startSaveUser } from '../../actions/userAction';
import AddressModal from './AddressModal';

const StyledAccordionDetails = styled(AccordionDetails)`
    flex-direction: column;
    width: 50vw;
`
const StyledTextField = styled(TextField)`
    margin-bottom: 20px;
    width: 100%;
`
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },

    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 270,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
    },
    heading: {
        fontSize: theme.typography.pxToRem(18),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    typography: {
        padding: theme.spacing(2),
    },
}));

let modalName = ''

const DatesProfile = () => {
    const classes = useStyles();

    const dispatch = useDispatch()

    const [aInput, setAInput] = useState(false)

    const { userData } = useSelector(state => state.user)
    const cards = userData[0].cards

    const address = userData[0].addresses

    console.log(address);

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef()
    const finalRef = useRef()

    const newName = useRef()
    const newLastName = useRef()
    const newDocument = useRef()
    const newPhoneNumber = useRef()
    const newPhoneNumber2 = useRef()

    const editUser = async (e) => {

        const newNName = newName.current.value
        const newNLastName = newLastName.current.value
        const newNDocument = newDocument.current.value
        const newNPhoneNumber = newPhoneNumber.current.value
        const newNPhoneNumber2 = newPhoneNumber2.current.value

        const dataUser = {
            id: userData[0].id,
            document: newNDocument,
            lastName: newNLastName,
            cellPhone: newNPhoneNumber2,
            nickName: userData[0].nickName,
            email: userData[0].email,
            phone: newNPhoneNumber,
            name: newNName,
            cards: userData[0].cards,
            addresses: userData[0].addresses
        }

        console.log(dataUser);

        dispatch(startSaveUser(dataUser))

        setTimeout(() => {
            window.location.reload()
        }, 500)
    }

    const handleAInputClick = e => {
        if (e.target.textContent === 'Editar') {
            setAInput(true)
        } else {
            setAInput(false)
        }
    }

    const handleModalOpen = e => {

        modalName = e.target.textContent

        console.log(modalName);

        onOpen()
    }

    console.log(userData[0].cards);

    return (

        <div className={classes.root} noValidate autoComplete="off" display="flex"
            justifyContent="center">
            <Accordion>
                <AccordionSummary
                    expandIcon={<RiArrowDownSLine />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Datos de la cuenta</Typography>
                </AccordionSummary>
                <StyledAccordionDetails>
                    <StyledTextField type="text" value={userData[0].nickName} label='NickName' variant="outlined" InputProps={{
                        readOnly: true,
                    }} />
                    <StyledTextField type="email" value={userData[0].email} label='Email' variant="outlined" InputProps={{
                        readOnly: true,
                    }} />
                    {/* <StyledTextField type="password" value="123456789" label='Password' variant="outlined" InputProps={{
                        readOnly: true,
                    }} /> */}
                </StyledAccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<RiArrowDownSLine />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <h3 className={classes.heading}>Datos personales</h3>
                </AccordionSummary>
                {
                    !aInput
                        ?
                        <StyledAccordionDetails>
                            <StyledTextField value={userData[0].name} label="Name" variant="outlined" />
                            <StyledTextField value={userData[0].lastName} label='LastName' variant="outlined" />
                            <StyledTextField value={userData[0].document} label='Document' variant="outlined" />
                            <StyledTextField value={userData[0].phone} label='Phone Number' variant="outlined" />
                            <StyledTextField value={userData[0].cellPhone} label='Cell Phone Number' variant="outlined" />
                            <Button
                                variant="outlined" color="primary"
                                className={classes.button}
                                onClick={handleAInputClick}
                            >
                                Editar
                            </Button>
                        </StyledAccordionDetails>
                        :
                        <StyledAccordionDetails>
                            <StyledTextField inputRef={newName} placeholder="Name" variant="outlined" />
                            <StyledTextField inputRef={newLastName} placeholder='LastName' variant="outlined" />
                            <StyledTextField inputRef={newDocument} placeholder='Document' variant="outlined" />
                            <StyledTextField inputRef={newPhoneNumber} placeholder='Phone Number' variant="outlined" />
                            <StyledTextField inputRef={newPhoneNumber2} placeholder='Cell Phone Number' variant="outlined" />
                            <Button
                                variant="outlined" color="primary"
                                className={classes.button}
                                onClick={editUser}
                            >
                                Actualizar
                            </Button>
                            <Button
                                variant="outlined" color="primary"
                                className={classes.button}
                                onClick={handleAInputClick}
                            >
                                Volver
                            </Button>
                        </StyledAccordionDetails>
                }
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<RiArrowDownSLine />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Metodos de pago</Typography>
                </AccordionSummary>
                <StyledAccordionDetails>
                    <div style={{ textAlign: "left", display: "flex", justifyContent: "space-between" }}>
                        <FormControl component="fieldset" >
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="flex-start"
                            >
                                {cards.map((card, index) => {
                                    return (
                                        <Box display="flex" key={index} marginBottom="10px" fontSize="18px">
                                            <FaCcMastercard style={{ marginRight: "10px", fontSize: "18px" }} /> {card.numCard}
                                        </Box>
                                    )
                                })}
                            </Grid>
                        </FormControl>
                        <div>
                            <Button
                                variant="outlined" color="primary"
                                className={classes.button}
                                startIcon={<MdAddCircle />}
                                onClick={handleModalOpen}

                            >
                                Add Card
                            </Button>
                        </div>
                    </div>
                </StyledAccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<RiArrowDownSLine />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Domicilios</Typography>
                </AccordionSummary>
                <StyledAccordionDetails>
                    <div style={{ textAlign: "left", display: "flex", justifyContent: "space-between" }}>
                        <FormControl component="fieldset" >
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="flex-start"
                            >
                                {address.map((addr, index) => {
                                    return (
                                        <Box key={index} marginBottom="10px" fontSize="18px" border="solid 1px" borderRadius="20px" padding="20px" >
                                            <p style={{ fontSize: "20px", fontWeight: "600", display: "flex" }}><BsHouseDoor style={{ marginRight: "10px", fontSize: "18px", marginTop: "5px" }} />{addr.typeAddress}</p>
                                            <p style={{ fontSize: "16px" }}>{addr.country} - {addr.city} - {addr.neighborhood} - {addr.direction}</p>
                                            <p style={{ fontSize: "14px" }}>{addr.complement}</p>
                                        </Box>
                                    )
                                })}
                                {/* <Box marginBottom="10px" fontSize="18px" border="solid 1px" borderRadius="20px" padding="20px" >
                                    <p style={{ fontSize: "20px", fontWeight: "600", display: "flex" }}><BsHouseDoor style={{ marginRight: "10px", fontSize: "18px", marginTop: "5px" }} />Casa</p>
                                    <p style={{ fontSize: "16px" }}>Bogotá - Barrio - Cll 76 CA # 90-26</p>
                                    <p style={{ fontSize: "14px" }}>int 301</p>
                                </Box>
                                <Box marginBottom="10px" fontSize="18px" border="solid 1px" borderRadius="20px" padding="20px">
                                    <p style={{ fontSize: "20px", fontWeight: "600", display: "flex" }}><BsBuilding style={{ marginRight: "10px", fontSize: "18px", marginTop: "5px" }} />Trabajo</p>
                                    <p style={{ fontSize: "16px" }}>Bogotá - Barrio - Cll 76 CA # 90-26</p>
                                    <p style={{ fontSize: "14px" }}>int 301</p>
                                </Box>
                                <Box marginBottom="10px" fontSize="18px" border="solid 1px" borderRadius="20px" padding="20px" >
                                    <p style={{ fontSize: "20px", fontWeight: "600", display: "flex" }}><FaMapMarkerAlt style={{ marginRight: "10px", fontSize: "18px", marginTop: "5px" }} />Otro</p>
                                    <p style={{ fontSize: "16px" }}>Bogotá - Barrio - Cll 76 CA # 90-26</p>
                                    <p style={{ fontSize: "14px" }}>int 301</p>
                                </Box> */}
                            </Grid>
                        </FormControl>
                        <div>
                            <Button
                                variant="outlined" color="primary"
                                className={classes.button}
                                startIcon={<MdAddCircle />}
                                onClick={handleModalOpen}
                            >
                                Add address
                            </Button>
                        </div>
                    </div>
                </StyledAccordionDetails>
            </Accordion>
            <Modal initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose} >
                {
                    modalName == 'Add Card'
                        ?
                        <CreditCardModal onClose={onClose} />
                        :
                        <AddressModal onClose={onClose} />
                }
            </Modal>
        </div>

    )
}

export default DatesProfile
