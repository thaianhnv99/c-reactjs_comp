import Box, { type BoxProps } from '@mui/material/Box';
import { useEffect, type ReactNode } from 'react';
import { useIntersectionObserver } from 'src/hooks/useIntersectionObserver';

type MessageItemProps = {
  content: ReactNode;
} & BoxProps;
const MessageItem = ({ content, sx, ...boxProps }: MessageItemProps) => {
  const [ref, entry] = useIntersectionObserver();

  useEffect(() => {
    if (!entry) return;
    if (entry.isIntersecting) {
      entry.target.classList.remove('blur');
    } else {
      entry.target.classList.add('blur');
    }
  }, [entry]);
  return (
    <Box
      ref={ref}
      sx={{
        padding: '5px 0 5px 0',
        transitionDelay: '10ms',
        '&.blur': {
          opacity: 0.3,
        },
        ...sx,
      }}
      {...boxProps}
    >
      {content}
    </Box>
  );
};

export default MessageItem;
