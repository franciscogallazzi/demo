import {UI_OPEN_SIDE_MENU, UI_CLOSE_SIDE_MENU} from '../actions';


const initialState = {
	openSideMenu : false
}

const uiReducer = (state = initialState, action) => {

	switch (action.type) {

		case UI_OPEN_SIDE_MENU:
			return Object.assign({}, state, {openSideMenu : true});

		case UI_CLOSE_SIDE_MENU:
			return Object.assign({}, state, {openSideMenu : false});

		default:
			return state;
	}
}

export default uiReducer;

