import { Fade } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Item } from '../../misc/Item';

export default function ScientificComputing(){
    return(
        <>
            <h2>Scientific Computing</h2>
            <Fade in={true} timeout={{ enter: 400 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">NumPy</h1>
                        <p className="gridPar">
                            I often use NumPy in creating mathematical formulas and functions to achieve specific tasks like machine learning model generation, data 
                            analysis, and other applications.
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">SciPy</h1>
                        <p className="gridPar">
                            SciPy gets the job done when it comes to more in-depth scientific computing topics like signal processing and other 
                            math intensive tasks.
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">Sklearn</h1>
                        <p className="gridPar">
                            Sklearn is my go-to machine learning model generation library for analytics, prediction, forecasting tasks for specific 
                            applications.
                        </p>
                    </Item>
                </Grid>
            </Grid>
            </Fade>
        </>
    )
}