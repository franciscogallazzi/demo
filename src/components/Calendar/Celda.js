import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Celda.css';

const styleLevel3 = {
	backgroundColor : '#FF5722',
	color: "white"
}

const styleLevel2 = {
	backgroundColor : '#FF9800',
	color: "white"
}

const styleLevel1 = {
	backgroundColor : '#4CAF50',
	color: "white"
}

const styleLevelDefault = {
	backgroundColor  : '#fffffd'
}

const styleIsToDay = {
	backgroundColor : "#9797ff",
	borderRadius:'3px',
	color: "white"
}

const styleNoMonth = {
	backgroundColor  : 'white',
	color:"white",
	borderColor:'white'
}






class Celda extends Component {

	
	setStyle() {

		let style = {};

		if (!this.props.inMonth) {
			style = styleNoMonth;
		} else if (this.props.isToDay) {
			style = styleIsToDay;
		} else {
			style = styleLevelDefault;
		}

		this.style = style;
		return ;

		this.style = Object.assign({},style,{
			borderLeftWidth: (this.props.borderLeft) ? '1px' : '0px',
			borderRightWidth: (this.props.borderRight) ? '1px' : '0px',
			borderTopWidth: (this.props.borderTop) ? '1px' : '0px',
			borderBottomWidth: (this.props.borderBottom) ? '1px' : '0px',
			borderTopLeftRadius: (this.props.borderTopLeftRadius) ? '5px' : '0px',
			borderTopRightRadius: (this.props.borderTopRightRadius) ? '5px' : '0px',
			borderBottomLeftRadius: (this.props.borderBottomLeftRadius) ? '5px' : '0px',
			borderBottomRightRadius: (this.props.borderBottomRightRadius) ? '5px' : '0px'

		});

	}

	render() {

		this.setStyle();

		return (
			<div className="Celda-style" style={this.style}>
				{this.props.children}
			</div>
		);
	}
}

Celda.defaultProps = {
	borderLeft: true,
	borderRight: true,
	borderTop: true,
	borderBottom: true,
	borderTopLeftRadius: false,
	borderTopRightRadius: false,
	borderBottomLeftRadius: false,
	borderBottomRightRadius: false
}

Celda.propTypes = {
	borderLeft : PropTypes.bool,
	borderRight : PropTypes.bool,
	borderTop : PropTypes.bool,
	borderBottom : PropTypes.bool,
	borderTopLeftRadius : PropTypes.bool,
	borderTopRightRadius : PropTypes.bool,
	borderBottomLeftRadius : PropTypes.bool,
	borderBottomRightRadius : PropTypes.bool
}

export default Celda;