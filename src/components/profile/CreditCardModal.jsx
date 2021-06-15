import React, { useState } from 'react'
import { Modal } from '@chakra-ui/modal';
import { ModalOverlay } from '@chakra-ui/modal';
import { ModalContent } from '@chakra-ui/modal';
import { ModalHeader } from '@chakra-ui/modal';
import { ModalCloseButton } from '@chakra-ui/modal';
import { ModalBody } from '@chakra-ui/modal';
import { ModalFooter } from '@chakra-ui/modal';

import { Heading } from '@chakra-ui/layout';

import { Button, FormControl, InputAdornment, InputLabel, makeStyles, OutlinedInput } from '@material-ui/core';

import { HiLockClosed } from 'react-icons/hi'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },

    },
}));

const CreditCardModal = ({ initialFocusRef, finalFocusRef, isOpen, onClose }) => {
    const classes = useStyles();
    const [name2, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    return (
        <>
            <ModalOverlay />
            <ModalContent >
                <ModalHeader style={{ textAlign: "center" }}>
                    Agregar nuevo metodo de pago
                        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "15px" }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png" width="50px" height="30px" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/556px-Visa_Inc._logo.svg.png" width="80px" height="10px" />
                        <img src="https://help.turitop.com/hc/article_attachments/360007260459/PayPal.svg.png" width="90px" height="30px" />
                    </div>
                </ModalHeader>
                <ModalCloseButton />
                <form className={classes.root} noValidate autoComplete="off">
                    <ModalBody pb={6} style={{ marginLeft: "0" }}>

                        <FormControl variant="outlined" style={{ marginLeft: "0", width: "100%", marginBottom: "15px" }} ref={initialRef}>
                            <InputLabel htmlFor="component-outlined">Numero de tarjeta </InputLabel>
                            <OutlinedInput type="number" id="component-outlined" value={name2} onChange={handleChange} label="Numero de tarjeta" required endAdornment={
                                <InputAdornment position="end">
                                    <HiLockClosed />
                                </InputAdornment>}
                            />
                        </FormControl>
                        <div style={{ display: "flex", marginLeft: "0" }}>
                            <FormControl variant="outlined" style={{ marginRight: "20px", marginBottom: "15px" }} ref={initialRef}>
                                <InputLabel htmlFor="component-outlined">MM/YY </InputLabel>
                                <OutlinedInput type="text" id="component-outlined" value={name2} onChange={handleChange} label="MM/YY" required />
                            </FormControl>
                            <FormControl variant="outlined" style={{ marginLeft: "0", marginBottom: "15px" }} ref={initialRef}>
                                <InputLabel htmlFor="component-outlined">CVV</InputLabel>
                                <OutlinedInput type="number" id="component-outlined" value={name2} onChange={handleChange} label="CVV" required endAdornment={
                                    <InputAdornment position="end">
                                        <AiOutlineQuestionCircle />
                                    </InputAdornment>}
                                />
                            </FormControl>
                        </div>
                        <FormControl variant="outlined" style={{ marginLeft: "0", width: "100%", marginBottom: "15px" }} ref={initialRef}>
                            <InputLabel htmlFor="component-outlined">Nombre titutar</InputLabel>
                            <OutlinedInput type="text" id="component-outlined" value={name2} onChange={handleChange} label="Nombre titutar" required />
                        </FormControl>
                        <FormControl variant="outlined" style={{ marginLeft: "0", width: "100%", marginBottom: "15px" }} ref={initialRef}>
                            <InputLabel htmlFor="component-outlined">CC/NIT del titular</InputLabel>
                            <OutlinedInput type="text" id="component-outlined" value={name2} onChange={handleChange} label="CC/NIT del titular" required />
                        </FormControl>
                        <FormControl variant="outlined" style={{ marginLeft: "0", width: "100%", marginBottom: "15px" }} ref={initialRef}>
                            <InputLabel htmlFor="component-outlined">Apellido de la tarjeta (opcional)</InputLabel>
                            <OutlinedInput type="text" id="component-outlined" value={name2} onChange={handleChange} label="Apellido de la tarjeta (opcional)" />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </>
    )
}

export default CreditCardModal
