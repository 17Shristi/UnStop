import { Box, Stack, Typography } from "@mui/material";
import FrontContent from "./FrontContent";
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import LogoScroll from "./LogoScroll";
import Carousels from "./Carousels";
import CardNew from "./CardNew";
import { explore, competition } from "../utils/constants";

const CompetePage = () => {
  const location = useLocation();
  const path = location.pathname.slice(1);
  const [selectedOppor, setSelectedOppor] = useState('Competitions');

  return (
    <Stack direction="column">
      <FrontContent selectedCategory={path} />
      <hr
        style={{
          color: "#000",
          width: "100%",
        }}
      />
      <LogoScroll categoryname={path} />
      <Carousels />

      <Box
        my={3}
        sx={{
          height: { md: "40vh", sm: "50vh", xs: "50vh" },
          backgroundColor: "#fff",
          position: "relative",
        }}
      >


        <Box className="top_mar" mx="auto" p={2}>

          <Typography variant="h5" color="#1d4a80" fontWeight="bold">
            Trending Opportunities
          </Typography>
          <Typography variant="subtitle1" color="#1d4a80">
            Have a look at what's trending that you should not miss out on!
          </Typography>

          <Stack className="flexwraps" p={2} direction="row" gap={2}>

            {competition.map((item, idx) => (
              <Box key={idx} sx={{ padding: "5px" }}>
                <button
                  className="category-btn"
                  onClick={() => setSelectedOppor(item.name)}
                  style={{
                    background: item.name === selectedOppor && "#3A8891",
                    color: "white",
                    borderColor: 'black',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                  }}
                  key={item.name}
                >
                  <span
                    style={{
                      opacity: item.name === selectedOppor ? "1" : "0.8",
                    }}
                  >
                    {item.name}
                  </span>
                </button>
              </Box>
            ))}

          </Stack>



        </Box>
      </Box>



      <Box
        my={3}
        sx={{
          height: { md: "50vh", sm: "50vh", xs: "50vh" },
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        <Box className="top_mar" mx="auto" p={2}>
          <Typography variant="h5" color="#1d4a80" fontWeight="bold">
            Explore Opportunities
          </Typography>
          <Typography variant="subtitle1" color="#1d4a80">
            Participate and Showcase Skills & Gain CV Points!!
          </Typography>
          <Stack className="flexwraps" p={2} direction="row" gap={2}>
            {explore.map((item, idx) => {
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
    </Stack>
  );
};

export default CompetePage;
