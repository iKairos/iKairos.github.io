import { Button, Card, CardActions, CardContent, Chip, Grid } from "@mui/material";
import { buttonDesign } from "../../stylesheets/buttonStyles";
import { certButton, CertCard } from "../../stylesheets/cardStyles";


export default function Blogs(){
    return(
        <div className="container">
            <div className="inner1_content">
                <h1>Blogs</h1>
                <hr className="small_hr"/>
                <br/>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                    <Grid item xs={2} sm={4} md={4}>
                        <Card sx={CertCard}>
                            <CardContent>
                                <h1 className="gridHead2">
                                    Internship Experience at Philippine Space Agency
                                </h1>
                                <h4 className="highlight gridHead4" style={{lineHeight: 0}}>September 6, 2022</h4>
                            </CardContent>
                            <CardActions sx={certButton}>
                                <Button sx={buttonDesign} size="small" target="_blank" href='https://drive.google.com/file/d/1qE5w-roiOhAWSModsmr99p9j6rogRBXV/view'>
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}