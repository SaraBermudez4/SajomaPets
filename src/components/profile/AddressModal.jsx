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

const AddressModal = ({ onClose }) => {

    const dispatch = useDispatch()

    const { userData } = useSelector(state => state.user)

    console.log(userData[0])

    const classes = useStyles();

    const initialRef = useRef('')
    const finalRef = useRef('')

    const direction = useRef('')
    const typeAddress = useRef('')
    const complement = useRef('')
    const country = useRef('')
    const departament = useRef('')
    const city = useRef('')
    const neighborhood = useRef('')

    const addAddress = () => {

        const nuevoDirection = direction.current.value
        const nuevoTypeAddress = typeAddress.current.value
        const nuevoComplement = complement.current.value
        const nuevoCountry = country.current.value
        const nuevoDepartament = departament.current.value
        const nuevoCity = city.current.value
        const nuevoNeighborhood = neighborhood.current.value

        const newAddress = {
            direction: nuevoDirection,
            typeAddress: nuevoTypeAddress,
            complement: nuevoComplement,
            country: nuevoCountry,
            departament: nuevoDepartament,
            city: nuevoCity,
            neighborhood: nuevoNeighborhood
        }

        console.log(newAddress);

        userData[0].addresses.push(newAddress)

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

        dispatch(startSaveUser(dataUser))

        setTimeout(() => {
            window.location.reload()
        }, 500);
    }


    // "dirección": "Cll 87 BC 32",
    //     "tipo_domicilio": "Casa",
    //         "complemento": "int 123",
    //             "pais": "Colombia",
    //                 "departamento": "Antioquia",
    //                     "ciudad": "Medellín",
    //                         "barrio": "Belén"

    return (
        <>
            <ModalOverlay />
            <ModalContent >
                <ModalHeader style={{ textAlign: "center" }}>
                    Agregar nuevo domicilio
                </ModalHeader>
                <ModalCloseButton />
                <form className={classes.root} noValidate autoComplete="off">
                    <ModalBody pb={6} style={{ marginLeft: "0" }}>

                        <FormControl variant="outlined" style={{ marginLeft: "0", width: "100%", marginBottom: "15px" }} ref={initialRef}>
                            <InputLabel htmlFor="component-outlined">Dirección</InputLabel>
                            <OutlinedInput type="text" inputRef={direction} label="Dirección" required />
                        </FormControl>
                        <div style={{ display: "flex", marginLeft: "0" }}>
                            <FormControl variant="outlined" style={{ marginRight: "20px", marginBottom: "15px" }} ref={initialRef}>
                                <InputLabel htmlFor="component-outlined">Tipo domicilio</InputLabel>
                                <OutlinedInput type="text" inputRef={typeAddress} label="Tipo domicilio" required />
                            </FormControl>
                            <FormControl variant="outlined" style={{ marginLeft: "0", marginBottom: "15px" }} ref={initialRef}>
                                <InputLabel htmlFor="component-outlined">Complemento</InputLabel>
                                <OutlinedInput type="text" inputRef={complement} label="Complemento" required />
                            </FormControl>
                        </div>
                        <div style={{ display: "flex", marginLeft: "0" }}>
                            <FormControl variant="outlined" style={{ marginRight: "20px", marginBottom: "15px" }} ref={initialRef}>
                                <InputLabel htmlFor="component-outlined">Pais</InputLabel>
                                <OutlinedInput type="text" inputRef={country} label="Pais" required />
                            </FormControl>
                            <FormControl variant="outlined" style={{ marginLeft: "0", marginBottom: "15px" }} ref={initialRef}>
                                <InputLabel htmlFor="component-outlined">Departamento</InputLabel>
                                <OutlinedInput type="text" inputRef={departament} label="Departamento" required />
                            </FormControl>
                        </div>
                        <div style={{ display: "flex", marginLeft: "0" }}>
                            <FormControl variant="outlined" style={{ marginRight: "20px", marginBottom: "15px" }} ref={initialRef}>
                                <InputLabel htmlFor="component-outlined">Ciudad</InputLabel>
                                <OutlinedInput type="text" inputRef={city} label="Ciudad" required />
                            </FormControl>
                            <FormControl variant="outlined" style={{ marginLeft: "0", marginBottom: "15px" }} ref={initialRef}>
                                <InputLabel htmlFor="component-outlined">Barrio</InputLabel>
                                <OutlinedInput type="text" inputRef={neighborhood} label="Barrio" required />
                            </FormControl>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={addAddress}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </>
    )
}

export default AddressModal
