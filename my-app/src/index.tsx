import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme';
import { store, StoreContext } from './app/stores/store';


ReactDOM.render(
	<StoreContext.Provider value={store}>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />	
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</StoreContext.Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
