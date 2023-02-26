import { Box, Stack, Typography } from "@mui/material";
import FrontContent from "./FrontContent";
import LogoScroll from "./LogoScroll";
import { categories, explore, jobs } from "../utils/constants";
import CardNew from "./CardNew";
import Carousels from "./Carousels";

const HomePage = () => {
  return (
    <Stack direction="column">
      <FrontContent selectedCategory={"Home"} />
      <hr
        style={{
          color: "#000",
          width: "100%",
        }}
      />
      <LogoScroll categoryname={"Home"} />
      <Carousels />

      <Box
        mb={2}
        sx={{ height: {md:'40vh', sm:'50vh' , xs:'50vh' }, backgroundColor: "#fff", position: "relative" }}
      >
        <Box className="top_mar" mx="auto" p={2}>
          <Stack className="flexwraps"
            p={2} direction= "row"
            gap={2} 
          >
            {categories.slice(0, 5).map((item, idx) => {
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

      <Box
        my={3}
        sx={{ height: {md:'40vh', sm:'50vh' , xs:'50vh' }, backgroundColor: "#fff", position: "relative" }}
      >
        <Box className="top_mar" mx="auto" p={2}>

        <Typography variant="h5" color='#1d4a80' fontWeight="bold">Explore Opportunities</Typography>
        <Typography variant="subtitle1" color='#1d4a80'>Participate and Showcase Skills & Gain CV Points!!</Typography>
          <Stack className="flexwraps"
            p={2} direction= "row" 
            gap={2}
          >
            {explore.map((item, idx) =>  (
                  <Box key={idx} sx={{ padding: "5px" }}>
                    {<CardNew categ={item} />}
                  </Box>
                )
              )}
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

      <Box sx={{ height: {md:"400px", sm:'50vh' , xs:'50vh' }, position: "relative" }}>
         
            <Box  className="carousel" mx="auto" p={3} >
                <img src={require('../utils/images/offer2.png')} alt="logo" height="300px" width="100%" />
                   
            </Box>
    </Box>

    </Stack>
  );
};

export default HomePage;
