import { Box, Typography } from "@mui/material"

const Logo = ({item}) => {
  return (
    <Box sx={{height: '120px', Width: '200px'}}>
         <Box p={4} sx={{alignItems: 'center', justifyContent: 'center'}}>
                <Typography varaint = 'h3' color = '#00425A' fontWeight='bold'>{item.name}</Typography>
         </Box>

    </Box>
  )
}

export default Logo