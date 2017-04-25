import React, { Component } from 'react';

import Celda from './Celda';

import Dia from './Dia';

import Moment from 'react-moment';

/*const style = {
  height: '100%',
  width: '80%',
  margin: '0 auto',
  textAlign: 'center',
  xdisplay: 'inline-block',
  padding:'20px',
};
const styleRow = {
	display:'block'
};*/
const grillaProps = [
	{borderTopLeftRadius: true}, {borderLeft: false}, {borderLeft: false}, {borderLeft: false}, {borderLeft: false}, {borderLeft: false}, {borderLeft: false, borderTopRightRadius: true},
	{borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false},
	{borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false},
	{borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false},
	{borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false},
	{borderTop: false, borderBottomLeftRadius: true}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false}, {borderLeft: false, borderTop: false, borderBottomRightRadius: true}
];

class Calendar extends Component {

	constructor(props) {
		super(props);

		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
		this.toDay = this.toDay.bind(this);

		this.days = [];

		this.state = {
			date : new Date()
		}
		
	}

	

	calculateDays() {
		
		let date = this.state.date;
		let toDay = new Date();

		toDay.setHours(0,0,0,0);

		this.days = [];

		let month = date.getUTCMonth();
		let year = date.getUTCFullYear();

		let firstDate = new Date(year, month, 1,0,0,0,0);

		let firstDayOfMonth = firstDate.getUTCDay();
		
		firstDate.setUTCDate((firstDayOfMonth - 1) *(-1));
		

		for (let i = 0; i < 42; i++) {
			this.days.push({
				value : firstDate.getUTCDate(),
				inMonth : (month === firstDate.getUTCMonth()),
				isToDay : (toDay.getTime() === firstDate.getTime()),
				level : Math.floor((Math.random() * 3)+1)
			});
			firstDate.setUTCDate(firstDate.getUTCDate()+1);
		}
		
	}



	renderGrilla() {
		
		let r = [];

		let days = this.days;
		

		for (let i = 0; i < 6; i++) {
			let grilla=[];
			for (let j=i*7; j < i*7+7; j++) {

				grilla.push((
					<Celda key={'celda_'+j} {...grillaProps[j]} {...days[j]}>
						<Dia key={'dia_'+j} {...days[j]}/>
					</Celda>
					));
			}
			r.push((
				<div key={'row_' + i}>
					{grilla}
				</div>
				));
		}
		
		return r;
	}

	prev() {
		let date = this.state.date;
		let currentMonth = date.getUTCMonth();
		date.setUTCMonth(currentMonth-1);
		this.setState({date : date});
	}

	next() {
		let date = this.state.date;
		let currentMonth = date.getUTCMonth();
		date.setUTCMonth(currentMonth+1);
		this.setState({date : date});
	}

	toDay() {
		this.setState({date : new Date()});
	}

	render() {
		
		this.calculateDays()

		return (
			<div style={{paddingTop:'10px'}}>

				<div style={{margin:'0 auto', display:'table'}}>

					<h3 style={{textAlign:'center'}}>
						<Moment format="MMMM YYYY" locale="es">{this.state.date}</Moment>
					</h3>

					<button onClick={this.prev}>prev</button>
					<button onClick={this.next}>next</button>
					<button onClick={this.toDay}>to day</button>
					

					{
						this.renderGrilla()
					}
					
				</div>

			</div>
			

			
		);
	}

}


export default Calendar;