import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
 
const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm)
    {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper 
      component  = "form"
      onSubmit={handleSubmit} 
      sx = {{
        borderRadius: 3,
        border: '1px solid #000',
        pl : 2,
        boxShadow: 'none',
      }}
    >
      <input 
          className='search-bar'
          placeholder='Search Opportunities'
          value = {searchTerm}
          onChange = {(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx = {{
        p: '10px' , color: '#93a8c3'
      }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar