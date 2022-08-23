import { IconButton, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const iconButtonDesign = {
    '&:hover': {
          backgroundColor: '#424549',
      },
};

export default function Navbar(){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //
    return (
        <header className="navbar">
            <div>
                <h2 className="navlink"><Link className="noDecor" to='/personal'>about me</Link></h2>
                <h2 className="navlink"><Link className="noDecor" to='/education'>education</Link></h2>
                {/*<h2 className="navlink"><Link className="noDecor" to='/whatido'>what i do</Link></h2>*/}
                <h2 className="navlink"><Link className="noDecor" to='/industry'>industry</Link></h2>
                <h2 className="navlink"><Link className="noDecor" to='/certificates'>certificates</Link></h2>
                {/*<h2 className="navlink"><Link className="noDecor" to='/'>projects</Link></h2>*/}
                <h2 className="navlink"><Link className="noDecor" to='/contact'>contact</Link></h2>
            </div>

            <div className="hamburg">
                <IconButton sx={iconButtonDesign} onClick={handleClick}>
                    <MenuIcon fontSize="large" style={{color: 'white'}}/>
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    sx={{"& .MuiPaper-root": {
                        backgroundColor: "#424549",
                        color: 'white',
                        width: '50%'
                      }}}
                >
                    <MenuItem onClick={handleClose}>
                        <Link className="noDecor" to='/personal'>About Me</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link className="noDecor" to='/education'>Education</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link className="noDecor" to='/industry'>Industry</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link className="noDecor" to='/certificates'>Certificates</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link className="noDecor" to='/contact'>Contact</Link>
                    </MenuItem>
                </Menu>
            </div>
        </header>
    )
}