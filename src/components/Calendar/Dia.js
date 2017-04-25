import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Dia.css';

/*const styleDefault = {
	marginTop: '5px',
    marginLeft: '5px',
    float: 'left',
    width: '15px',
    height: '15px',
    backgroundColor: 'transparent',
    borderBottomRightRadius: '30px'
}*/
/*
const styleDefault = {
	marginTop: '5px',
    marginLeft: '5px',
    float: 'left',
    width: '10px',
    height: '10px',
    backgroundColor: 'transparent',
    borderRadius: '5px'
    
}
*/
const styleDefault = {
	marginTop: '0px',
    marginLeft: '0px',
    xfloat: 'left',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    borderRadius:'3px'
    
}

const styleLevel3 = {
	color: '#D8000C',
	backgroundColor : '#FFBABA'
}

const styleLevel2 = {
	color: '#9F6000',
	backgroundColor : '#FEEFB3'
}

const styleLevel1 = {
	color : '#4F8A10',
	backgroundColor : '#DFF2BF'
}




class Dia extends Component {


	setStyle() {
		let style = styleDefault;
		if (this.props.inMonth) {

			if (this.props.level == 1) {
				style = {
					...style,
					...styleLevel1
				}
			} else if (this.props.level == 2) {
				style = {
					...style,
					...styleLevel2
				}
			}else if (this.props.level == 3) {
				style = {
					...style,
					...styleLevel3
				}
			}

		}

		

		this.style = style;

	}

	render() {

		this.setStyle();
		return (
			<div className="Dia-style">
				<span className="Dia-value" >
				 	{this.props.value}
				</span>
				<div style={this.style}></div>
			</div>
		);
	}
}


Dia.propTypes = {
	value : PropTypes.number,
	level : PropTypes.number
}

export default Dia;