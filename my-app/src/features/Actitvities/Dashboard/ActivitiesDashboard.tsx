import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import Container from '@mui/material/Container'
import ActivityForm from '../from/ActivityForm';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';

export default observer ( function ActivityDashboard(){

	const {activityStore} = useStore();
	const {selectedActivity, editMode, loadActivities, activityRegistry} = activityStore;

	useEffect(() => {
		if(activityRegistry.size <= 1)loadActivities();
	}, [activityRegistry.size, loadActivities])

	if (activityStore.loadingInitial){
		return <LoadingComponent/>
	}

	return (
			<Container maxWidth='lg' sx={{display: 'flex'}}>
				<Grid item xs={8}>
					<ActivityList/>
				</Grid>
				<Grid item xs={4}>
						{ selectedActivity && !editMode &&
						<ActivityDetails />}
						{ editMode &&
						<ActivityForm/>}
				</Grid>
			</Container>
	)
})