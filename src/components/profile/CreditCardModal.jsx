import React, { useRef, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { startSaveUser } from '../../actions/userAction';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },

    },
}));

const CreditCardModal = ({ onClose }) => {

    const dispatch = useDispatch()

    const { userData } = useSelector(state => state.user)

    console.log(userData[0])

    const classes = useStyles();

    const initialRef = useRef('')
    const finalRef = useRef('')

    const numCard = useRef('')
    const validateCard = useRef('')
    const cvvCard = useRef('')
    const userNameCard = useRef('')
    const ccUser = useRef('')
    const paymentMethod = useRef('')

    const addCard = () => {

        const nuevoNumCard = numCard.current.value
        const nuevoValidateCard = validateCard.current.value
        const nuevoCvvCard = cvvCard.current.value
        const nuevoUserNameCard = userNameCard.current.value
        const nuevoCcUser = ccUser.current.value
        const nuevoPaymentMethod = paymentMethod.current.value

        const newCard = {
            paymentMethod: nuevoPaymentMethod,
            numCard: nuevoNumCard,
            validateCard: nuevoValidateCard,
            cvvCard: nuevoCvvCard,
            userNameCard: nuevoUserNameCard,
            ccUser: nuevoCcUser
        }

        userData[0].cards.push(newCard)

        const dataUser = {
            id: userData[0].id,
            document: userData[0].document,
            lastName: userData[0].lastName,
            cellPhone: userData[0].cellPhone,
            nickName: userData[0].nickName,
            email: userData[0].email,
            phone: userData[0].phone,
            name: userData[0].name,
            cards: userData[0].cards,
            addresses: userData[0].addresses
        }

        console.log(dataUser);

        dispatch(startSaveUser(dataUser))

        setTimeout(() => {
            window.location.reload()
        }, 500);
    }

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
                            <OutlinedInput type="number" inputRef={numCard} label="Numero de tarjeta" required endAdornment={
                                <InputAdornment position="end">
                                    <HiLockClosed />
                                </InputAdornment>}
                            />
                        </FormControl>
                        <div style={{ display: "flex", marginLeft: "0" }}>
                            <FormControl variant="outlined" style={{ marginRight: "20px", marginBottom: "15px" }} ref={initialRef}>
                                <InputLabel htmlFor="component-outlined">MM/YY </InputLabel>
                                <OutlinedInput type="text" inputRef={validateCard} label="MM/YY" required />
                            </FormControl>
                            <FormControl variant="outlined" style={{ marginLeft: "0", marginBottom: "15px" }} ref={initialRef}>
                                <InputLabel htmlFor="component-outlined">CVV</InputLabel>
                                <OutlinedInput type="number" inputRef={cvvCard} label="CVV" required endAdornment={
                                    <InputAdornment position="end">
                                        <AiOutlineQuestionCircle />
                                    </InputAdornment>}
                                />
                            </FormControl>
                        </div>
                        <FormControl variant="outlined" style={{ marginLeft: "0", width: "100%", marginBottom: "15px" }} ref={initialRef}>
                            <InputLabel htmlFor="component-outlined">Nombre titutar</InputLabel>
                            <OutlinedInput type="text" inputRef={userNameCard} label="Nombre titutar" required />
                        </FormControl>
                        <FormControl variant="outlined" style={{ marginLeft: "0", width: "100%", marginBottom: "15px" }} ref={initialRef}>
                            <InputLabel htmlFor="component-outlined">CC/NIT del titular</InputLabel>
                            <OutlinedInput type="text" inputRef={ccUser} label="CC/NIT del titular" required />
                        </FormControl>
                        <FormControl variant="outlined" style={{ marginLeft: "0", width: "100%", marginBottom: "15px" }} ref={initialRef}>
                            <InputLabel htmlFor="component-outlined">Apellido de la tarjeta (opcional)</InputLabel>
                            <OutlinedInput type="text" inputRef={paymentMethod} label="Apellido de la tarjeta (opcional)" />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={addCard}>
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
