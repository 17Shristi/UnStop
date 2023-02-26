import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {logo} from '../utils/constants';

const Footer = () => {
  return (
    <Box height = "20vh" backgroundColor = '#0f2642'>

       <Stack sx={{ flexDirection: { xs: "column",sm:"column", md: "row" } }}>

       <Box width = '30%' p={4}>
       <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={30} />
       </Link>  
        </Box>

        <Box p= {4}>
            <Typography varaint ="body1" textAlign='center' color='#fff'>Copyright @ Shristi Agarwal 2023</Typography>
        </Box>

       </Stack>

    </Box>
  )
}

export default Footer