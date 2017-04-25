import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';
import './index.css';

baseTheme.palette.primary1Color = "#432356"; 

injectTapEventPlugin();

const Main = () => (
  	<Provider store={store}>
	  	<MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
	    	<App />
	  	</MuiThemeProvider>
	</Provider>
);

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
