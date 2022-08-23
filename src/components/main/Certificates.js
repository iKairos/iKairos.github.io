import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { buttonDesign} from '../../stylesheets/buttonStyles';
import { Chip } from '@mui/material';

const CertCard = {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 3,
    //overflowY: 'auto',
    color: '#fff',
    height: 250,
    '&:hover': {
        transition: 'all 0.1s linear',
        backgroundColor: '#424549',
        color: '#fff',
    }
};

export default function Certificates(){
    return(
        <div className="container">
            <div className="inner1_content">
                <h1>Certificates</h1>
                <hr className="small_hr"/>
                <br/>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2} sm={4} md={4}>
                        <Card sx={CertCard}>
                            <CardContent>
                                <h1 className="gridHead2">
                                    Data Visualization Using Tableau and Python
                                </h1>
                                <Chip style={{color: '#fff'}} label="Project SPARTA PH" variant="outlined" />
                            </CardContent>
                            <CardActions>
                                <Button sx={buttonDesign} size="small" target="_blank" href='https://drive.google.com/file/d/1qE5w-roiOhAWSModsmr99p9j6rogRBXV/view'>
                                    See Certificate
                                </Button>
                                <Button sx={buttonDesign} size="small" target="_blank" href='https://coursebank.ph/sparta/'>
                                    Take this too
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Card sx={CertCard}>
                            <CardContent>
                                <h1 className="gridHead2">
                                    Computing Microspecialization Pathway
                                </h1>
                                <Chip style={{color: '#fff'}} label="Project SPARTA PH" variant="outlined" />
                            </CardContent>
                            <CardActions>
                                <Button sx={buttonDesign} size="small" target="_blank" href='https://drive.google.com/file/d/1uxgcC0bzdHgdJ1RiRCx0HrgdWKN2YlqG/view'>
                                    See Certificate
                                </Button>
                                <Button sx={buttonDesign} size="small" target="_blank" href='https://coursebank.ph/sparta/'>
                                    Take this too
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Card sx={CertCard}>
                            <CardContent>
                                <h1 className="gridHead2">
                                    Essential Excel Skills of Data Preparation and Analysis
                                </h1>
                                <Chip style={{color: '#fff'}} label="Project SPARTA PH" variant="outlined" />
                            </CardContent>
                            <CardActions>
                                <Button sx={buttonDesign} size="small" target="_blank" href='https://drive.google.com/file/d/1512u2e9QNaM7hUZBWFEo8jYpS82pzEwH/view'>
                                    See Certificate
                                </Button>
                                <Button sx={buttonDesign} size="small" target="_blank" href='https://coursebank.ph/sparta/'>
                                    Take this too
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Card sx={CertCard}>
                            <CardContent>
                                <h1 className="gridHead2">
                                    Introduction to MongoDB Charts
                                </h1>
                                <Chip style={{color: '#fff'}} label="MongoDB University" variant="outlined" />
                            </CardContent>
                            <CardActions>
                                <Button sx={buttonDesign} size="small" target="_blank" href='https://drive.google.com/file/d/1NnGWXpoZUBlXF9YOsIVv2WqitA4GBECj/view'>
                                    See Certificate
                                </Button>
                                <Button sx={buttonDesign} size="small" target="_blank" href='https://university.mongodb.com/'>
                                    Take this too
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Card sx={CertCard}>
                            <CardContent>
                                <h1 className="gridHead2">
                                    SQL for Business Users
                                </h1>
                                <Chip style={{color: '#fff'}} label="Project SPARTA PH" variant="outlined" />
                            </CardContent>
                            <CardActions>
                                <Button sx={buttonDesign} size="small" target="_blank" href='https://drive.google.com/file/d/14S3Gh0i17UMuyQ9eSn77l9RYIKgQj8gF/view'>
                                    See Certificate
                                </Button>
                                <Button sx={buttonDesign} size="small" target="_blank" href='https://coursebank.ph/sparta/'>
                                    Take this too
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Card sx={CertCard}>
                            <CardContent>
                                <h1 className="gridHead2">
                                    Computing in Python
                                </h1>
                                <Chip style={{color: '#fff'}} label="Project SPARTA PH" variant="outlined" />
                            </CardContent>
                            <CardActions>
                                <Button sx={buttonDesign} size="small" target="_blank" href='https://drive.google.com/file/d/1PdqgNXax9aOexiolv2LDf6GhlznAlpyc/view'>
                                    See Certificate
                                </Button>
                                <Button sx={buttonDesign} size="small" target="_blank" href='https://coursebank.ph/sparta/'>
                                    Take this too
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Card sx={CertCard}>
                            <CardContent>
                                <h1 className="gridHead2">
                                    Getting Grounded on Analytics
                                </h1>
                                <Chip style={{color: '#fff'}} label="Project SPARTA PH" variant="outlined" />
                            </CardContent>
                            <CardActions>
                                <Button sx={buttonDesign} size="small" target="_blank" href='https://drive.google.com/file/d/1ASci0ryaY-gIJEtVGjHXC_CUiohneIbt/view'>
                                    See Certificate
                                </Button>
                                <Button sx={buttonDesign} size="small" target="_blank" href='https://coursebank.ph/sparta/'>
                                    Take this too
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <p>Total Training Hours: <b>47 hours</b></p>
            </div>
        </div>
    )
}