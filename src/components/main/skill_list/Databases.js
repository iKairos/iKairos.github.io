import { Fade } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Item } from '../../misc/Item';

export default function Databases(){
    return(
        <>
            <h2>Databases</h2>
            <Fade in={true} timeout={{ enter: 400 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">SQL Server & MySQL</h1>
                        <p className="gridPar">
                            I use both SQL servers for ETL, analytics, and data engineering purposes for my projects especially in the university.
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">MongoDB</h1>
                        <p className="gridPar">
                            MongoDB is my go-to database for my web applications. I also use MongoDB as a database while working on RESTful APIs for some of 
                            my projects and web applications.
                        </p>
                    </Item>
                </Grid>
            </Grid>
            </Fade>
        </>
    )
}