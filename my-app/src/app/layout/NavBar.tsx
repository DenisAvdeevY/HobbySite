import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import HomeIcon from '../../assets/HomeIcon';
import {  Route } from 'react-router-dom';

export default function NavBar() {

  return (
		<AppBar position="static" className='cherry' sx={{marginBottom: '25px'}}>
		<Container maxWidth="xl">
			<Toolbar sx={{margin: '5px'}} >
				<HomeIcon viewBox='0 0 24 24' sx={{margin: '5px'}}/>
				<Box sx={{  display: 'block' , marginLeft: '30px' }} >
					<Route>
						<Button href="/activities" sx={{ my: 2, color: 'white', display: 'block' }}	>
							Activities
						</Button>
					</Route>
				</Box>
				<Box sx={{ display: 'block', marginLeft: '30px' }}>
					<Button href="/createActiity" variant="contained" color="success" size='medium'>
								Create Activity
					</Button>
				</Box>
			</Toolbar>
		</Container>
	</AppBar>
  );
}