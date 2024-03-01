import { Box, Button, FormLabel } from '@mui/material';
import { Bottom } from 'src/components/component-pattern/Bottom';

export function Demo({ name, change }: { name: string; change: (name: string) => void }) {
  return (
    <Box>
      <FormLabel>Form setup click</FormLabel>
      <Button onClick={() => change(name)}>Toggle</Button>
      <Bottom>
        {/* <Bottom.Header>123</Bottom.Header> */}
        123
      </Bottom>
    </Box>
  );
}
