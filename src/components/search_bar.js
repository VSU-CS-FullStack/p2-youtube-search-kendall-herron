import React, { Component } from "react";

class SearchBar extends React.Component {
	render() {
		// When using any React variable/expression inside JSX, wrap it with { and }
		return <input onChange={event => console.log(event.target.value)} />;
	}
}

export default SearchBar;
