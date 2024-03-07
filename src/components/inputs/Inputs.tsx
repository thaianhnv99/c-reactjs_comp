import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextFieldUI from '../base/TextFieldUI';
import { type TextFieldVariant } from '../base/TextFieldUI/type';

const Inputs = () => {
  const [value, setValue] = useState('123');
  const [isDisabled, setIsDisabled] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [variant, setVariant] = useState<TextFieldVariant>('outlined');

  const innerRef = useRef<HTMLInputElement>(null);
  return (
    <Box>
      <TextField />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '10px',
        }}
      >
        <TextFieldUI ref={innerRef} placeholder="Default + small" size="small" />
        <TextFieldUI placeholder="Default + medium" size="medium" />
        <TextFieldUI placeholder="Default + large" size="large" />
      </Box>
      <TextFieldUI
        placeholder="Default + small"
        size="small"
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Stack direction="row" spacing={2} mt={2}>
        <TextFieldUI
          placeholder="Default + small + fullWidth"
          size="small"
          type="search"
          fullWidth
          value={value}
          onChange={(e) => setValue(e.target.value)}
          containerProps={{
            sx: {
              marginTop: 2,
            },
          }}
        />
        <Button onClick={() => setValue((prev) => prev + Math.random().toString())}>Set</Button>
        <Button onClick={() => setValue('')}>Clear</Button>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center" mt={2}>
        <TextFieldUI
          placeholder="Default + error"
          error
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <TextFieldUI placeholder="Default + small + error" size="small" error={hasError} />
        <Button onClick={() => setHasError((prev) => !prev)}>Set error</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextFieldUI
          placeholder="Default + small + disabled"
          size="small"
          disabled={isDisabled}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <TextFieldUI
          placeholder="Search + small + disabled"
          size="small"
          type="search"
          disabled={isDisabled}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button sx={{ ml: 2 }} onClick={() => setIsDisabled((prev) => !prev)}>
          {isDisabled ? 'Enable' : 'Disable'}
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} mt={2}>
        <TextFieldUI
          placeholder="Search + small + disabled"
          size="small"
          type="search"
          disabled={isDisabled}
          variant={variant}
          fullWidth
        />
        <Button
          variant="text"
          onClick={() => setVariant((prev) => (prev === 'contained' ? 'outlined' : 'contained'))}
        >
          {variant}
        </Button>
      </Stack>
    </Box>
  );
};

export default Inputs;
