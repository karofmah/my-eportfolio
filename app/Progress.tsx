import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box className="h-screen flex items-center justify-center">
      <CircularProgress  />
    </Box>
  );
}