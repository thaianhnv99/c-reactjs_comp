import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { type KeyboardEvent, useCallback, useState } from 'react';
import TextFieldUI from 'src/components/base/TextFieldUI';

type ChatFooterProps = {
  sentMessage: (message: string) => void;
};
const ChatFooter = ({ sentMessage }: ChatFooterProps) => {
  const [value, setValue] = useState('');

  const handleSendMessage = useCallback(() => {
    if (!value) return;
    setValue('');
    sentMessage(value);
  }, [sentMessage, value]);

  const handleKeyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Stack direction="row" gap={1} p={2} px={1.5}>
      <TextFieldUI
        placeholder="Aa"
        size="small"
        variant="contained"
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyEnter}
      />
      <Button onClick={handleSendMessage}>Sent</Button>
    </Stack>
  );
};

export default ChatFooter;
