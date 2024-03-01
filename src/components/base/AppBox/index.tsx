import { Box, type BoxProps, useTheme } from '@mui/material';
export interface IAppBox extends BoxProps {
  color?: 'white' | 'gray10';
}

export function AppBox({ children, sx, color = 'white', ...props }: IAppBox) {
  const theme = useTheme();
  const { color: colors } = theme;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const styleColor: { [key in typeof color]: any } = {
    gray10: {
      backgroundColor: colors ? colors.gray10 : undefined,
    },
    white: {
      backgroundColor: colors ? colors.bg : undefined,
    },
  };
  return (
    <Box
      sx={{
        background: colors ? colors.bg : undefined,
        ...styleColor[color],
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
