import React, { useState } from 'react'

import PropTypes from 'prop-types';
import { LoadApiProducts } from '../../api/LoadApiProducts'

//Iconos
import { FaDog, FaCat } from "react-icons/fa";
import { GiHummingbird, GiRabbit, GiGecko, GiDoubleFish } from "react-icons/gi";

//Components
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

//Styles
import { makeStyles } from '@material-ui/core/styles';
import GridProductos from './GridProductos';
import { Spinner } from '@chakra-ui/react';
import styled from 'styled-components'

const Carga = styled(Spinner)`
     display:block;
     margin-left:auto;
     margin-right:auto;
`

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '80%',
        backgroundColor: theme.palette.background.paper
    },
}));

export default function TabScrollButton() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const cats = LoadApiProducts('https://sajoma.herokuapp.com/cat')
    const dogs = LoadApiProducts('https://sajoma.herokuapp.com/dog')

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    if (cats === undefined || dogs === undefined) {
        return (
            <div>
                <Carga animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Carga>
            </div>
        )
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Perros" icon={<FaDog style={{ fontSize: "20px" }} />} {...a11yProps(0)} />
                    <Tab label="Gatos" icon={<FaCat style={{ fontSize: "20px" }} />} {...a11yProps(1)} />
                    <Tab label="Pajaros" disabled icon={<GiHummingbird style={{ fontSize: "20px" }} />} {...a11yProps(2)} />
                    <Tab label="Roedores" disabled icon={<GiRabbit style={{ fontSize: "20px" }} />} {...a11yProps(3)} />
                    <Tab label="Reptiles" disabled icon={<GiGecko style={{ fontSize: "20px" }} />} {...a11yProps(4)} />
                    <Tab label="Peces" disabled icon={<GiDoubleFish style={{ fontSize: "20px" }} />} {...a11yProps(5)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <GridProductos category="Perros" data={dogs} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <GridProductos category="Gatos" data={cats} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <GridProductos category="Pajaros" data={dogs} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <GridProductos category="Roedores" data={dogs} />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <GridProductos category="Reptiles" data={dogs} />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <GridProductos category="Peces" data={dogs} />
            </TabPanel>
        </div>
    );
}
