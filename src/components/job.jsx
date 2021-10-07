import { Card, CardContent, makeStyles, Typography, Grid, Box, Link } from "@material-ui/core";
import { HomeWork, PlayCircleOutline, MoneyOutlined, DateRangeOutlined } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    component:{
        marginBottom: 20,
        boxShadow: '0 2px 5px 0 rgb(0 0 0 /16%), 0 2px 10px 0 rgb(0 0 0 /12%)'
    },
    container:{
        padding: 8,
        paddingBottom: '4px!important'
    },
    job:{
        fontSize: 25,
        fontWeight: 700,
        padding: '3px 0 4px 10px',
        [theme.breakpoints.down('sm')]:{
            fontSize: 18
        }
    },
    company:{
        fontSize: 16,
        fontWeight: 500,
        padding: '3px 0 4px 10px'
    },
    office:{
        padding: '3px 0 4px 10px',
        fontSize: 18,
        marginTop: 20,
        fontWeight: 300
    },
    iconOffice:{
        fontSize: 15,
        fontWeight: 400
    },
    grid:{
        padding: '3px 0 4px 8px',
        marginTop: 20,
        display: 'flex'
    },
    grid1:{
        display: 'flex'
    },
    grid2:{
        display: 'flex'
    },
    grid3:{
        display: 'flex',
        [theme.breakpoints.down('xs', 'sm')]:{
            marginTop: 10
        }
    },
    gridData:{
        display: 'flex',
        flexDirection: 'column'
    }
}));

const Job = ({job}) => {

    const classes = useStyles();

    return (
        <Card className={classes.component}>
            <CardContent className={classes.container}>
                <Typography className={classes.job}>job.jobname</Typography>
                <Typography className={classes.company}>job.compName</Typography>
                <Typography className={classes.office}><HomeWork className={classes.iconOffice} /> Remote</Typography>
                <Grid container className={classes.grid}>
                    <Grid item className={classes.grid1} lg={4} md={4} sm={6} xs={6}>
                        <PlayCircleOutline />
                        <Box className={classes.gridData}>
                            <Typography>Start Date</Typography>
                            <Typography>job.start_date</Typography>
                        </Box>
                    </Grid>
                    <Grid item className={classes.grid2} lg={4} md={4} sm={6} xs={6}>
                        <MoneyOutlined />
                        <Box className={classes.gridData}>
                            <Typography>CTC</Typography>
                            <Typography>job.salary</Typography>
                        </Box>
                    </Grid>
                    <Grid item className={classes.grid3} lg={4} md={4} sm={12} xs={12}>
                        <DateRangeOutlined />
                        <Box className={classes.gridData}>
                            <Typography>Last Date</Typography>
                            <Typography>job.last_date</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" className={classes.grid}>
                    <Grid item>
                        Fresher Job
                    </Grid>
                    <Grid item>
                        <Link href="#" underline="none">
                            {"View Details"}
                        </Link>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Job;
