import React, { useState } from "react";

import PropTypes from "prop-types";
import { LoadApiProducts } from "../../api/LoadApiProducts";

//Iconos
import { FaDog, FaCat } from "react-icons/fa";
import { GiHummingbird, GiRabbit, GiGecko, GiDoubleFish } from "react-icons/gi";

//Components
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

//Styles
import { makeStyles } from "@material-ui/core/styles";
import { Spinner } from "@chakra-ui/react";
import styled from "styled-components";
import ProductTabs from "../../components/home/ProductTabs";

const Carga = styled(Spinner)`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const StyledRoot = styled.div`
  @media (max-width: 780px) {
    padding-top: 16%;
    padding-left: 13%;
  }
`;

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
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    paddingLeft: "6%",
    paddingTop: "6%",
    width: "100%",
  },
}));
const Food = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const cats = LoadApiProducts("https://sajoma.herokuapp.com/cat");
  const dogs = LoadApiProducts("https://sajoma.herokuapp.com/dog");

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
    );
  }
  console.log(cats);
  return (
    <StyledRoot className={classes.root}>
      <h1>Food</h1>
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
          <Tab
            label="Perros"
            icon={<FaDog style={{ fontSize: "20px" }} />}
            {...a11yProps(0)}
          />
          <Tab
            label="Gatos"
            icon={<FaCat style={{ fontSize: "20px" }} />}
            {...a11yProps(1)}
          />
          <Tab
            label="Pajaros"
            disabled
            icon={<GiHummingbird style={{ fontSize: "20px" }} />}
            {...a11yProps(2)}
          />
          <Tab
            label="Roedores"
            disabled
            icon={<GiRabbit style={{ fontSize: "20px" }} />}
            {...a11yProps(3)}
          />
          <Tab
            label="Reptiles"
            disabled
            icon={<GiGecko style={{ fontSize: "20px" }} />}
            {...a11yProps(4)}
          />
          <Tab
            label="Peces"
            disabled
            icon={<GiDoubleFish style={{ fontSize: "20px" }} />}
            {...a11yProps(5)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProductTabs category="Perros" data={dogs} tipo="alimento" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProductTabs category="Gatos" data={cats} tipo="alimento" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProductTabs category="Pajaros" data={dogs} tipo="alimento" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProductTabs category="Roedores" data={dogs} tipo="alimento" />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ProductTabs category="Reptiles" data={dogs} tipo="alimento" />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <ProductTabs category="Peces" data={dogs} tipo="alimento" />
      </TabPanel>
    </StyledRoot>
  );
};

export default Food;
