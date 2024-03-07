import React, { type ReactElement, type ForwardedRef } from 'react';
import TextFieldBase, { type TextFieldBaseProps } from './TextFieldBase';
import FormHelperText from '@mui/material/FormHelperText';
import { type SxProps, useTheme } from '@mui/material/styles';
import Box, { type BoxProps } from '@mui/material/Box';

type TextFieldUIProps = Omit<TextFieldBaseProps, 'ref'> & {
  helperText?: string;
  sxInput?: SxProps;
  sxContainer?: SxProps;
  containerProps?: BoxProps;
};

function TextFieldUI(
  { error, helperText, fullWidth, sx, sxContainer, containerProps, ...props }: TextFieldUIProps,
  outerRef: ForwardedRef<HTMLInputElement>
): ReactElement {
  const theme = useTheme();
  const colors = theme.color;
  return (
    <Box width={fullWidth ? '100%' : 'unset'} sx={sxContainer} {...containerProps}>
      <TextFieldBase ref={outerRef} error={error} fullWidth={fullWidth} sx={sx} {...props} />
      {error && (
        <FormHelperText
          sx={{
            color: colors.error,
            mt: '4px',
          }}
        >
          {typeof error === 'boolean' ? 'This field is required.' : error ?? helperText}
        </FormHelperText>
      )}
    </Box>
  );
}

export default React.forwardRef(TextFieldUI);
