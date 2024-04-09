import { useDispatch } from 'react-redux';
import { fetchInfo } from '../../states';
import { useEffect, useState } from 'react';
import './home.scss';
import Button from '@mui/material/Button';
import { useAuth } from 'src/states/auth/hook';
import Divider from '@mui/material/Divider';
import useContextTheme from 'src/hooks/useContextTheme';
import { Box, Typography } from '@mui/material';
import HomeWrapper from './HomeWrapper';

export function Home() {
  const dispatch = useDispatch();
  // const { info } = useSelector((state: any) => state)

  const [count, setCount] = useState(0);
  // useClickOutside(buttonRef, handleClickOutside);

  useEffect(() => {
    dispatch(fetchInfo());
  }, [dispatch]);

  const {
    state: { loading },
    logout,
  } = useAuth();

  const handleToggleCount = () => {
    setCount(count + 1);
  };

  const context = useContextTheme();

  return (
    <>
      Home update v8.8_ok
      <Button variant="contained" onClick={logout}>
        Logout{loading ? '...' : ''}
      </Button>
      <Divider />
      <Button onClick={handleToggleCount}>Count {count}</Button>
      <Divider>useTheme</Divider>
      <Typography>{context.theme}</Typography>
      <Button onClick={() => context.setTheme('black')}>Change theme</Button>
      <HomeWrapper title="wrapper">
        <HomeWrapper.Item title="Item 1" />
        <HomeWrapper.Item title="Item 2" />
        <HomeWrapper.Item title="Item 3" />
      </HomeWrapper>
      <Divider>Nav</Divider>
      <Box
        sx={{
          width: '200px',
        }}
      >
        <Box
          component="ul"
          sx={{
            listStyle: 'none',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '10px',
            backgroundColor: '#e5e5e5',
            '& li': {
              '&:hover': {
                backgroundColor: 'gray',
              },
            },
            '& > li': {
              padding: '3px 5px',
              borderRadius: '8px',
            },
          }}
        >
          <Box component="li">Home</Box>
          <Box component="li">Contact</Box>
          <Box
            component="li"
            sx={{
              position: 'relative',
              '&:hover': {
                '& ul': {
                  display: 'block',
                },
              },
            }}
          >
            Products
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                padding: '8px',
                position: 'absolute',
                left: '98%',
                top: 0,
                width: '100%',
                backgroundColor: '#e5e5e5',
                display: 'none',
                borderRadius: '10px',
                boxShadow: '-1px 0px 9px 0px #a1a1a1',

                '& > li': {
                  padding: '3px 5px',
                  borderRadius: '8px',
                },
              }}
            >
              <Box component="li">Product 1</Box>
              <Box component="li">Product 2</Box>
              <Box component="li">Product 2</Box>
            </Box>
          </Box>
          <Box component="li">About</Box>
        </Box>
      </Box>
    </>

    // <div className="homeContainer">
    //     <div>{title}</div>
    //     <div>
    //         Count: {info.count}
    //         <button onClick={() => dispatch(_increaseCount())}>Triggle</button>
    //     </div>
    //     <div className="listTodo">
    //         <Divider orientation="center" plain>
    //             List
    //         </Divider>
    //         {info && info.list.map((item: any, index: number) => {
    //             return (
    //                 <div key={index}>{item.name}</div>)
    //         })}
    //     </div>
    //
    //     {/*useToggle*/}
    //     <Divider plain>
    //         useToggle
    //     </Divider>
    //     <div>
    //         <Typography.Text>Status: {open ? 'open' : 'close'}</Typography.Text><br/>
    //         <Button onClick={() => setOpen(!open)}>Toggle</Button>
    //     </div>
    //
    //     {/*useClickOutside*/}
    //     <Divider plain>
    //         useClickOutside
    //     </Divider>
    //     <div ref={buttonRef}>
    //         Click Outside
    //     </div>
    // </div>
  );
}
