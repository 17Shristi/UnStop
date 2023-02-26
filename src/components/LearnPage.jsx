import { Box, Stack, Typography } from '@mui/material';
import { useLocation } from "react-router-dom";
import FrontContent from './FrontContent'
import LogoScroll from './LogoScroll';
import CardNew from './CardNew';
import {courses, jobs} from '../utils/constants';


import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const LearnPage = () => {
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
     <Box mb={2} sx={{  height: {md:'40vh', sm:'50vh' , xs:'50vh' } ,backgroundColor:'#fff', position: 'relative' }}>
        <Box className="learnbox" sx={{  height: {md:'30vh', sm:'50vh' , xs:'50vh' }}}  mx='auto' p={2}>
            <Typography variant="h5" textAlign='center' color='#1d4a80' fontWeight="bold">What to expect?</Typography>
            <Stack justifyContent="center"className="flexwraps" direction= "row" mb={3}>
               <Box width="150px" p ={2}>
                  
                  <PhoneAndroidOutlinedIcon />
                  <Typography varaint="subtitle1" color ='#829bb9' fontWeight='bold' pt={4}>Mobile-first Component</Typography>
               </Box>
               <Box width="150px" p ={2}>
                  <LaptopChromebookOutlinedIcon />
                  <Typography varaint="subtitle1" color ='#829bb9' fontWeight='bold' pt={4}>Hands on Learning</Typography>
               </Box>
               <Box width="150px" p ={2}>
                  < WorkspacePremiumOutlinedIcon />
                  <Typography varaint="subtitle1" color ='#829bb9' fontWeight='bold' pt={4}>Industry Expertst</Typography>
               </Box>
               <Box width="150px" p ={2}>
                  <PermIdentityOutlinedIcon />
                  <Typography varaint="subtitle1" color ='#829bb9' fontWeight='bold' pt={4}>Industry- recognized Certification</Typography>
               </Box>

            </Stack>
        </Box>
     </Box>
     <Box
        my={4}
        sx={{ height:  {md:'80vh', sm:'50vh' , xs:'50vh' }, backgroundColor: "#fff", position: "relative" }}
      >
        <Box className="top_mar" mx="auto" p={2} mt={4}>

        <Typography variant="h5" color='#1d4a80' fontWeight="bold">Bundled Courses</Typography>
        <Typography variant="subtitle1" color='#1d4a80'>Learn what recruiters are looking for through these foolproof, practical & to-the-point placement preparation courses.</Typography>
          <Stack display= 'flex' flexWrap='wrap'
            p={1}
            direction= "row"
          >
            {courses.map((item, idx) => (
                  <Box key={idx} sx={{ padding: "5px" }}>
                    {<CardNew categ={item} />}
                  </Box>
                ))}
          </Stack>
        </Box>
      </Box>
      <Box
        my={4}
        sx={{ height:  {md:'50vh', sm:'50vh' , xs:'50vh' }, backgroundColor: "#fff", position: "relative" }}
      >
        <Box className="top_mar" mx="auto" p={2}>

        <Typography variant="h5" color='#1d4a80' fontWeight="bold">Get Hired</Typography>
        <Typography variant="subtitle1" color='#1d4a80'>Work with your dream companies by applying to hiring challenges and full-time & part-time jobs/internships</Typography>
          <Stack className="flexwraps"
            p={2}
            direction= "row" 
            gap={2}
          >
            {jobs.map((item, idx) => (
                  <Box key={idx} sx={{ padding: "5px" }}>
                    {<CardNew categ={item} />}
                  </Box>
                ))}
          </Stack>
        </Box>
      </Box>
    
   </Stack>
  )
}

export default LearnPage