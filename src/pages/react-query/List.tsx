import { IconButton, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { POST_CACHE_KEY, fetchSeachListByTitle } from 'src/api/postApi';
import ItemUI from './ItemUI';
import { useDebounce } from 'src/hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';
import ReloadIcon from 'src/icons/ReloadIcon';

const List = () => {
  const [textSearch, setTextSearch] = useState<string>();
  const value = useDebounce(textSearch, 300);

  const { data, isLoading, isFetching, isSuccess, refetch } = useQuery(
    [POST_CACHE_KEY.GET_LIST],
    () => fetchSeachListByTitle(value || ''),
    {
      cacheTime: 20000, //(default 5m)Nếu hết thời gian, sẽ phải call API, loading lại từ đầu
      staleTime: 10000, //(default 0)
      // Nếu hết thời gian, nó sẽ refetch API, data trên UI nó vẫn lấy từ cache
      // đến khi refetch xong => data sẽ update vào cache và update data trên UI
      onError: () => {
        throw new Error('Error');
      },
    }
  );

  useEffect(() => {
    refetch();
  }, [refetch, value]);

  return (
    <Box>
      <Typography variant="h1">API Post</Typography>
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        sx={{
          mt: 4,
          mb: 2,
        }}
      >
        <TextField
          value={textSearch}
          onChange={(e) => {
            console.log(e.target.value);
            setTextSearch(e.target.value);
          }}
          size="small"
          fullWidth
        />
        <IconButton onClick={() => refetch()}>
          <ReloadIcon />
        </IconButton>
      </Box>

      <Box>
        {isLoading || isFetching ? <Typography>Loading...</Typography> : null}
        {isSuccess && !isLoading
          ? data.data.map((item) => {
              return <ItemUI key={item.id} post={item} />;
            })
          : null}
      </Box>
    </Box>
  );
};

export default List;
