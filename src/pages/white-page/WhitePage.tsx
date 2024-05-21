import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useCallback, useEffect } from 'react';
import { ShiftingDropDown } from 'src/components/layout/DropdownMenu';
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

  const getUser1 = useCallback(async () => {
    try {
      const res = await apiClient.get('/user1');

      console.log(res.data);
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  useEffect(() => {
    getUser();
    getUser1();
  }, [getUser1]);

  const { state, openPopup, closePopup } = usePopup();
  console.log(state);

  return (
    <Box>
      <Button
        onClick={() => openPopup({ title: 'Title', content: '11111', button: null })}
        variant="contained"
      >
        open
      </Button>
      <Button onClick={closePopup} variant="contained">
        close
      </Button>
      <Divider />
      <ShiftingDropDown />
      {/* <MenuUI>
        <Box>112</Box>
        <Box>112</Box>
      </MenuUI> */}
    </Box>
  );
};

export default WhitePage;

// const MenuUI = ({ children }: { children: ReactNode }) => {
//   return <>{children}</>;
// };
