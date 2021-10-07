import { Box, makeStyles } from "@material-ui/core";
import "./App.css";
import Header from "./components/header.jsx";
import InfoHeader from "./components/infoHeader";
import Jobs from "./components/jobs";

const useStyles = makeStyles(theme=>({
  container: {
    marginTop: 110,
    width: "50%",
    margin: "0 auto",
    alignItems: "center",
    padding: 10,
    [theme.breakpoints.down('sm')]:{
      width:'95%'
    },
    [theme.breakpoints.down('md')]:{
      width:'70%'
    },
    [theme.breakpoints.down('xs')]:{
      width: "95%"
    }
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Box className={classes.container}>
        <InfoHeader />
        <Jobs />
      </Box>
    </Box>
  );
}

export default App;
