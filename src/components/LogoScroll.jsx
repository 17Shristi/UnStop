import { Box, Stack, Typography } from '@mui/material';
import { companies } from '../utils/constants';
import Logo  from './Logo';


const LogoScroll = ({categoryname}) => {
  
  var str = "";
  if (categoryname === 'Home'){
      str ="Industry veterans trust us:";
  }
  else {
    str = `${categoryname} & Join Dream Companies:`;
  }

  
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }}}>

        <Box width={{sx:'100%', md:'30%'}} p={4} height={{sx: '50px', md: '120px'}}>
           <Typography variant='h6' textAlign='center' color= "#1d4a80">{str}</Typography>
        </Box>
        <Box pl={2} overflow= 'scroll' sx={{height: '120px', overflowY: 'hidden'}}>
          <Stack direction='row' gap={2} >
              {companies.map((item) => (
                  <Logo item={item}/>
              ))}
          </Stack>
            
        </Box>
     </Stack>
  )
}

export default LogoScroll