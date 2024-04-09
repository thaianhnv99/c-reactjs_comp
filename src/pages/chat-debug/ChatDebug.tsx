import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { fetchSeachListByTitle, type PostItem } from 'src/api/postApi';
import useKeepScrollPosition from 'src/hooks/useKeepScrollPosition';
import useOnScreen from 'src/hooks/useOnScreen';

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

  const sentMessage = () => {
    //Push message by socket
    scrollToBottom('auto');
    setTimeout(() => {
      const newMessageEmit: PostItem = {
        body: 'New',
        id: Math.floor(Math.random() * 1000000),
        title: 'new',
        userId: 2,
      };
      setMessages((old) => [...old, newMessageEmit]);
    }, 100);
  };

  useEffect(() => {
    if (isIntersecting) {
      getData();
    }
  }, [isIntersecting]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  });

  useMemo(() => {
    console.log('useMemo');
  }, []);
  return (
    <Box>
      <Box ref={refContainerMessageBox} height={500} overflow="auto">
        <Box ref={refFirstMessage} />
        {messages.map((message) => {
          return (
            <Box
              key={message.id + Math.random()}
              sx={{
                padding: '5px 0 5px 0',
              }}
            >
              {`${message.id}-${message.title}`}
            </Box>
          );
        })}
      </Box>

      <Button onClick={sentMessage}>Sent</Button>
    </Box>
  );
};

export default ChatDebug;
