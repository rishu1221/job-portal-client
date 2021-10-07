import {AppBar, Toolbar, makeStyles, Typography, Box} from "@material-ui/core";

const useStyles = makeStyles({
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
    login:{
        float: 'right'
    }
});

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <Typography className={classes.logo}>Jobber</Typography>
                <Box>
                    <Typography>Login</Typography>
                    <Typography>Sign Up</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;