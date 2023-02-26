import { Box, Stack, Typography } from '@mui/material';
import { useLocation } from "react-router-dom";
import FrontContent from './FrontContent'
import  LogoScroll from './LogoScroll';
import CardNew from './CardNew';
import { practices } from '../utils/constants';

const PracticePage = () => {
  const location = useLocation();
  const path = location.pathname.slice(1);
  
  return (
  <Stack direction = "column">
      <FrontContent selectedCategory={path}/>
      <hr  style={{
            color: "#000",
            width: "100%",
     }} />
     <LogoScroll categoryname={path}/>
     <Box sx={{ height: {md:"400px", sm:'50vh' , xs:'50vh' }, position: "relative" }}>
         
            <Box  className="carousel" mx="auto" p={3} >
                <img src={require('../utils/images/offer4.png')} alt="logo" height="300px" width="100%" />
                   
            </Box>
    </Box>

    <Box
        my={4}
        sx={{ height:  {md:'50vh', sm:'50vh' , xs:'50vh' }, backgroundColor: "#fff", position: "relative" }}
      >
        <Box className="top_mar" mx="auto" p={2}>

        <Typography variant="h5" color='#1d4a80' fontWeight="bold">Practice</Typography>
        <Typography variant="subtitle1" color='#1d4a80'>Practice these questions & prepare yourself for the real-life interview problemss</Typography>
          <Stack className="flexwraps"
            p={2}
            direction= "row" 
            gap={2}
          >
            {practices.map((item, idx) => {
              if (item.name !== "Home") {
                return (
                  <Box key={idx} sx={{ padding: "5px" }}>
                    {<CardNew categ={item} />}
                  </Box>
                );
              }
            })}
          </Stack>
        </Box>
      </Box>

    <Box sx={{ height: {md:"400px", sm:'50vh' , xs:'50vh' }, position: "relative" }}>
         
            <Box  className="carousel" mx="auto" p={3} >
                <img src={require('../utils/images/offer5.png')} alt="logo" height="300px" width="100%" />
                   
            </Box>
    </Box>
    
   </Stack>
  )
}

export default PracticePage