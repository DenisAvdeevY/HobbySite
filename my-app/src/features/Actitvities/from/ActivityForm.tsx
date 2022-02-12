import React, { ChangeEvent, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import { Box, Button, FormGroup, Input, InputBase, InputLabel, TextField } from '@mui/material';
import { margin } from '@mui/system';
import { Activity } from '../../../app/models/activity';

interface Props{
	activity: Activity | undefined;
	closeForm: () => void;
	createOrEdit: (acivity: Activity) => void;
}

export default function ActivityForm({activity: selectedActivity, closeForm, createOrEdit}: Props){
	const initialState = selectedActivity ?? {
			id: '',
			title: '',
			date: '',
			description: '',
			category: '',
			city: '',
			venue: ''
	}

	const [activity, setActivity] = useState(initialState);

	function handleSubmit(){
		createOrEdit(activity);
	}

	function handleInputChange(event: ChangeEvent<HTMLInputElement>){
		const {name, value} = event.target;
		setActivity({...activity, [name]:value});
		
	}

	return (
		<form onSubmit={handleSubmit}>
			<FormGroup >
			<Input placeholder='Title' sx={{ margin: '5px'}} autoComplete='off' value={activity.title} name='title' onChange={handleInputChange} />
			<TextField minRows={2} multiline={true} placeholder='Description' autoComplete='off' value={activity.description}  sx={{ margin: '5px'}} name='description' onChange={handleInputChange} />
			<Input placeholder='Category' sx={{ margin: '5px'}} autoComplete='off' name='category' value={activity.category}  onChange={handleInputChange} />
			<Input placeholder='Date' sx={{ margin: '5px'}} autoComplete='off' name='date' value={activity.date}  onChange={handleInputChange} />
			<Input placeholder='City' sx={{ margin: '5px'}} autoComplete='off' name='city' value={activity.city}  onChange={handleInputChange} />
			<Input placeholder='Venue' sx={{ margin: '5px'}} autoComplete='off' name='venue' value={activity.venue}  onChange={handleInputChange} />
			<Box  alignSelf={'center'}>
				<Button variant="contained" sx={{ marginTop: '10px'}} type='submit' > Submit</Button>
				<Button onClick={closeForm} variant="contained"  sx={{ marginLeft: '10px', marginTop: '10px'}}>Cancel</Button>
			</Box>
		</FormGroup>
		</form>
		

	);
}