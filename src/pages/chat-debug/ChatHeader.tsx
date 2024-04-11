import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const ChatHeader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        height: '100%',
        maxHeight: 60,
        boxShadow: '0 0 4px rgb(0 0 0 / 21%)',
        zIndex: 2,
        flexShrink: 0,
        padding: 2,
      }}
    >
      <Box>User</Box>
      <Box>Action</Box>
    </Stack>
  );
};

export default ChatHeader;
