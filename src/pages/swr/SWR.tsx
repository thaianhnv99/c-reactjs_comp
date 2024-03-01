/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useSWR from 'swr';

const SWR = () => {
  const { data, isLoading, error } = useSWR<any[]>('https://jsonplaceholder.typicode.com/posts', {
    // refreshInterval: 1000,
    onError(error) {
      console.log('error', error);
    },
  });

  console.log(error);

  console.log(isLoading, error, data);

  return (
    <Box>
      <Typography variant="h3">Data with SWR</Typography>
      <Box mt={4}>
        {isLoading ? (
          <>Loading...</>
        ) : data && data?.length > 0 ? (
          data?.map((item, key) => {
            return (
              <Stack direction="column" mt={1} key={key}>
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body">{item.body}</Typography>
              </Stack>
            );
          })
        ) : null}
      </Box>
    </Box>
  );
};

export default SWR;
