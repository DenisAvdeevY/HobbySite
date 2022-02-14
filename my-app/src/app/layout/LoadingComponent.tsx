import { Box, CircularProgress } from '@mui/material';
import React from 'react';

interface Props{
	inverted?: boolean;
	content?: string;
}

export default function LoadingComponent({inverted = true, content = 'Loading...'}: Props){
	return (
		<Box alignSelf='center' alignContent='center'  justifyContent='center' sx={{display:'flex', marginTop: '20%'}}>
			<CircularProgress size={100}/>
		</Box>
	)
}