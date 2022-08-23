import { Button, InputAdornment, Snackbar, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

const fieldDesign = {
  width: '100%',
  '& label.Mui-focused': {
    color: 'rgb(117, 154, 255)'
  },
  '& value.Mui-focused': {
    color: 'rgb(117, 154, 255)'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'yellow',
  },
  '& .MuiFormLabel-root': {
    color: 'white',
  },
  '& .MuiInputBase-root': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '& input': {
      color: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'rgb(117, 154, 255)',
      transition: 'all 0.1s linear',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgb(117, 154, 255)',
    },
}};

const fieldDesignDisabled = {
  width: '100%',
  ".MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#fff",
  },
  '& .MuiOutlinedInput-root.Mui-disabled': {
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  '& .MuiFormLabel-root.Mui-disabled': {
    color: 'white',
  },
};

const buttonDesign = {
  borderColor: '#fff', color: '#fff',
  borderWidth: 1,
  borderStyle: 'solid',
  padding: 1,
  width: '25%',
    '&:hover': {
        backgroundColor: 'rgb(117, 154, 255)',
        borderColor: 'rgb(117, 154, 255)',
        color: '#fff',
    },
    "&.active": {
      background:'black',
    }
};

const iconButtonDesign = {
  '&:hover': {
        backgroundColor: '#424549',
    },
};

export default function Contact(){
    const [open, setOpen] = useState(false)
    const handleClick = (value) => {
      setOpen(true);
      navigator.clipboard.writeText(value);
    }

    return(
        <div className="container">
            <div className="inner1_content">
                <h1>Be in Touch!</h1>
                <hr className="small_hr"/>
                <br/>

                <p>
                    Do you want to collaborate on some projects? or do you want to ask something about my work or what I do? Send me a message now 
                    and start a conversation!   
                </p>

                <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={6}>
                    <div style={{lineHeight: 5}}>
                        <TextField label="Full Name" variant="outlined" sx={fieldDesign}/> <br/>
                        <TextField label="E-mail" variant="outlined" sx={fieldDesign}/> <br/>
                        <TextField label="Subject" variant="outlined" sx={fieldDesign}/> <br/>
                        <TextField rows={10} multiline label="Message" variant="outlined" sx={fieldDesign}/> <br/>
                        <Button sx={buttonDesign} key="1">Submit</Button>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div style={{lineHeight: 1}}>
                        <h3>... or contact me anywhere here on my socials:</h3>
                        <div style={{lineHeight: 5}}>
                          <TextField
                            disabled
                            value="https://www.linkedin.com/in/jc-torres/"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <LinkedInIcon style={{color: 'white'}}/>
                                </InputAdornment>
                              ),
                              endAdornment: (
                                <InputAdornment position="start">
                                  <IconButton sx={iconButtonDesign} onClick={e => handleClick('https://www.linkedin.com/in/jc-torres/')}>
                                    <ContentCopyIcon style={{color: 'white'}}/>
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            variant="outlined"
                            sx={fieldDesignDisabled}
                          />
                          <TextField
                            disabled
                            value="https://github.com/iKairos/"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <GitHubIcon style={{color: 'white'}}/>
                                </InputAdornment>
                              ),
                              endAdornment: (
                                <InputAdornment position="start">
                                  <IconButton sx={iconButtonDesign}  onClick={e => handleClick('https://github.com/iKairos/')}>
                                    <ContentCopyIcon style={{color: 'white'}}/>
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            variant="outlined"
                            sx={fieldDesignDisabled}
                          />
                          <TextField
                            disabled
                            value="johnchris.torres04@gmail.com"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <EmailIcon style={{color: 'white'}}/>
                                </InputAdornment>
                              ),
                              endAdornment: (
                                <InputAdornment position="start">
                                  <IconButton sx={iconButtonDesign}  href="mailto:johnchris.torres04@gmail.com">
                                    <SendIcon style={{color: 'white'}}/>
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                            variant="outlined"
                            sx={fieldDesignDisabled}
                          />
                        </div>
                    </div>
                  </Grid>
                </Grid>
            </div>
            <Snackbar
              open={open}
              onClose={() => setOpen(false)}  
              autoHideDuration={2000}
              message="Copied to clipboard."
            />
        </div>
    )
}