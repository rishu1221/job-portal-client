import {Box, Typography, makeStyles, Card, CardContent} from "@material-ui/core";

const useStyles = makeStyles({
    info:{
        height: 'auto',
        color: '#000',
        boxShadow: '0 2px 5px 0 rgb(0 0 0 /16%), 0 2px 10px 0 rgb(0 0 0 /12%)',
        marginBottom: 20
    },
    text1:{
        padding: '5px 0 3px 10px',
        fontSize: 24,
        fontWeight: 550
    },
    text2:{
        padding: '5px 3px 3px 10px',
        fontSize: 17,
        fontWeight: 350
    },
    
})

const InfoHeader = () => {
    const classes = useStyles();
    return (
        <Card className={classes.info}>
            <CardContent>
                <Typography className={classes.text1}>Job Oriented Specialization in Data Science</Typography>
                <Typography className={classes.text2}>Find Best Jobs</Typography>
            </CardContent>
        </Card>
    );
}

export default InfoHeader;