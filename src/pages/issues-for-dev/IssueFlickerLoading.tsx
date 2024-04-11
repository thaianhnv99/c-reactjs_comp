/* eslint-disable @typescript-eslint/no-unused-vars */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { type MouseEvent, useEffect, useLayoutEffect, useState } from 'react';
import { fetchSeachListByTitle, type PostItem } from 'src/api/postApi';

const IssueFlickerLoading = () => {
  const [data, setData] = useState<PostItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchSeachListByTitle();
      setData(data.data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useLayoutEffect(() => {
    setIsLoading(true);
    console.log('runned');
  }, []);

  //Practice should use useLayoutEffect instead of useEffect
  useEffect(() => {
    getData();
  }, []);

  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    console.log('runned useLayoutEffect', count);
  }, [count]);

  useEffect(() => {
    console.log('runned useEffect', count);
  }, [count]);

  return (
    <Box>
      {(() => {
        console.log('render component');
        return '';
      })()}
      {isLoading ? <Typography>Loading...</Typography> : null}
      {data.length > 0 ? (
        <Typography>
          Here is a close approximation of a real-life example where I used useLayoutEffect to solve
          the flickering problem I had. useLayoutEffect vs.
        </Typography>
      ) : null}
      <Button
        style={{ textTransform: 'none' }}
        onClick={() => {
          getData();
        }}
      >
        Clicked
      </Button>
      <button onClick={() => setCount((e) => e + 1)}>Click ({count})</button>
    </Box>
  );
};

export default IssueFlickerLoading;
