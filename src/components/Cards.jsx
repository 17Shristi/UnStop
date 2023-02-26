import { Card, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

const Cards = ({categ}) => {

  return (
    <Card 
      sx={{
        width: { md: "160px", sm: "150px", xs: "100px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      
      <Link to = {`/${categ}`}>
       <div style={{ position: "relative" }}>
        <CardMedia
          image= {require(`../utils/images/${categ}.png`)}
          alt="pic"
          sx={{ width: { xs: "100px", sm: "150px", md: "160px" }, height: {md: '200px', sm: '150px' , xs: '100px'} }}
        />
         <div style={{position: "absolute", color: {xs:'#000', sm:'#000', md: "#1d4a80"}, top: 10, left: "50%", transform: "translateX(-50%)", fontSize:'20px'}}>{categ}</div>
         </div>
      </Link>

    </Card>
  );
};

export default Cards;
