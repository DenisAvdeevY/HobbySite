import React from 'react';
import {Activity} from '../../../app/models/activity';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Button, List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

interface Props{
	activities: Activity[];
	selectActivity: (id: string) => void;
}

export default function ({activities, selectActivity}: Props){
	return(
			<Grid item xs={12}>
						{activities.map(activity => (
							<Box sx={{display: 'flex', alignContent: 'center'}}>
								<Grid item xs={10}>
									<List>
										<ListItem >
											<ListItemText primary={activity.title} secondary={activity.city}/>
											<Button onClick={() => selectActivity(activity.id)} variant='contained' color='success'>
												Click me
											</Button>
										</ListItem>
									</List>
									<Divider/>
								</Grid>
								</Box >
						))}						
			</Grid>
	);
}