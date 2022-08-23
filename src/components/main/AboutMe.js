import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import MapIcon from '@mui/icons-material/Map';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import { Link } from 'react-router-dom';
import covidmap from '../../static/images/Manila COVID Active Cases (July - August).gif'
import floodmap from '../../static/images/Agusan del Sur - Bah-bah-Talacogon Road - Typhoon Odette.png'
import phmap from '../../static/images/PHMAP.png'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ProgrammingLanguages from './skill_list/ProgrammingLanguages';
import { useState } from 'react';
import DevWorkstations from './skill_list/DevWorkstations';
import DataTools from './skill_list/DataTools';
import ScientificComputing from './skill_list/ScientificComputing';
import Databases from './skill_list/Databases';
import CloudServers from './skill_list/CloudServers';
import { buttonDesign, buttonDesignActive } from '../../stylesheets/buttonStyles';
import { Grid } from '@mui/material';
import { Item } from '../misc/Item';
import FunctionsIcon from '@mui/icons-material/Functions';
import SatelliteIcon from '@mui/icons-material/Satellite';

export default function AboutMe(){
    const [skillPage, setSkillPage] = useState('1');

    const skillsMenu = [
        <Button sx={skillPage === '1' ? buttonDesignActive : buttonDesign} onClick={x => setSkillPage('1')} key="1">Programming Languages</Button>,
        <Button sx={skillPage === '2' ? buttonDesignActive : buttonDesign} onClick={x => setSkillPage('2')} key="2">IDEs & Editors</Button>,
        <Button sx={skillPage === '3' ? buttonDesignActive : buttonDesign} onClick={x => setSkillPage('3')} key="3">Data Tools</Button>,
        <Button sx={skillPage === '4' ? buttonDesignActive : buttonDesign} onClick={x => setSkillPage('4')} key="4">Scientific Computing</Button>,
        <Button sx={skillPage === '5' ? buttonDesignActive : buttonDesign} onClick={x => setSkillPage('5')} key="5">Databases</Button>,
        <Button sx={skillPage === '6' ? buttonDesignActive : buttonDesign} onClick={x => setSkillPage('6')} key="6">Cloud Servers</Button>,
    ];

    return(
        <div className="container">
            <div className="inner1_content">
                <h1>Hello, it's me JC!</h1>
                <hr className="small_hr"/>
                <br/>
                <p className='parMain'>
                    I'm a <span className="highlight">Data Analyst</span>, <span className="highlight">GIS Enthusiast</span>, 
                    and a <span className="highlight">Space Science Enthusiast</span> from the Philippines exploring the world of Data Science,
                    Natural Sciences, and Artificial Intelligence. I love transforming data into something that would give information that would be 
                    of help to humanity.
                </p>

                <p className='parMain'>
                    My main motivation is to <span className="highlight">leverage data</span> to produce substantial information that will be of help to researchers or
                    even the everyday people. I am also moved by <span className="highlight">analyzing space data</span> to study the Earth from computers (satellites)
                    orbiting around us above.
                </p>

                <p className='parMain'>
                    If you want to collaborate or work with me on certain projects, you can contact me by going to the contacts page or 
                    just <Link className="noDecor highlight" to='/contact'>click me</Link>.
                </p>

                <p style={{fontSize: '10px'}}><i>Please bear with me. I'm bad in design and web development :))</i></p>

                <h1>Fields of Interest</h1>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2} sm={4} md={4}>
                        <Item>
                            <h1 className="gridHead1"><DataThresholdingIcon sx={{fontSize: 100, color:'rgb(117, 154, 255)'}}/></h1>
                            <h3>
                            Data Science, Analysis, and Engineering
                            </h3>
                        </Item>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Item>
                            <h1 className="gridHead1"><MapIcon sx={{fontSize: 100, color:'rgb(117, 154, 255)'}}/></h1>
                            <h3>Geographic Information Systems</h3>
                        </Item>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Item>
                            <h1 className="gridHead1"><SmartToyIcon sx={{fontSize: 100, color:'rgb(117, 154, 255)'}}/></h1>
                            <h3>Artificial Intelligence & Machine Learning</h3>
                        </Item>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Item>
                            <h1 className="gridHead1"><SatelliteAltIcon sx={{fontSize: 100, color:'rgb(117, 154, 255)'}}/></h1>
                            <h3>Space Sciences & Astronomy</h3>
                        </Item>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Item>
                            <h1 className="gridHead1"><FunctionsIcon sx={{fontSize: 100, color:'rgb(117, 154, 255)'}}/></h1>
                            <h3>Computational Science</h3>
                        </Item>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Item>
                            <h1 className="gridHead1"><SatelliteIcon sx={{fontSize: 100, color:'rgb(117, 154, 255)'}}/></h1>
                            <h3>Remote Sensing</h3>
                        </Item>
                    </Grid>
                </Grid>
            </div>
            <div className="inner1_content">
                <h1>Skills and What I <strike>Can</strike> Do</h1>
                <div className='skillsBtnGrpOrig'>
                    <ButtonGroup>
                        {skillsMenu}
                    </ButtonGroup>
                </div>
                <div className='skillsBtnGrpPhone'>
                    <ButtonGroup orientation="vertical">
                        {skillsMenu}
                    </ButtonGroup>
                </div>
                {
                    skillPage === '1' ? <ProgrammingLanguages/> :
                    skillPage === '2' ? <DevWorkstations/> :
                    skillPage === '3' ? <DataTools/> :
                    skillPage === '4' ? <ScientificComputing/> :
                    skillPage === '5' ? <Databases/> :
                    skillPage === '6' ? <CloudServers/> :
                    null
                }
            </div>
            <div className="whiteSection">
                <div className="whiteSection_content">
                    <img src={covidmap} className='img-left'/>
                    <div className='right-text'>
                        <h1>Geographic Information Systems</h1>
                        <p>
                            I find doing visualization and geospatial analysis fun especially when I dive into a pool of data waiting to be 
                            geocoded. Most of my GIS projects are related to COVID-19 cases analysis with data coming from open-sources and 
                            government agencies.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="floatingSection_content">
                <img src={floodmap} className='img-right'/>
                <div className='left-text'>
                    <h1>Remote Sensing</h1>
                    <p>
                        My internship with the <span className='highlight'>Philippine Space Agency (PhilSA)</span> taught me to process satellite images. With remote sensing, I am able to 
                        understand and interpret satellite images and turn it into information that is useful for us in the ground.
                    </p>
                </div>
            </div>

            <div className="whiteSection">
                <div className="whiteSection_content">
                    <img src={phmap} className='img-left'/>
                    <div className='right-text'>
                        <h1>Playing with Data</h1>
                        <p>
                            Exposing myself in thousands of rows of data makes me giddy of excitement to process, analyze, and visualize the data. Being able 
                            to immerse myself in studying analytics enabled me to understand certain phenomena, circumstance, or hypotheses through thorough 
                            statistical analysis, data processing, data engineering, data storytelling, and more.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}