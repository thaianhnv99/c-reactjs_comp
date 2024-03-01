import { type DateRange, DateRangePicker } from '@mui/lab';
import React from 'react';
import { Box, TextField } from '@mui/material';

export function AppDateRangePicker() {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return (
    <Box width="500px">
      <DateRangePicker
        value={value}
        onChange={(newValue: DateRange<Date>) => {
          setValue(newValue);
        }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        renderInput={(startProps: any, endProps: any) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </Box>
  );
}
