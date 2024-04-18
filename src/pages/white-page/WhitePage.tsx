/* eslint-disable @typescript-eslint/no-unused-vars */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useIdleSession } from 'src/hooks/idleSession/useIdleSession';
import { apiClient } from 'src/lib';
import { usePopup } from 'src/states/ui/usePopup';

const WhitePage = () => {
  const getUser = async () => {
    try {
      const res = await apiClient.get('/user');

      console.log(res.data);
    } catch {
      console.log('error');
    }
  };

  const getUser1 = async () => {
    try {
      const res = await apiClient.get('/user1');

      console.log(res.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getUser();
    getUser1();
  }, []);

  const { restartIdleTimer, stopIdleTimer } = useIdleSession();
  const { state, openPopup, closePopup } = usePopup();

  console.log(state);

  return (
    <Box>
      Timeout:
      <Button onClick={stopIdleTimer}>Stop</Button>
      <Button onClick={restartIdleTimer} variant="contained">
        Restart
      </Button>
      <Button
        onClick={() => openPopup({ title: 'Title', content: '11111', button: null })}
        variant="contained"
      >
        open
      </Button>
      <Button onClick={closePopup} variant="contained">
        close
      </Button>
    </Box>
  );
};

export default WhitePage;
