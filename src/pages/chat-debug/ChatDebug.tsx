/* eslint-disable @typescript-eslint/no-unused-vars */
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { fetchSeachListByTitle, type PostItem } from 'src/api/postApi';
import useKeepScrollPosition from 'src/hooks/useKeepScrollPosition';
import MessageItem from './MessageItem';
import ChatFooter from './ChatFooter';
import { useIntersectionObserver } from 'src/hooks/useIntersectionObserver';
import MessageLoadMore from './MessageLoadMore';
import ChatHeader from './ChatHeader';

const ChatDebug = () => {
  const [messages, setMessages] = useState<PostItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const firstLoadingMessages = useRef(true);
  const { containerRef: refContainerMessageBox, scrollToBottom } = useKeepScrollPosition([
    messages,
  ]);
  const [refFirstMessage, entry] = useIntersectionObserver({
    threshold: 0,
    root: refContainerMessageBox,
    rootMargin: '500px',
  });

  const getData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchSeachListByTitle();
      setMessages((old) => [...old, ...data.data]);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
      firstLoadingMessages.current = false;
    }
  };

  const sentMessage = (message: string) => {
    if (firstLoadingMessages.current) return;
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
    if (!entry) return;
    if (entry.isIntersecting) {
      getData();
    }
  }, [entry]);

  return (
    <Box height="100%">
      <Stack
        direction="column"
        justifyContent="space-between"
        height={700}
        width={500}
        overflow="hidden"
        sx={{
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          borderRadius: '12px',
          position: 'relative',
          transform: 'translateY(-50%)',
          top: '50%',
          margin: 'auto',
        }}
      >
        <ChatHeader />
        <Box ref={refContainerMessageBox} overflow="auto" height="100%">
          {firstLoadingMessages.current ? (
            <MessageLoadMore
              sx={{
                position: 'sticky',
                top: 0,
                height: '100%',
                padding: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          ) : isLoading ? (
            <MessageLoadMore />
          ) : null}
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
