import React, { SyntheticEvent } from 'react';
import { Button, List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

export default observer (function ActivitiesDashboard(){

	const {activityStore} = useStore();
	const {deleteActivity, activitiesByDate} = activityStore;

	function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){

		deleteActivity(id);
	}

	return(
			<Grid item xs={12}>
						{activitiesByDate.map(activity => (
							<Box sx={{display: 'flex', alignContent: 'center'}}>
								<Grid item xs={10}>
									<List>
										<ListItem >
											<ListItemText primary={activity.title} secondary={activity.city}/>
											<Button href={'/activities/'+activity.id} variant='contained' color='success'>
												Click me
											</Button>
											<Button onClick={(e) => handleActivityDelete(e, activity.id)} name={activity.id} variant='contained' color='error' sx={{margin: '10px'}}>
												Delete me
											</Button>
										</ListItem>
									</List>
									<Divider/>
								</Grid>
								</Box >
						))}						
			</Grid>
	);
})