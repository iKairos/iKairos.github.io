import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Typography } from '@mui/material';
import tupseal from '../../static/images/TUPSEAL.png'
import mtcseal from '../../static/images/MTCSEAL.png'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const oppContent = { flex: 0.25,  m: 'auto 0', fontSize: 15};

const timelineSx = {
    ['@media only screen and (max-width: 900px)']:{
        display: 'none'
    }
}

const accordionSx = {
    ['@media only screen and (min-width: 900px)']:{
        display: 'none'
    },
    border: 'none', 
    color: 'white', 
    backgroundColor: 'transparent', 
    width: '100%'
}

export default function Education(){
    return(
        <div className="container">
            <div className="inner1_content">
                <h1>Education</h1>
                <hr className="small_hr"/>
                <br/>

                <Timeline sx={timelineSx} align="left">
                    <TimelineItem>
                        <TimelineOppositeContent sx={oppContent}>
                            June 2018 - August 2022
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot sx={{backgroundColor: 'rgb(117, 154, 255)'}}>
                                <img src={tupseal} width='50px'/>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Accordion defaultExpanded={true} elevation={0} sx={{border: 'none', color: 'white', backgroundColor: 'transparent', width: '55%'}}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color: 'white'}}/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography variant="h6" component="span">
                                    Technological University of the Philippines
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>Bachelor of Science in Computer Science</Typography>
                                    <Typography sx={{fontSize: '12px'}}>
                                    Studying in an institution that specializes in technology and engineering, I
                                    have been exposed to heavy mathematics which is one of the foundations of my
                                    specialization. I am among the Dean’s Listers for five semesters during my
                                    residency within the university. My projects in the university focused on
                                    Machine Learning, Natural Language Processing, Data Science, and Artificial
                                    Intelligence.
                                    </Typography>
                                    <Typography className='highlight' sx={{fontSize: '12px'}}><b>Latin Honor:</b> Cum Laude</Typography>
                                    <Typography className='highlight'sx={{fontSize: '12px'}}><b>Final Grade:</b> 1.48</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={oppContent}>
                            June 2016 - March 2018
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot>
                                <img src={mtcseal} width='50px'/>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Accordion elevation={0} sx={{border: 'none', color: 'white', backgroundColor: 'transparent', width: '55%'}}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color: 'white'}}/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography variant="h6" component="span">
                                Manila Tytana Colleges
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>Science, Technology, Engineering, and Mathematics</Typography>
                                    <Typography sx={{fontSize: '12px'}}>
                                    As an institution that specializes in medical and nursing education, I have
                                    been exposed to different top-level scientific foundations. I specialized in
                                    Science, Technology, Engineering, and Mathematics (STEM) in this institution
                                    which laid down the foundation for my scientific and mathematical endeavors.
                                    </Typography>
                                    <Typography className='highlight' sx={{fontSize: '12px'}}><b>Honor(s):</b> With Honors</Typography>
                                    <br/>
                                </AccordionDetails>
                            </Accordion>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={oppContent}>
                            June 2012 - March 2016
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot sx={{width: '50px', height: '50px'}}>
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Accordion elevation={0} sx={{border: 'none', color: 'white', backgroundColor: 'transparent', width: '55%'}}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color: 'white'}}/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography variant="h6" component="span">
                                    St. Alphonsus Liguori Integrated School
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>Junior High School</Typography>
                                    <Typography sx={{fontSize: '12px'}}>
                                        The institution provided an exceptional learning environment for every
                                        student. I was incubated to become a dreamer and a doer. SALIS equipped me
                                        with life-long skills which laid down the groundwork in achieving my scientific
                                        endeavors one step at a time. This is the institution where I discovered I have
                                        the skill of public speaking which combines well with my love for scientific
                                        communications when I was in Senior High School and College. I received
                                        Merit Honors during my residency in this institution for above-average
                                        academic performance.
                                    </Typography>
                                    <Typography className='highlight' sx={{fontSize: '12px'}}><b>Honor(s):</b> Merit Awardee</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </TimelineContent>
                    </TimelineItem>
                    {/*
                        <TimelineItem>
                            <TimelineOppositeContent sx={{ flex: 0.5,  m: 'auto 0'}}>
                                June 2012 - March 2016
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot sx={{width: '50px', height: '50px'}}>
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                St. Alphonsus Liguori Integrated School
                            </Typography>
                            <Typography>Junior High School</Typography>
                            <Typography sx={{fontSize: '12px'}}><b>Honor(s):</b> Merit Awardee</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    */}
                </Timeline>

                <Accordion defaultExpanded={true} elevation={0} sx={accordionSx}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{color: 'white'}}/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                    <Typography variant="h6" component="span">
                        Technological University of the Philippines
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Bachelor of Science in Computer Science</Typography>
                        <h4 className="highlight gridHead4" style={{lineHeight: 0}}> June 2018 - August 2022</h4>
                        <Typography sx={{fontSize: '12px'}}>
                        Studying in an institution that specializes in technology and engineering, I
                        have been exposed to heavy mathematics which is one of the foundations of my
                        specialization. I am among the Dean’s Listers for five semesters during my
                        residency within the university. My projects in the university focused on
                        Machine Learning, Natural Language Processing, Data Science, and Artificial
                        Intelligence.
                        </Typography>
                        <Typography className='highlight' sx={{fontSize: '12px'}}><b>Latin Honor:</b> Cum Laude</Typography>
                        <Typography className='highlight'sx={{fontSize: '12px'}}><b>Final Grade:</b> 1.48</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion elevation={0} sx={accordionSx}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{color: 'white'}}/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                    <Typography variant="h6" component="span">
                    Manila Tytana Colleges
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Science, Technology, Engineering, and Mathematics</Typography>
                        <h4 className="highlight gridHead4" style={{lineHeight: 0}}> June 2016 - March 2018 </h4>
                        <Typography sx={{fontSize: '12px'}}>
                        As an institution that specializes in medical and nursing education, I have
                        been exposed to different top-level scientific foundations. I specialized in
                        Science, Technology, Engineering, and Mathematics (STEM) in this institution
                        which laid down the foundation for my scientific and mathematical endeavors.
                        </Typography>
                        <Typography className='highlight' sx={{fontSize: '12px'}}><b>Honor(s):</b> With Honors</Typography>
                        <br/>
                    </AccordionDetails>
                </Accordion>
                <Accordion elevation={0} sx={accordionSx}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{color: 'white'}}/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                    <Typography variant="h6" component="span">
                        St. Alphonsus Liguori Integrated School
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Junior High School</Typography>
                        <h4 className="highlight gridHead4" style={{lineHeight: 0}}> June 2012 - March 2016 </h4>
                        <Typography sx={{fontSize: '12px'}}>
                            The institution provided an exceptional learning environment for every
                            student. I was incubated to become a dreamer and a doer. SALIS equipped me
                            with life-long skills which laid down the groundwork in achieving my scientific
                            endeavors one step at a time. This is the institution where I discovered I have
                            the skill of public speaking which combines well with my love for scientific
                            communications when I was in Senior High School and College. I received
                            Merit Honors during my residency in this institution for above-average
                            academic performance.
                        </Typography>
                        <Typography className='highlight' sx={{fontSize: '12px'}}><b>Honor(s):</b> Merit Awardee</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}