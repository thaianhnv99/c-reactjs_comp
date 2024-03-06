import { Box, InputAdornment, useTheme } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import InputBase, { type InputBaseProps } from '@mui/material/InputBase';
import React, {
  type ChangeEvent,
  useRef,
  useState,
  type ForwardedRef,
  type MouseEvent,
  useEffect,
} from 'react';
import { mergeRef } from 'src/hooks/mergeRef';
import { type TypeTypography } from 'src/shared/utils/theme';
import IconUI from 'src/icons';
import { setNativeValue } from 'src/hooks/setNativeValue';
import { useClickOutside } from 'src/hooks/useClickOutside';

type TextFieldProps = Omit<InputBaseProps, 'error' | 'size'> & {
  size?: 'small' | 'medium' | 'large';
  variant?: 'search' | 'normal';
  error?: string | null | boolean;
  helperText?: string;
};
const TextField = (
  {
    sx,
    size,
    error,
    variant,
    helperText,
    value,
    disabled,
    readOnly,
    onChange,
    ...props
  }: TextFieldProps,
  outerRef: ForwardedRef<HTMLInputElement>
) => {
  const containerRef = useRef<HTMLInputElement>(null);
  const innerRef = useRef<HTMLInputElement>(null);
  const baseRef = mergeRef(outerRef, innerRef);

  const theme = useTheme();
  const colors = theme.color || {};
  const isSearch = variant === 'search';

  const [isShowClearBtn, setIsShowClearBtn] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [isDisabled, setIsDisabled] = useState(disabled);
  const [isStyleDisabled, setIsStyleDisabled] = useState(disabled || readOnly);

  useEffect(() => {
    setIsDisabled(disabled);
    setIsStyleDisabled(disabled || readOnly);
  }, [disabled, readOnly]);

  useEffect(() => {
    if (!value && variant === 'search') {
      setIsShowClearBtn(false);
    }
  }, [value, variant]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('change');

    onChange?.(e);
    setIsShowClearBtn(e.target.value.length > 0);
  };

  const handleFocus = () => {
    setIsShowClearBtn((innerRef.current?.value ?? '').length > 0);
    setIsFocus(true);
  };

  const handleBlur = () => {
    if (variant !== 'search') {
      setIsShowClearBtn(false);
    }
    setIsFocus(false);
  };

  const handleClear = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!innerRef.current) return;
    setNativeValue(innerRef.current, '');
    innerRef.current.focus();

    const event = new Event('change', { bubbles: true });
    innerRef.current.dispatchEvent(event);
  };

  useClickOutside([containerRef], handleBlur, true);

  console.log('isFocus', isFocus, isStyleDisabled);
  return (
    <>
      <InputBase
        ref={containerRef}
        inputRef={baseRef}
        onFocus={handleFocus}
        onChange={handleChange}
        value={value}
        disabled={isDisabled}
        sx={{
          border: `1px solid ` + (error ? colors.error : colors.gray20),
          borderRadius: '12px',
          transitionProperty: 'all',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '0.2s',
          '&:hover': {
            borderColor: error ? colors.error : colors.gray30,
          },
          '&:focus-within': {
            borderColor: error ? colors.error : colors.gray50,
          },
          'label + &': {
            // marginTop: theme.spacing(3),
          },

          '& .MuiInputBase-input': {
            position: 'relative',
            // backgroundColor:
            //   theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
            // width: 'auto',
            padding: 0,
            minWidth: '120px',
            height: size === 'small' ? '48px' : size === 'medium' ? '56px' : '64px',
            typography: (size === 'small'
              ? 'label'
              : size === 'medium'
                ? 'body'
                : 'copy') as TypeTypography,
            // transition: theme.transitions.create([
            //   'border-color',
            //   'background-color',
            //   'box-shadow',
            // ]),
            '&::placeholder': {
              color: colors.gray30,
            },
          },
          ...sx,
        }}
        startAdornment={
          isSearch ? (
            <InputAdornment
              position="start"
              sx={{
                marginLeft: '8px',
                marginRight: '8px',
                color: '#55617E',
              }}
            >
              <IconUI
                name="icon_search"
                size={size !== 'small' ? '25px' : '20px'}
                fill={colors.gray30}
              />
            </InputAdornment>
          ) : (
            <Box component="span" pl="12px"></Box>
          )
        }
        endAdornment={
          isShowClearBtn ? (
            <InputAdornment
              position="end"
              sx={{
                marginRight: '12px',
              }}
            >
              <Box
                onMouseDown={handleClear}
                sx={{
                  ...(size !== 'small'
                    ? {
                        width: '19px',
                        height: '19px',
                      }
                    : {
                        width: '16px',
                        height: '16px',
                      }),
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: colors.gray20,
                  color: 'white',
                  fontSize: '10px',
                  cursor: 'pointer',
                }}
              >
                x
              </Box>
            </InputAdornment>
          ) : (
            <Box component="span" padding="0 6px"></Box>
          )
        }
        {...props}
      />
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
    </>
  );
};

export default React.forwardRef(TextField);
