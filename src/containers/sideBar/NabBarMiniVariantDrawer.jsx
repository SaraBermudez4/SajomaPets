import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

//Components
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

//Icons
import { GoChevronLeft, GoChevronRight, GoSearch } from "react-icons/go";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import { ImHome3 } from "react-icons/im";
import { MdPets } from "react-icons/md";
import { GiOpenedFoodCan, GiHamburgerMenu } from "react-icons/gi";
import { TiScissors } from "react-icons/ti";
import { IoIosTennisball, IoMdHeart } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";

import TabScrollButton from "../../components/home/TabScrollButton.jsx";
import { fade, InputBase } from '@material-ui/core';

import styled from 'styled-components'
import '../../styles/style.css'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/authAction.js';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background: "#eaecef",
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 10,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        display: 'flex'
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#49519A"
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
        color: "#49519A",
        borderRadius: "20px",
        background: "#49519a38"
    },
}));

const StyledLogo = styled.img`
    @media (min-width: 768px) {
        width: 20%;
    }
`

const NabBarMiniVariantDrawer = () => {

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)

    console.log(auth);

    const handleLogout = () => {
        dispatch(startLogout())
    }

    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [isLoogedIn, setIsLoogedIn] = React.useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                setIsLoogedIn(true)
            } else {
                setIsLoogedIn(false)
            }
        })
    }, [dispatch])

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <GiHamburgerMenu />
                    </IconButton>
                    {/* <Typography variant="h6" noWrap>
                        Sajoma Pets
                    </Typography> */}
                    <StyledLogo src="https://i.ibb.co/1sDxzFT/LOGASO-NO-JODA-4.png" width="45%" />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <GoSearch />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <GoChevronRight /> : <GoChevronLeft />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button key="Home">
                        <ListItemIcon> <ImHome3 style={{ fontSize: "20px" }} /> </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button key="Search">
                        <ListItemIcon> <FaSearch style={{ fontSize: "20px" }} /> </ListItemIcon>
                        <ListItemText primary="Search" />
                    </ListItem>
                    <ListItem button key="Category Pets">
                        <ListItemIcon> <MdPets style={{ fontSize: "20px" }} /> </ListItemIcon>
                        <ListItemText primary="Category Pets" />
                    </ListItem>
                    <ListItem button key="Food">
                        <ListItemIcon> <GiOpenedFoodCan style={{ fontSize: "20px" }} /> </ListItemIcon>
                        <ListItemText primary="Food" />
                    </ListItem>
                    <ListItem button key="Accessories">
                        <ListItemIcon> <TiScissors style={{ fontSize: "20px" }} /> </ListItemIcon>
                        <ListItemText primary="Accessories" />
                    </ListItem>
                    <ListItem button key="Toys">
                        <ListItemIcon> <IoIosTennisball style={{ fontSize: "20px" }} /> </ListItemIcon>
                        <ListItemText primary="Toys" />
                    </ListItem>

                </List>
                <Divider />
                <List>
                    <ListItem button key="Favorite">
                        <ListItemIcon> <IoMdHeart style={{ fontSize: "20px" }} /> </ListItemIcon>
                        <ListItemText primary="Favorite" />
                    </ListItem>
                    <ListItem button key="Cart">
                        <ListItemIcon> <FaShoppingCart style={{ fontSize: "20px" }} /> </ListItemIcon>
                        <ListItemText primary="Cart" />
                    </ListItem>
                    <Link to="/profile">
                        <ListItem button key="Profile">
                            <ListItemIcon> <FaUser style={{ fontSize: "20px" }} /> </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItem>
                    </Link>
                    {
                        !isLoogedIn
                            ?
                            <Link to="/auth/login">
                                <ListItem button key="Login">
                                    <ListItemIcon> <RiLogoutBoxLine style={{ fontSize: "20px" }} /> </ListItemIcon>
                                    <ListItemText primary="Login" />
                                </ListItem>
                            </Link>
                            :
                            <ListItem button key="Logout" display="none" onClick={handleLogout}>
                                <ListItemIcon> <RiLogoutBoxLine style={{ fontSize: "20px" }} /> </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItem>
                    }
                    {/* {
                        (auth)
                            ?
                            <ListItem button key="Login" display="none">
                                <ListItemIcon> <RiLogoutBoxLine style={{ fontSize: "20px" }} /> </ListItemIcon>
                                <ListItemText primary="Login" />
                            </ListItem>
                            :
                            <ListItem button key="Logout" display="none">
                                <ListItemIcon> <RiLogoutBoxLine style={{ fontSize: "20px" }} /> </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItem>
                    } */}

                </List>
            </Drawer>
            {/* <main className={classes.content}>
                <div className={classes.toolbar} />
                <TabScrollButton />
            </main> */}
            <TabScrollButton />

        </div>

    );
}

export default NabBarMiniVariantDrawer
