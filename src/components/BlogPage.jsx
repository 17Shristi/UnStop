import { Box, Stack, Typography } from '@mui/material';
import { useLocation } from "react-router-dom";
import FrontContent from './FrontContent';
import LogoScroll from './LogoScroll';

const BlogPage = () => {
  const location = useLocation();
  const path = location.pathname.slice(1);
  
  return (
  <Stack direction = "column">
      <FrontContent selectedCategory={path}/>
      <hr  style={{
            color: "#000",
            width: "100%",
     }} />
     <LogoScroll categoryname={path} />
    
   </Stack>
  )
}

export default BlogPage