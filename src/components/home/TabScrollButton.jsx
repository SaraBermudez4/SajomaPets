import React from 'react'

import PropTypes from 'prop-types';

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
        backgroundColor: theme.palette.background.paper,
        marginTop: "15px" 
    },
}));

export default function TabScrollButton() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                    <Tab label="Pajaros" icon={<GiHummingbird style={{ fontSize: "20px" }} />} {...a11yProps(2)} />
                    <Tab label="Roedores" disabled icon={<GiRabbit style={{ fontSize: "20px" }} />} {...a11yProps(3)} />
                    <Tab label="Reptiles" disabled icon={<GiGecko style={{ fontSize: "20px" }} />} {...a11yProps(4)} />
                    <Tab label="Peces" disabled icon={<GiDoubleFish style={{ fontSize: "20px" }} />} {...a11yProps(5)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <GridProductos props="Perros" />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <GridProductos props="Gatos" />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <GridProductos props="Pajaros" />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <GridProductos props="Roedores" />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <GridProductos props="Reptiles" />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <GridProductos props="Peces" />
            </TabPanel>
        </div>
    );
}
