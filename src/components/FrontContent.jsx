import { Box, Stack, Typography } from "@mui/material";

import Cards from "./Cards";
import { categories } from "../utils/constants";

const FrontContent = ({ selectedCategory }) => {
  var category = categories.filter(
    (category) => category.name === selectedCategory
  );



  return (
    <Stack px={5}  sx={{ flexDirection: { xs: "column",sm:"column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto",sm:"auto", md: "60vh" },
          width: { xs: " auto", sm:"auto", md: "40%" },
          px: { sx: 5, md: 10 },
          pt: { sx: 5, md: 15 },
          justifyContent: "center",
          textAlignVertical: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ color: "#1d4a80", lineHeight: "1.2", py: { xs: '15px',sm:'15px', md: '2' } }}
        >
          {category[0].title}
        </Typography>
        <hr
          align="left"
          style={{
            color: "#f7d983",
            width: "50%",
          }}
        />
        <Typography
          variant="h6"
          sx={{ color: "#829bb9", lineHeight: "1.2", py: { xs: '15px',sm:'15px', md: '2' } }}
        >
          {category[0].body}
        </Typography>
      </Box>
      <Box
        p={2}
        mt={5}
        ml={5}
        sx={{ overflowY: "auto", height: "60vh", flex: 2 }}
      >
        <Stack direction="row"  flexWrap="wrap" justifyContent="start" gap={2}>
          {categories.map((item, idx) => {
            if (item.name !== "Home") {
              return (
                <Box key={idx} sx={{ padding: "5px" }}>
                  {<Cards categ={item.name} />}
                </Box>
              );
            }
          })}
        </Stack>
      </Box>
    </Stack>
  );
};

export default FrontContent;
