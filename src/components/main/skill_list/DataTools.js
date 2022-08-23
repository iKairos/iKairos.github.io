import { Fade } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Item } from '../../misc/Item';

export default function DataTools(){
    return(
        <>
            <h2>Tools for Data Science, Analytics, and Engineering</h2>
            <Fade in={true} timeout={{ enter: 400 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">Jupyter Notebook</h1>
                        <p className="gridPar">
                            Doing stuff with data in Jupyter Notebook enables me to annotate everything I do and share it with other 
                            stakeholders or developers. It is also incredibly fast and makes my workflow efficient for my analytics 
                            tasks everyday.
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">Pandas and GeoPandas</h1>
                        <p className="gridPar">
                            Pandas is my go-to data processing, engineering, wrangling, and analysis platform especially when I use Python. Most of my 
                            ETL tasks are done with Pandas combined with Jupyter Notebook. With <span className='highlight'>GeoPandas</span>, I can
                            transform my raw data into geospatial data by geocoding rows of data for geospatial analysis purposes.
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">Tableau</h1>
                        <p className="gridPar">
                            I encountered Tableau when I took a certification course for it in Coursebank. I am adept in using Tableau and is having fun
                            doing visualization with it alongside doing data dashboards and data storytelling.
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">Matplotlib</h1>
                        <p className="gridPar">
                            Matplotlib is my easiest way of generating visualizations for the data that I am analyzing and processing. I use it often for fast 
                            delivery of data storytelling and analytics reports. It is powerful to use Matplotlib in combination with Jupyter Notebook.
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">MongoDB Charts</h1>
                        <p className="gridPar">
                            MongoDB charts is a built-in dashboard and visualization creation of MongoDB. I use MongoDB charts for data dashboards and storytelling
                            with data that are connected to a MongoDB database.
                        </p>
                    </Item>
                </Grid>
            </Grid>
            </Fade>
        </>
    )
}