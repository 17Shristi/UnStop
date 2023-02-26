import Carousel from 'react-material-ui-carousel'
import { Box } from "@mui/material";
import { offers } from '../utils/constants';
  
const Carousels = () => {

  return (
        
     <Box sx={{ height: {md:"400px", sm:'50vh' , xs:'50vh' }, position: "relative" }}>
         
            <Box  className="carousel" mx="auto" p={3} >
            <Carousel autoplay >
            {
                offers.map( (item) => (
                          <img src={require(`../utils/images/${item.name}.png`)} alt="logo" height="300px" width="100%" />
                 ))
            
            }
            </Carousel>
            </Box>
    </Box>
  )
}

export default Carousels