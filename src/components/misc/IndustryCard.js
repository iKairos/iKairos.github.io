import { Avatar, Chip } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Item } from '../misc/Item';

import algo from "../../static/images/algofilipino.png"
import philsa from "../../static/images/PhilSA.png"
import cambridge from "../../static/images/CoatofArmsCambridge.png"

export default function IndustryCard(props){
    const getAvatar = (company) => {
        if (company === 'Algo Filipino'){
            return algo
        }else if (company === "Philippine Space Agency"){
            return philsa
        }else if (company === "Cambridge University Press & Assessment"){
            return cambridge
        }
    }

    return(
        <Grid item xs={2} sm={4} md={4}>
            <Item style={{height: '300px'}}>
                <h1 className="gridHead2">{props.position}</h1>
                <h4 className="highlight gridHead4" style={{lineHeight: 0}}> {props.dateRange}</h4>
                {
                    props.avatar != null ? 
                    <Chip avatar={<Avatar src={getAvatar(props.company)}/>} style={{color: '#fff'}} label={props.company} variant="outlined" /> :
                    <Chip avatar={<Avatar/>} style={{color: '#fff'}} label={props.company} variant="outlined" />
                }
                <p className="gridPar2">
                    {props.description}
                </p>
            </Item>
        </Grid>
    )
}