import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { fetchSeachListByTitle, type PostItem } from 'src/api/postApi';
import useKeepScrollPosition from 'src/hooks/useKeepScrollPosition';
import MessageItem from './MessageItem';
import ChatFooter from './ChatFooter';
import { useIntersectionObserver } from 'src/hooks/useIntersectionObserver';

const ChatDebug = () => {
  const [messages, setMessages] = useState<PostItem[]>([]);
  const { containerRef: refContainerMessageBox, scrollToBottom } = useKeepScrollPosition([
    messages,
  ]);
  const [refFirstMessage, entry] = useIntersectionObserver();

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
        id: Math.floor(Math.random() * 1000),
        title: message,
        userId: Math.floor(Math.random() * 1000),
      };
      setMessages((old) => [...old, newMessageEmit]);
    }, 100);
  };

  useEffect(() => {
    console.log(entry?.isIntersecting);

    if (entry?.isIntersecting) {
      getData();
    }
  }, [entry]);

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
        {(() => {
          console.log('triiii');
          return '';
        })()}
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
