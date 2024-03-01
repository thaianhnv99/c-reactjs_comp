import { TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { type PostItem, fetchAllList } from 'src/api/postApi';
import PostItemUI from './PostItemUI';
import { useDebounce } from 'src/hooks/useDebounce';

const SearchList = () => {
  const [list, setList] = useState<PostItem[]>([]);
  const [textSearch, setTextSearch] = useState<string>();
  const value = useDebounce(textSearch, 300);

  const handleGetList = async (textSearch?: string) => {
    try {
      const response = await fetchAllList();
      if (response && response.status === 200) {
        if (textSearch) {
          const dataFilter = response.data.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(textSearch.toLowerCase());
          });
          setList(dataFilter);
        } else {
          setList(response.data);
        }
      }
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    console.log('triggle');
    handleGetList(value);
  }, [value]);

  return (
    <Box>
      <Typography variant="h1">API Post</Typography>
      <TextField
        value={textSearch}
        onChange={(e) => {
          console.log(e.target.value);

          setTextSearch(e.target.value);
        }}
        size="small"
        fullWidth
        sx={{
          pt: 4,
          pb: 2,
        }}
      />
      <Box>
        {list.map((item) => {
          return <PostItemUI key={item.id} post={item} />;
        })}
      </Box>
    </Box>
  );
};

export default SearchList;
