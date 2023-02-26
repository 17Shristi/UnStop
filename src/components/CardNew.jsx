import { Card, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

const CardNew = ({categ}) => {

  return (
    <Card
      sx={{
        width: { md: "250px", sm: "130px", xs: "100px" },
        boxShadow: "none",
        borderRadius: "10px",
      }}
    >
      
      <Link to = {`/${categ.name}`}>
       <div style={{ position: "relative" }}>
        <CardMedia
          image= {require(`../utils/images/${categ.name}.png`)}
          alt="pic"
          sx={{ width: { xs: "100px", sm: "130px", md: "250px" }, height: {md: '250px', sm: '130px' , xs: '100px'} }}
        />
         <div style={{position: "absolute", color: "#000" , bottom: 15, left: '40%', transform: "translateX(-50%)", fontSize:'20px'}}>{categ.title}</div>
         </div>
      </Link>

    </Card>
  );
};

export default CardNew;