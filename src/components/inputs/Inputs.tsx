import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextfieldUI from '../base/inputs/Textfield';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Inputs = () => {
  const [value, setValue] = useState('123');
  const [isDisabled, setIsDisabled] = useState(false);

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
        <TextfieldUI variant="search" placeholder="Default + small" size="small" />
        <TextfieldUI variant="search" placeholder="Default + medium" size="medium" />
        <TextfieldUI variant="search" placeholder="Default + large" size="large" />
      </Box>
      <TextfieldUI
        placeholder="Default + small"
        size="small"
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
        sx={{
          marginTop: 2,
        }}
      />
      <Stack direction="row" spacing={2} mt={2}>
        <TextfieldUI
          placeholder="Default + small"
          size="small"
          variant="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          sx={{
            marginTop: 2,
          }}
        />
        <Button onClick={() => setValue((prev) => prev + Math.random().toString())}>Set</Button>
        <Button onClick={() => setValue('')}>Clear</Button>
      </Stack>
      <TextfieldUI
        placeholder="Default + small + error"
        size="small"
        error
        value={value}
        onChange={(e) => setValue(e.target.value)}
        sx={{
          marginTop: 2,
        }}
      />
      <Box>
        <TextfieldUI
          placeholder="Default + small + disabled"
          size="small"
          disabled={isDisabled}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          sx={{
            marginTop: 2,
          }}
        />
        <Button sx={{ ml: 2 }} onClick={() => setIsDisabled((prev) => !prev)}>
          Disable
        </Button>
      </Box>
    </Box>
  );
};

export default Inputs;
