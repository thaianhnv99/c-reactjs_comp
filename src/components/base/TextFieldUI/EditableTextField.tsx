import Box, { type BoxProps } from '@mui/material/Box';
import { type PropsWithChildren, useEffect, useRef, useState } from 'react';
import TextFieldUI from '.';

type EditableTextFieldProps = {
  text: string;
  height?: React.CSSProperties['height'];
  onChange: React.ComponentProps<typeof TextFieldUI>['onChange'];
  textFieldProps?: React.ComponentProps<typeof TextFieldUI>;
  containerProps?: BoxProps;
} & BoxProps;

const EditableTextField = ({
  text,
  height = 48,
  onChange,
  containerProps,
  textFieldProps,
}: PropsWithChildren<EditableTextFieldProps>) => {
  const refEditing = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  const { sx: containerSx, ...containerProp } = containerProps || {};
  const { sx: textFieldSx, ...textFieldProp } = textFieldProps || {};
  // const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
  //   console.log(e);
  // };

  useEffect(() => {
    if (refEditing && refEditing.current && isEditing === true) {
      refEditing.current.focus();
    }
  }, [isEditing]);
  return (
    <Box
      component="div"
      onBlur={setIsEditing.bind(null, false)}
      sx={{
        height,
        ...containerSx,
      }}
      {...containerProp}
    >
      {isEditing ? (
        <TextFieldUI
          inputRef={refEditing}
          value={text}
          onChange={onChange}
          fullWidth
          height={height}
          sx={{
            ...textFieldSx,
          }}
          {...textFieldProp}
        />
      ) : (
        <Box
          onClick={setIsEditing.bind(null, true)}
          sx={{
            height,
            display: 'flex',
            alignItems: 'center',
            // position: 'relative',
            // left: '12px',
            paddingLeft: '13px',
            '&:hover': {
              backgroundColor: '#a1bdd914',
            },
          }}
        >
          {text}
        </Box>
      )}
    </Box>
  );
};

export default EditableTextField;
