import Grid from '@mui/material/Grid';
import industryData from '../../data/industry.json'
import IndustryCard from '../misc/IndustryCard';

export default function Industry(){
    const _data = industryData.industryData.sort((a,b) => b.id - a.id)

    return(
        <div className="container">
            <div className="inner1_content">
                <h1>Industry Experience</h1>
                <hr className="small_hr"/>
                <br/>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        _data.map(
                            data => <IndustryCard 
                                position={data.position}
                                dateRange={data.dateRange}
                                company={data.company}
                                description={data.description}
                                avatar={data.avatar}
                                key={data.id}
                            />
                        )
                    }
                </Grid>
            </div>
        </div>
    )
}