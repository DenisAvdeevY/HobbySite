import React from 'react';
import Container from '@mui/material/Container';
import NavBar from './app/layout/NavBar';
import './App.css';
import { observer } from 'mobx-react-lite';
import HomePage from './features/home/HomePage';
import ActivitiesDashboard from './features/Actitvities/Dashboard/ActivitiesDashboard'
import ActivityForm from './features/Actitvities/from/ActivityForm';
import {Route, useLocation} from 'react-router-dom';
import ActivityDetails from './features/Actitvities/details/ActivityDetails';


function App() {
 
	const location = useLocation();

  return (
		<Container maxWidth="xl">
				<Route path="/" exact component={HomePage} />
				<Route
					path={'/(.+)'}
					render={() =>(
						<>
							<NavBar/>
							<Route path="/activities" exact component={ActivitiesDashboard} />
							<Route path="/activities/:id" component={ActivityDetails} />
							<Route key={location.key} path={["/createActiity", "/manage/:id"]} exact component={ActivityForm} />
						</>
					)}
				/>
					
		</Container>
  );
}

export default observer (App);
