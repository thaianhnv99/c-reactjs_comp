import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableNativeDebug from 'src/components/common/table/debug/TableNative';

const ResponsiveLayout = () => {
  return (
    <>
      <Typography mb={1}>Flexbox</Typography>
      <Box
        className="container"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,

          p: 1,
          border: '1px solid grey',
          '& .item': {
            height: 100,
            flexGrow: 1,
            flexBasis: 150,
            '&:nth-of-type(odd)': {
              backgroundColor: '#ff8787',
            },
            '&:nth-of-type(even)': {
              backgroundColor: '#bbbbbb',
            },
          },
        }}
      >
        <Box className="item"></Box>
        <Box className="item"></Box>
        <Box className="item"></Box>
        <Box className="item"></Box>
      </Box>
      <TableNativeDebug />
    </>
  );
};

export default ResponsiveLayout;
