import { Fade } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Item } from '../../misc/Item';

export default function CloudServers(){
    return(
        <>
            <h2>Cloud Servers</h2>
            <Fade in={true} timeout={{ enter: 400 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">Amazon Web Services</h1>
                        <p className="gridPar">
                            I used AWS for my first hosted static website for my Discord bot way back in 2018. I used the E3 instances and 
                            static website hosting services of AWS for my discord bot.
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">Microsoft Azure</h1>
                        <p className="gridPar">
                            I used Microsoft Azure to setup the hosting environment of our thesis output in the university. We used the API and 
                            web application hosting services of Azure.
                        </p>
                    </Item>
                </Grid>
            </Grid>
            </Fade>
        </>
    )
}