import React, { Component } from "react";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = { term: "" };
	}

	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermSearch({ term });
	}

	render() {
		return (
			<div classname="search_bar">
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
				/>
				{/* Value of input : {this.state.term}*/}
			</div>
		);
	}
}

export default SearchBar;
