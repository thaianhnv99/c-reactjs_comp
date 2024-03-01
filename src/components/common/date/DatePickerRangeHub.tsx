import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

const DatePickerRangeHub = () => {
  return (
    <Box py={4}>
      <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
        <InputLabel>Query period</InputLabel>
        <TextField
          type="date"
          size="small"
          name="start date"
          InputLabelProps={{ shrink: true, required: true }}
        />{' '}
        ~
        <TextField
          type="date"
          size="small"
          name="end date"
          InputLabelProps={{ shrink: true, required: true }}
        />
        <Button color="secondary" disableElevation variant="contained">
          1 week
        </Button>
        <Button color="secondary" disableElevation variant="contained">
          Current month
        </Button>
        <Button color="secondary" disableElevation variant="contained">
          Previous month
        </Button>
      </Box>
    </Box>
  );
};

export default DatePickerRangeHub;
