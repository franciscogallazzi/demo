
// UI ACTIONS TYPES
export const UI_OPEN_SIDE_MENU = "UI_OPEN_SIDE_MENU";
export const UI_CLOSE_SIDE_MENU = "UI_CLOSE_SIDE_MENU";


// UI ACTIONS CREATORS

export const uiOpenSideMenu = () => {
	return {
		type : UI_OPEN_SIDE_MENU
	}
}

export const uiCloseSideMenu = () => {
	return {
		type : UI_CLOSE_SIDE_MENU
	}
}