import Box, { type BoxProps } from '@mui/material/Box';
import { type ReactNode } from 'react';

type MessageItemProps = {
  content: ReactNode;
} & BoxProps;
const MessageItem = ({ content, sx, ...boxProps }: MessageItemProps) => {
  return (
    <Box
      sx={{
        padding: '5px 0 5px 0',
        ...sx,
      }}
      {...boxProps}
    >
      {content}
    </Box>
  );
};

export default MessageItem;
