import React from 'react';
import './App.css';
import {AppBar, Drawer, MenuItem, Avatar, FontIcon} from 'material-ui';
import Calendar from './Calendar/Calendar';
import {uiOpenSideMenu, uiCloseSideMenu} from '../actions';
import { connect } from 'react-redux';


const App = ({onHandlerLeftIconButtonTouchTap, onHandlerRequestChangeDrawer, open}) => (
	<div>
	<AppBar
	    title="Peluquerìa el CHOLITO"
	    iconClassNameRight="muidocs-icon-navigation-expand-more"
	    onLeftIconButtonTouchTap={onHandlerLeftIconButtonTouchTap}>
	</AppBar>

  <Calendar></Calendar>

	

	<Drawer
		docked={false} 
		open={open}
		onRequestChange={onHandlerRequestChangeDrawer}>
		<Avatar icon={<FontIcon className="muidocs-icon-communication-voicemail" />} />
		<p>Hola que tal che</p>
      	<MenuItem>Menu Item</MenuItem>
      	<MenuItem>Menu Item 2</MenuItem>
    </Drawer>
    </div>
)


const mapStateToProps = (state) => {
  return {
    open: state.ui.openSideMenu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHandlerLeftIconButtonTouchTap: () => {
      dispatch(uiOpenSideMenu())
    },
    onHandlerRequestChangeDrawer: () => {
      dispatch(uiCloseSideMenu())
    }

  }
}



const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


export default AppContainer;
