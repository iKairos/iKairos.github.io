import { Fade } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Item } from '../../misc/Item';


export default function DevWorkstations(){
    return(
        <>
            <h2>Development Workstations</h2>
            <Fade in={true} timeout={{ enter: 400 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">VS Code</h1>
                        <p className="gridPar">
                            Visual Studio Code is my go-to code editor for most of my tasks. Being a lightweight, customizable, 
                            and multifunctional code editor, VS Code was my home for most programming and development tasks I do. 
                            I also do data processing, engineering, and visualization here with their built-in Jupyter Notebook with their Python package.
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">Visual Studio</h1>
                        <p className="gridPar">
                            I seldom use VS Studio but trust me I'm familiar with it.
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">IntelliJ</h1>
                        <p className="gridPar">
                            I often use IntelliJ for my Java projects when I was still in the university. 
                            I haven't seen this thing for a long time but I'm still familiar with it.
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">Netbeans</h1>
                        <p className="gridPar">
                            Every freshman/sophomore who encounters Java for the 
                            first time uses this. Haven't seen Netbeans for ages but I'm still familiar with it.
                        </p>
                    </Item>
                </Grid>
            </Grid>
            </Fade>
        </>
    )
}