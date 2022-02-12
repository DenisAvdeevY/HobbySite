import React, { useEffect, useState } from 'react';
import axios from "axios";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Activity} from './app/models/activity';
import NavBar from './app/layout/NavBar';
import './App.css';
import ActivitiesDashboard from './features/Actitvities/Dashboard/ActivitiesDashboard'


function App() {
	const [activities, setActivities] = useState<Activity[]>([]);
	const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
	const [editMode, setEditMode] = useState(false);

	useEffect(() => {
		axios.get<Activity[]>("http://localhost:5088/api/activities").then(response => {
			console.log(response);
			setActivities(response.data);
		})
	}, [])

	function handleSelectedActivity(id: string) {
		setSelectedActivity(activities.find(x => x.id === id))
	}

	function handleCancelSelectedActivity(){
		setSelectedActivity(undefined);
	}

	function handleFormOpen(id?: string){
		id ? handleSelectedActivity(id) : handleCancelSelectedActivity();
		setEditMode(true);
	}

	function handleFormClose(){
		setEditMode(false);
	}

	
	function handleCreateOrEditActivity(activity: Activity){
		activity.id
			? setActivities([...activities.filter(x => x.id !== activity.id), activity])
			: setActivities([...activities, activity]);
		setEditMode(false);
		setSelectedActivity(activity);
	}

  return (
		<Container maxWidth="xl">
				<NavBar openForm={handleFormOpen}/>
				<ActivitiesDashboard 
				 activities={activities}
				 selectedActivity={selectedActivity} 
				 selectActivity={handleSelectedActivity}
				 cancelSelectActivity={handleCancelSelectedActivity}
				 editMode={editMode}
				 openForm={handleFormOpen}
				 closeForm={handleFormClose}
				 createOrEdit={handleCreateOrEditActivity}
				/>
		</Container>
  );
}

export default App;
