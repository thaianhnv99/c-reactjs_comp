import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextFieldUI from '../base/TextFieldUI';
import { type TextFieldVariant } from '../base/TextFieldUI/type';
import { useForm, useWatch } from 'react-hook-form';
import EditableTextField from '../base/TextFieldUI/EditableTextField';

const Inputs = () => {
  const [value, setValue] = useState('123');
  const [isDisabled, setIsDisabled] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [suffix, setSuffix] = useState('');

  const [variant, setVariant] = useState<TextFieldVariant>('outlined');

  const innerRef = useRef<HTMLInputElement>(null);

  const { register, control } = useForm({
    defaultValues: {
      a: '',
    },
  });

  const { a } = useWatch({ control });
  console.log(a);
  const [text, setText] = useState('');

  return (
    <Box>
      <TextFieldUI {...register('a')} />
      <TextField placeholder="TextField default of MUI" />
      {/* Option size */}
      <Stack direction="row" spacing={2}>
        <TextFieldUI ref={innerRef} placeholder="Default + small" size="small" />
        <TextFieldUI placeholder="Default + medium" size="medium" />
        <TextFieldUI placeholder="Default + large" size="large" />
      </Stack>

      {/* Default + small + onChange */}
      <TextFieldUI
        placeholder="Default + small"
        size="small"
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* Default + small + fullWidth */}
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

      {/* Default + error */}
      <Stack direction="row" spacing={2} alignItems="center" mt={2}>
        <TextFieldUI
          placeholder="Small + helperText"
          size="small"
          helperText="Caption detail"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <TextFieldUI
          placeholder="Medium + error"
          value={value}
          error
          onChange={(e) => setValue(e.target.value)}
        />
        <TextFieldUI placeholder="Default + small + error" size="small" error={hasError} />
        <Button onClick={() => setHasError((prev) => !prev)}>Set error</Button>
      </Stack>

      {/* Default + small + disabled */}
      <Stack direction="row" spacing={2} mt={2}>
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

      {/* Search + small + variant + fullWidth */}
      <Stack direction="row" spacing={2} mt={2}>
        <TextFieldUI
          placeholder="Search + small + variant + fullWidth"
          size="small"
          type="search"
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

      {/* Search + small + suffix */}
      <Stack direction="row" spacing={2} mt={2}>
        <TextFieldUI
          placeholder="Search + small"
          size="small"
          suffix={suffix}
          value={suffix}
          fullWidth
          onChange={(e) => setSuffix(e.target.value)}
        />
        <TextFieldUI
          placeholder="Search + medium + fullWidth"
          size="medium"
          suffix={suffix}
          fullWidth
        />
        <TextFieldUI
          placeholder="Search + large + fullWidth"
          size="large"
          type="search"
          suffix={suffix}
          fullWidth
        />
      </Stack>

      <EditableTextField
        containerProps={{
          sx: {
            width: 200,
          },
        }}
        text={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Box>
  );
};

export default Inputs;
