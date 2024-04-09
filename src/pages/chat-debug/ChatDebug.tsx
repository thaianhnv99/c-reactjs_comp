import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useEffect, useRef, useState } from 'react';
import { fetchSeachListByTitle, type PostItem } from 'src/api/postApi';
import useKeepScrollPosition from 'src/hooks/useKeepScrollPosition';
import useOnScreen from 'src/hooks/useOnScreen';
import MessageItem from './MessageItem';
import ChatFooter from './ChatFooter';

const ChatDebug = () => {
  const [messages, setMessages] = useState<PostItem[]>([]);
  const refFirstMessage = useRef<HTMLDivElement>(null);
  const isIntersecting = useOnScreen(refFirstMessage);
  const { containerRef: refContainerMessageBox, scrollToBottom } = useKeepScrollPosition([
    messages,
  ]);

  const getData = async () => {
    try {
      const data = await fetchSeachListByTitle();
      setMessages((old) => [...old, ...data.data]);
    } catch (e) {
      console.log(e);
    }
  };

  const sentMessage = (message: string) => {
    //Push message by socket
    scrollToBottom('auto');
    setTimeout(() => {
      const newMessageEmit: PostItem = {
        body: message,
        id: Math.floor(Math.random() * 1000000),
        title: message,
        userId: Math.floor(Math.random() * 1000000),
      };
      setMessages((old) => [...old, newMessageEmit]);
    }, 100);
  };

  useEffect(() => {
    if (isIntersecting) {
      getData();
    }
  }, [isIntersecting]);

  return (
    <Box>
      <Stack
        direction="column"
        justifyContent="space-between"
        height={500}
        width={500}
        sx={{
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          borderRadius: '12px',
        }}
      >
        <Box ref={refContainerMessageBox} overflow="auto">
          <Box ref={refFirstMessage} />
          {messages.map((message) => (
            <MessageItem
              key={message.id + Math.random()}
              content={`${message.id}-${message.title}`}
              sx={{
                px: 1.5,
              }}
            />
          ))}
        </Box>
        <ChatFooter sentMessage={sentMessage} />
      </Stack>
    </Box>
  );
};

export default ChatDebug;
