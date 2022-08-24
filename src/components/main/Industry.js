import { Avatar, Chip } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Item } from '../misc/Item';
import philsa from '../../static/images/PhilSA.png'
import algo from '../../static/images/algofilipino.png'

export default function Industry(){
    return(
        <div className="container">
            <div className="inner1_content">
                <h1>Industry Experience</h1>
                <hr className="small_hr"/>
                <br/>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2} sm={4} md={4}>
                        <Item style={{height: '300px'}}>
                            <h1 className="gridHead2">Data Analyst</h1>
                            <h4 className="highlight gridHead4" style={{lineHeight: 0}}> July - August 2022</h4>
                            <Chip style={{color: '#fff'}} label="Go InnoV8 Inc." variant="outlined" />
                            <p className="gridPar2">
                                Responsible for simulating different scenarios based on data. Gather, clean, and visualize data 
                                from databases to generate business insights and imperatives. 
                                Create reports based on data analysis to be presented to the executives. 
                                Generate database schema for NoSQL databases for new data structures.
                            </p>
                        </Item>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Item style={{height: '300px'}}>
                            <h1 className="gridHead2">Data Analysis Intern</h1>
                            <h4 className="highlight gridHead4" style={{lineHeight: 0}}> March - July 2022</h4>
                            <Chip style={{color: '#fff'}} label="Go InnoV8 Inc." variant="outlined" />
                            <p className="gridPar2">
                                Responsible for simulating different scenarios based on data. Gather, clean, and visualize data 
                                from databases to generate business insights and imperatives. 
                                Create reports based on data analysis to be presented to the executives. 
                                Generate database schema for NoSQL databases for new data structures.
                            </p>
                        </Item>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Item style={{height: '300px'}}>
                            <h1 className="gridHead2">Space Data Mobilization and Applications Intern</h1>
                            <h4 className="highlight gridHead4" style={{lineHeight: 0}}> April - July 2022</h4>
                            <Chip avatar={<Avatar src={philsa} />} style={{color: '#fff'}} label="Philippine Space Agency" variant="outlined" />
                            <p className="gridPar2">
                                Responsible for digitization tasks of satellite imagery for feature extraction as 
                                training data for classification of different classes. 
                                Handles training and creation of Artificial Intelligence models for image classification of satellite images.
                                Maps disaster aftermaths and flooding using SAR and optical imageries. Geocodes datasets for geoinformatics use. 
                                Assisted in the development a newly revampled Space Data Dashboard using React and GeoDjango.
                            </p>
                        </Item>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Item style={{height: '300px'}}>
                            <h1 className="gridHead2">Program Coordinator</h1>
                            <h4 className="highlight gridHead4" style={{lineHeight: 0}}> March 2021 - May 2021</h4>
                            <Chip avatar={<Avatar src={algo} />} style={{color: '#fff'}} label="Algo Filipino" variant="outlined" />
                            <p className="gridPar2">
                                Responsible for the creation, 
                                planning, and execution of organization programs about technology. 
                                Spearheads mitigation of all possible circumstances that might happen before, 
                                during, and after an organization event.
                            </p>
                        </Item>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Item style={{height: '300px'}}>
                            <h1 className="gridHead2">Freelance Writer</h1>
                            <h4 className="highlight gridHead4" style={{lineHeight: 0}}> May 2018 - January 2022</h4>
                            <Chip style={{color: '#fff'}} label="Livingston Research" variant="outlined" />
                            <p className="gridPar2">
                                - Developed reports and papers <br/>
                                - Wrote essays and academic papers <br/>
                                - Wrote resumes and CVs
                            </p>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}