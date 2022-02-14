import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box, Button, FormGroup, Input, TextField } from '@mui/material';
import { useStore } from '../../../app/stores/store';
import { useHistory, useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { v4 } from 'uuid';


export default function ActivityForm(){
	const history = useHistory();
	const {activityStore} = useStore();	
	const {createActivity, updateActivity, loadActivity, loadingInitial} = activityStore;
	const {id} = useParams<{id: string}>();

	const [activity, setActivity] = useState({
		id: '',
		title: '',
		date: '',
		description: '',
		category: '',
		city: '',
		venue: ''
	});

	function handleSubmit (){
		 if (activity.id.length === 0) {
				let newActivity = {
					...activity,
					id: v4()
				};
				createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`))
		 } else {
			 updateActivity(activity).then(() => history.push(`/activities/${activity.id}`))
		 }
	}

	useEffect(() => {
		if (id) loadActivity(id).then(activity => setActivity(activity!))
	}, [id, loadActivity]);

	function handleInputChange(event: ChangeEvent<HTMLInputElement>){
		const {name, value} = event.target;
		setActivity({...activity, [name]:value});
	}

	if (loadingInitial) return <LoadingComponent/>

	return (
		<form onSubmit={handleSubmit}>
			<FormGroup >
			<Input placeholder='Title' sx={{ margin: '5px'}} autoComplete='off' value={activity.title} name='title' onChange={handleInputChange} />
			<TextField minRows={2} multiline={true} placeholder='Description' autoComplete='off' value={activity.description}  sx={{ margin: '5px'}} name='description' onChange={handleInputChange} />
			<Input placeholder='Category' sx={{ margin: '5px'}} autoComplete='off' name='category' value={activity.category}  onChange={handleInputChange} />
			<Input placeholder='Date'  type='date' sx={{ margin: '5px'}} autoComplete='off' name='date' value={activity.date}  onChange={handleInputChange} />
			<Input placeholder='City' sx={{ margin: '5px'}} autoComplete='off' name='city' value={activity.city}  onChange={handleInputChange} />
			<Input placeholder='Venue' sx={{ margin: '5px'}} autoComplete='off' name='venue' value={activity.venue}  onChange={handleInputChange} />
			<Box  alignSelf={'center'}>
				<Button variant="contained" sx={{ marginTop: '10px'}} type='submit' > Submit</Button>
				<Button href='/activities' variant="contained"  sx={{ marginLeft: '10px', marginTop: '10px'}}>Cancel</Button>
			</Box>
		</FormGroup>
		</form>
		

	);
}