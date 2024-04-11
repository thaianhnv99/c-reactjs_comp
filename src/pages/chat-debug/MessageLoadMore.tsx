import Box, { type BoxProps } from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

type MessageLoadMoreProps = BoxProps;
const MessageLoadMore = ({ sx, ...props }: MessageLoadMoreProps) => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        padding: 1,
        zIndex: 1,
        textAlign: 'center',
        ...sx,
      }}
      {...props}
    >
      <CircularProgress color="secondary" size="28px" />
    </Box>
  );
};

export default MessageLoadMore;
