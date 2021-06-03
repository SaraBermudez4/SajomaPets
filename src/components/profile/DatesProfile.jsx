import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import { Heading } from '@chakra-ui/layout';
import { Button, Divider, FormControl, FormControlLabel, FormHelperText, FormLabel, IconButton, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@material-ui/core';
import { IoMdAddCircle } from "react-icons/io";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '350px',
        },
        textAlign:"center",
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
}));

const DatesProfile = () => {
    const classes = useStyles();
    const { name } = useSelector(state => state.auth)

    const [tarjeta, setTarjeta] = React.useState('');
    const [domicilio, setDomicilio] = React.useState('');

    const handleChangeTarjeta = (e) => {
        setTarjeta(e.target.value);
    };
    const handleChangeDomicilio = (e) => {
        setDomicilio(e.target.value);
    };

    // const [tarjeta2, setTarjeta2] = React.useState('');

    // const handleChangeTarjeta2 = (e) => {
    //     setTarjeta2(e.target.value);
    // };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Heading as="h4" size="md">Datos de la cuenta</Heading>
            <TextField id="outlined-basic" label='NickName' variant="outlined" required />
            <TextField id="outlined-basic" label='Email' variant="outlined" required />
            <TextField id="outlined-basic" label='Password' variant="outlined" InputProps={{
                readOnly: true,
            }} />
            <Divider />
            <Heading as="h4" size="md">Datos personales</Heading>
            <TextField id="outlined-basic" label={name} variant="outlined" required disabled />
            <TextField id="outlined-basic" label='LastName' variant="outlined" required disabled />
            <TextField id="outlined-basic" label='Document' variant="outlined" InputProps={{
                readOnly: true,
            }} />
            <TextField id="outlined-basic" label='PhoneNumber' variant="outlined" InputProps={{
                readOnly: true,
            }} />
            <TextField id="outlined-basic" label='PhoneNumber2' variant="outlined" InputProps={{
                readOnly: true,
            }} />
            <Divider />
            <Heading as="h4" size="md">Tarjetas</Heading>
            {/* <div>
                <FormControl className={classes.formControl}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        Tarjeta
                </InputLabel>
                    <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={tarjeta}
                        onChange={handleChangeTarjeta}
                        displayEmpty
                        className={classes.selectEmpty}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={123456789}>123456789</MenuItem>
                        <MenuItem value={98765432}>98765432</MenuItem>
                        <MenuItem value={657483932}>657483932</MenuItem>
                    </Select>
                </FormControl>
                <IconButton color="primary" aria-label="add tarjet card">
                    <IoMdAddCircle />
                </IconButton>
            </div> */}
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Tarjetas</FormLabel>
                    <RadioGroup aria-label="tarjeta" name="tarjeta1" value={tarjeta} onChange={handleChangeTarjeta}>
                        <FormControlLabel value="123456789" control={<Radio />} label="123456789" />
                        <FormControlLabel value="234567891" control={<Radio />} label="234567891" />
                        <FormControlLabel value="345678912" control={<Radio />} label="345678912" />
                        <FormControlLabel value="456789123" control={<Radio />} label="456789123" />
                    </RadioGroup>
                </FormControl>
            </div>
            <Divider />
            <Heading as="h4" size="md">Domicilios</Heading>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Domicilios</FormLabel>
                    <RadioGroup aria-label="domicilio" name="domicilio1" value={domicilio} onChange={handleChangeDomicilio}>
                        <FormControlLabel value="Medellín" control={<Radio />} label="Medellín" />
                        <FormControlLabel value="Bogotá" control={<Radio />} label="Bogotá" />
                        <FormControlLabel value="Cll 78 CA 87" control={<Radio />} label="Cll 78 CA 87" />
                        <FormControlLabel value="Unidad recidencial" control={<Radio />} label="Unidad recidencial" />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* <div>
                <FormControl className={classes.formControl}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        Domicilio
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={domicilio}
                        onChange={handleChangeDomicilio}
                        displayEmpty
                        className={classes.selectEmpty}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Cll 78 CA 98">Cll 78 CA 98</MenuItem>
                        <MenuItem value="Medellín">Medellín</MenuItem>
                        <MenuItem value="Bogot">Bogotá</MenuItem>
                    </Select>
                </FormControl>
                <IconButton color="primary" aria-label="add tarjet card">
                    <IoMdAddCircle />
                </IconButton>
            </div> */}
        </form>

    )
}

export default DatesProfile
