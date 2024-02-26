import { Box, Button, FormLabel } from '@mui/material'

export function Demo({ name, change }: { name: string; change: (name: string) => void }) {
  return (
    <Box>
      <FormLabel>Form setup click</FormLabel>
      <Button onClick={() => change(name)}>Toggle</Button>
    </Box>
  )
}
