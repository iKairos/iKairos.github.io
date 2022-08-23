import { Fade } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Item } from '../../misc/Item';

export default function ProgrammingLanguages(){
    return(
        <>
            <h2>Programming Languages</h2>
            <Fade in={true} timeout={{ enter: 400 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">Python</h1>
                        <p className="gridPar">
                            Python is my most used language through out my career as it empowers me to do efficient 
                            tasks on <span className="highlight">Data Science</span>, <span className="highlight"> 
                            Analysis</span>, and <span className="highlight">Engineering</span>. Most of my projects 
                            are written in Python.
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">JavaScript</h1>
                        <p className="gridPar">
                            The websites I designed and programmed are all done using NodeJS alongside web 
                            frameworks / libraries such as <span className="highlight">React</span>. I also 
                            have experience working with <span className="highlight">RESTful APIs</span> for 
                            web applications.
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">Java</h1>
                        <p className="gridPar">
                            I seldom program with Java but I have worked with it for university courses and projects. My last project with Java was 
                            a desktop application for Water Monitor equipped with Machine Learning capabilities.
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">C#</h1>
                        <p className="gridPar">
                            I seldom use C# in my career but I have experience working with it during my residency in the university. The last project 
                            I was involved in using C# was a desktop antivirus program for a university project.
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">C++</h1>
                        <p className="gridPar">
                            I used C++ on completing projects in the university. I only use C++ when completing commissioned works and projects.
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                        <h1 className="gridHead1">C</h1>
                        <p className="gridPar">
                            C is one of my introductory programming language in the university. I did a couple of university projects and practical tests with C being
                            the language required.
                        </p>
                    </Item>
                </Grid>
            </Grid>
            </Fade>
        </>
    )
}