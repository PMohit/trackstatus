import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import styles from './Cards.module.css'

const Cards = (props) => {
    console.log(props);
    return(
        <div className={styles.container}>
                <Grid container spacing={3} justify="center">
                       <Grid item component={Card}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>Infected</Typography>
                                <Typography varaint="h5" >Real Data</Typography>
                                <Typography color="textSecondary" >Real Date</Typography>
                                <Typography varaint="body2" >Number of active cases</Typography>
                            </CardContent>
                       </Grid>
                       <Grid item component={Card}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                                <Typography varaint="h5" >Real Data</Typography>
                                <Typography color="textSecondary" >Real Date</Typography>
                                <Typography varaint="body2" >Number of recovires </Typography>
                            </CardContent>
                       </Grid>
                       <Grid item component={Card}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                                <Typography varaint="h5" >Real Data</Typography>
                                <Typography color="textSecondary" >Real Date</Typography>
                                <Typography varaint="body2" >Number of deaths </Typography>
                            </CardContent>
                       </Grid>

                </Grid>

        </div>

        
    )
}
export default Cards;