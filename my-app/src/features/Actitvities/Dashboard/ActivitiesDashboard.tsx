import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import {Activity} from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import Container from '@mui/material/Container'
import ActivityForm from '../from/ActivityForm';
interface Props {
	activities: Activity[];
	selectedActivity: Activity | undefined;
	selectActivity: (id: string) => void;
	cancelSelectActivity: () => void;
	editMode: boolean;
	openForm: (id: string) => void;
	closeForm: () => void;
	createOrEdit: (activity: Activity) => void;
}


export default function ActivityDashboard({activities, selectedActivity, selectActivity, cancelSelectActivity,editMode,openForm, closeForm, createOrEdit}: Props){
	return (
			<Container maxWidth='lg' sx={{display: 'flex'}}>
				<Grid item xs={8}>
					<ActivityList activities={activities} selectActivity={selectActivity}/>
				</Grid>
				<Grid item xs={4}>
					{ selectedActivity && !editMode &&
						<ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} openForm={openForm}/>}
						{ editMode &&
							<ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit}/>}
				</Grid>
			</Container>
	)
}