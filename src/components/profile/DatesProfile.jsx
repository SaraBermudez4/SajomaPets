import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';

import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, Grid, Modal, Typography } from '@material-ui/core';

import styled from 'styled-components'
import { useDisclosure } from '@chakra-ui/hooks';

import { RiArrowDownSLine } from "react-icons/ri";
import { FaRegCreditCard, FaCcMastercard, FaCcVisa, FaCcPaypal, FaMapMarkerAlt } from 'react-icons/fa'
import { MdAddCircle } from 'react-icons/md'
import { BsHouseDoor, BsBuilding } from 'react-icons/bs'
import CreditCardModal from './CreditCardModal';

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


const DatesProfile = () => {
    const classes = useStyles();

    const { userData } = useSelector(state => state.user)
    const cards = userData[0].cards

    const address = userData[0].addresses
    console.log(address);
    // const { isOpen, onOpen, onClose } = useDisclosure()

    // const initialRef = React.useRef()
    // const finalRef = React.useRef()

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
                    <StyledTextField id="outlined-basic" type="text" value={userData[0].nickName} label='NickName' variant="outlined" InputProps={{
                        readOnly: true,
                    }} />
                    <StyledTextField id="outlined-basic" type="email" value={userData[0].email} label='Email' variant="outlined" InputProps={{
                        readOnly: true,
                    }} />
                    {/* <StyledTextField type="password" value="123456789" id="outlined-basic" label='Password' variant="outlined" InputProps={{
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
                <StyledAccordionDetails>
                    <StyledTextField id="outlined-basic" value={userData[0].name} label="Name" variant="outlined" />
                    <StyledTextField id="outlined-basic" value={userData[0].lastName} label='LastName' variant="outlined" />
                    <StyledTextField id="outlined-basic" value={userData[0].document} label='Document' variant="outlined" InputProps={{
                        readOnly: true,
                    }} />
                    <StyledTextField id="outlined-basic" value={userData[0].phone} label='PhoneNumber' variant="outlined" InputProps={{
                        readOnly: true,
                    }} />
                    <StyledTextField id="outlined-basic" value={userData[0].cellPhone} label='PhoneNumber2' variant="outlined" InputProps={{
                        readOnly: true,
                    }} />
                </StyledAccordionDetails>
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
                                {cards.map(card => {
                                    <Box display="flex" marginBottom="10px" fontSize="18px">
                                        <FaCcMastercard style={{ marginRight: "10px", fontSize: "18px" }} /> {card}
                                    </Box>
                                })}
                                <Box display="flex" marginBottom="10px" fontSize="18px">
                                    <FaCcMastercard style={{ marginRight: "10px", fontSize: "18px" }} /> **** **** **** 1234
                                </Box>
                                <Box display="flex" marginBottom="10px" fontSize="18px" >
                                    <FaCcVisa style={{ marginRight: "10px", fontSize: "18px" }} /> **** **** **** 1234
                                </Box>
                                <Box display="flex" marginBottom="10px" fontSize="18px" >
                                    <FaRegCreditCard style={{ marginRight: "10px", fontSize: "18px" }} fontSize="18px" /> **** **** **** 1234
                                </Box>
                                <Box display="flex" marginBottom="10px" fontSize="18px" >
                                    <FaCcPaypal style={{ marginRight: "10px", fontSize: "18px" }} fontSize="18px" /> **** **** **** 1234
                                </Box>
                            </Grid>
                        </FormControl>
                        <div>
                            <Button
                                variant="outlined" color="primary"
                                className={classes.button}
                                startIcon={<MdAddCircle />}
                            // onClick={onOpen}

                            >
                                {/* <CreditCardModal /> */}
                                Agregar
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
                                {address.map(addr => {
                                    <Box marginBottom="10px" fontSize="18px" border="solid 1px" borderRadius="20px" padding="20px" >
                                        <p style={{ fontSize: "20px", fontWeight: "600", display: "flex" }}><BsHouseDoor style={{ marginRight: "10px", fontSize: "18px", marginTop: "5px" }} />{addr.type}</p>
                                        <p style={{ fontSize: "16px" }}>{addr.country} - {addr.city} - {addr.neighborhood} - {addr.address}</p>
                                        <p style={{ fontSize: "14px" }}>{addr.complement}</p>
                                    </Box>
                                })}
                                <Box marginBottom="10px" fontSize="18px" border="solid 1px" borderRadius="20px" padding="20px" >
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
                                </Box>
                            </Grid>
                        </FormControl>
                        <div>
                            <Button
                                variant="outlined" color="primary"
                                className={classes.button}
                                startIcon={<MdAddCircle />}
                            >
                                Agregar
                            </Button>
                        </div>
                    </div>
                </StyledAccordionDetails>
            </Accordion>
            {/* <Modal 
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}>
                <CreditCardModal  />
            </Modal> */}
        </div>

    )
}

export default DatesProfile
