import {AppBar, Toolbar, makeStyles, Typography, Box} from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    header:{
        background: '#fff',
        height: 60,
        
    },
    logo:{
        height: 60,
        margin: '15px',
        color: '#000',
        fontSize: 30
    },
    header1:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    accounts:{
        color: '#000',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        fontSize: 15,
        fontWeight: 600
    },
    login:{
        padding: 5
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.header}>
            <Toolbar className={classes.header1}>
                <Typography className={classes.logo}>Jobber</Typography>
                <Box className={classes.accounts}>
                    <Typography className={classes.login}>
                        <a href="#" style={{textDecoration: 'none'}}>Login</a>
                    </Typography>
                    <Typography className={classes.login}>
                        <a href="#" style={{textDecoration: 'none'}}>Register</a>
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;