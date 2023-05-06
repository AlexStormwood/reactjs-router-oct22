// import React from "react";
import {Component} from "react";
import { Navigate } from "react-router-dom";

export default class RedirectHomeButton extends Component {
	constructor(props){
		super(props);

		this.state = {
			shouldRedirect: false
		}
	}

	render(){
		return(
			<div>
				<button onClick={() => this.setState({shouldRedirect: true})}>
					Return Home
				</button>
				{this.state.shouldRedirect && <Navigate to="/" />}
			</div>
		)
	}
}