import { Badge,Pets,Notifications,Mail, Menu } from '@mui/icons-material'
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Avatar,MenuItem } from '@mui/material'
import React,{useState} from 'react'

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

const Search = styled("div")(({theme})=>({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius ,
    width: "40%",
    
    
}))
const Icons = styled(Box)(({theme})=>({
    display:"none",
    alignItems:"center", 
    gap:"20px",
    [theme.breakpoints.up("sm")] :{
        display:"flex"
    }
}))

const UserBox = styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")] :{
        display:"none"
    }
}))

const Navbar = () =>{
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{display:{xs:"none" ,sm:"block"}}}>LAMA DEV</Typography>
                <Pets sx={{display:{xs:"block" ,sm:"none"}}}/>
                <Search><InputBase placeholder="search..."/></Search>
                <Icons>
                {/* <Badge badgeContent={4} color="error">
                   <Mail />
                  </Badge> */}
                  <Mail/>
                  {/* <Badge badgeContent={2} color="error">
                    <Notifications/>
                  </Badge> */}
                  <Notifications/>

                  <Avatar sx={{width:30, height:30}} 
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                  onClick={e=>setOpen(true)}
                  />

                </Icons>

                <UserBox onClick={(e)=>setOpen(true)}>
                <Avatar sx={{width:30, height:30}} src=""/>
                <Typography variant="span">John Doe</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        </AppBar>
    )
}

export default Navbar