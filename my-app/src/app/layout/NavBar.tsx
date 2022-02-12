import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { Icon } from '@mui/material';
import HomeIcon from '../../assets/HomeIcon'
import { Activity } from '../models/activity';

const pages = ['Activities'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface Props {
	openForm: () => void;
}


export default function NavBar({openForm}: Props) {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
		<AppBar position="static" className='cherry' sx={{marginBottom: '25px'}}>
		<Container maxWidth="xl">
			<Toolbar sx={{margin: '5px'}} >
				<HomeIcon viewBox='0 0 24 24' sx={{margin: '5px'}}/>
				<Box sx={{  display: 'block' , marginLeft: '30px' }}>
					{pages.map((page) => (
						<Button
							key={page}
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: 'white', display: 'block' }}
						>
							{page}
						</Button>
					))}
				</Box>
				<Box sx={{ display: 'block', marginLeft: '30px' }}>
					<Button onClick={openForm} variant="contained" color="success" size='medium'>
								Create Activity
					</Button>
				</Box>
			</Toolbar>
		</Container>
	</AppBar>
  );
}