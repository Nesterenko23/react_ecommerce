import React from "react";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";
const CardSkeleton = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Stack spacing={1} sx={{margin: '20px 20px'}}>
      <Skeleton variant="rounded" height={350}/>
    </Stack>
    </Grid>
    
  )
};

export default CardSkeleton;
